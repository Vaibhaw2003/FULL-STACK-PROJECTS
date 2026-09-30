import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import multer from 'multer';
import { notesRoutes } from './routes/notes.js';
import router from './routes/upload.js';  


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase configuration');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
  req.supabase = supabase;
  next();
});

app.use('/api/notes', notesRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'ExamSathi Backend is running' });

app.use("/api", uploadRoute);
app.use("/uploads", express.static("uploads"));

});

app.listen(PORT, () => {
  console.log(`ExamSathi backend running on http://localhost:${PORT}`);
});
