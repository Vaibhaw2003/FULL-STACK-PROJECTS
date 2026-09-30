import express from 'express';
import multer from 'multer';
import crypto from 'crypto';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }
});

const generateId = () => crypto.randomUUID();

const getAuthToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
};

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { title, subject, description } = req.body;
    const supabase = req.supabase;

    if (!title || !subject) {
      return res.status(400).json({ error: 'Title and subject are required' });
    }

    const token = getAuthToken(req);
    if (!token) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    let fileUrl = null;

    if (req.file) {
      const fileId = generateId();
      const fileName = `${fileId}-${req.file.originalname}`;
      const filePath = `notes/${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('notes')
        .upload(filePath, req.file.buffer, {
          contentType: req.file.mimetype,
        });

      if (uploadError) {
        return res.status(500).json({ error: 'File upload failed', details: uploadError });
      }

      const { data: { publicUrl } } = supabase.storage
        .from('notes')
        .getPublicUrl(filePath);

      fileUrl = publicUrl;
    }

    const { data, error } = await supabase
      .from('notes')
      .insert([
        {
          user_id: user.id,
          title,
          subject,
          description: description || null,
          file_url: fileUrl,
        }
      ])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: 'Failed to create note', details: error });
    }

    res.status(201).json({ message: 'Note created successfully', data });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const supabase = req.supabase;
    const { subject } = req.query;

    const token = getAuthToken(req);
    if (!token) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    let query = supabase
      .from('notes')
      .select('*')
      .eq('user_id', user.id);

    if (subject) {
      query = query.eq('subject', subject);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch notes', details: error });
    }

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const supabase = req.supabase;
    const { id } = req.params;

    const token = getAuthToken(req);
    if (!token) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

router.put('/:id', upload.single('file'), async (req, res) => {
  try {
    const supabase = req.supabase;
    const { id } = req.params;
    const { title, subject, description } = req.body;

    const token = getAuthToken(req);
    if (!token) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { data: existingNote, error: fetchError } = await supabase
      .from('notes')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (fetchError || !existingNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    let fileUrl = existingNote.file_url;

    if (req.file) {
      const fileId = generateId();
      const fileName = `${fileId}-${req.file.originalname}`;
      const filePath = `notes/${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('notes')
        .upload(filePath, req.file.buffer, {
          contentType: req.file.mimetype,
        });

      if (uploadError) {
        return res.status(500).json({ error: 'File upload failed', details: uploadError });
      }

      const { data: { publicUrl } } = supabase.storage
        .from('notes')
        .getPublicUrl(filePath);

      fileUrl = publicUrl;
    }

    const { data, error } = await supabase
      .from('notes')
      .update({
        title: title || existingNote.title,
        subject: subject || existingNote.subject,
        description: description || existingNote.description,
        file_url: fileUrl,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: 'Failed to update note', details: error });
    }

    res.json({ message: 'Note updated successfully', data });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const supabase = req.supabase;
    const { id } = req.params;

    const token = getAuthToken(req);
    if (!token) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      return res.status(500).json({ error: 'Failed to delete note', details: error });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

export { router as notesRoutes };
