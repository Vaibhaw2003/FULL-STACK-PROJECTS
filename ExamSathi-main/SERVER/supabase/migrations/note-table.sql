/*
  # Create Notes Table

  1. New Tables
    - `notes`
      - `id` (uuid, primary key) - Unique identifier for each note
      - `user_id` (uuid) - Reference to authenticated user
      - `title` (text) - Title of the note
      - `subject` (text) - Subject/category of the note
      - `description` (text) - Description or content of the note
      - `file_url` (text) - URL to uploaded file (PDF, image, etc.)
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

  2. Security
    - Enable RLS on `notes` table
    - Add policy for authenticated users to create notes
    - Add policy for users to view their own notes
    - Add policy for users to update their own notes
    - Add policy for users to delete their own notes
*/

CREATE TABLE IF NOT EXISTS notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  subject text NOT NULL,
  description text,
  file_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can create their own notes"
  ON notes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own notes"
  ON notes FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notes"
  ON notes FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own notes"
  ON notes FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX idx_notes_user_id ON notes(user_id);
CREATE INDEX idx_notes_subject ON notes(subject);