# ExamSathi Backend

A Node.js/Express backend for the ExamSathi application, built with Supabase for database and file storage.

## Features

- User authentication via Supabase
- Create, read, update, and delete notes
- File upload support for notes (PDFs, images, etc.)
- Filter notes by subject/category
- Row-level security for user data privacy

## Setup Instructions

### 1. Environment Variables

The `.env` file is already configured with Supabase credentials:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### 2. Database

The database migration automatically creates:
- `notes` table with proper structure
- Row-level security policies
- Indexes for optimized queries

### 3. Storage Bucket

Create a storage bucket for file uploads:

1. Go to Supabase Dashboard
2. Navigate to Storage
3. Create a new bucket named `notes`
4. Set the bucket to Private
5. Add the following policy:

```sql
CREATE POLICY "Users can upload their own note files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'notes' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can download their own note files"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'notes' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can delete their own note files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'notes' AND (storage.foldername(name))[1] = auth.uid()::text);
```

### 4. Start the Server

```bash
npm install
npm start
```

The server will run on `http://localhost:3000`

Health check: `GET http://localhost:3000/health`

## API Endpoints

### Create Note
```
POST /api/notes
Authorization: Bearer {token}
Content-Type: multipart/form-data

Body:
- title (required): string
- subject (required): string
- description (optional): string
- file (optional): file
```

### Get All Notes
```
GET /api/notes?subject={optional_subject}
Authorization: Bearer {token}
```

### Get Single Note
```
GET /api/notes/{noteId}
Authorization: Bearer {token}
```

### Update Note
```
PUT /api/notes/{noteId}
Authorization: Bearer {token}
Content-Type: multipart/form-data

Body:
- title (optional): string
- subject (optional): string
- description (optional): string
- file (optional): file
```

### Delete Note
```
DELETE /api/notes/{noteId}
Authorization: Bearer {token}
```

## Frontend Integration

Use the Supabase client in your frontend to:

1. Get the user's authentication token
2. Send requests to the backend with the `Authorization: Bearer {token}` header

Example:
```javascript
const response = await fetch('http://localhost:3000/api/notes', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${session.access_token}`,
  },
  body: formData
});
```

## Security

- All endpoints require authentication
- Users can only access their own notes
- File uploads are validated by type and size (50MB limit)
- Row-level security policies enforce data isolation
