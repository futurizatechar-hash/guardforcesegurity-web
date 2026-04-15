-- Script SQL para crear la tabla de leads en Supabase
-- Puedes ejecutar esto desde el SQL Editor de tu proyecto (https://mxdzeziyzitmlgngkelg.supabase.co)

CREATE TABLE "leads-guardforcesegurity" (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  nombre text not null,
  empresa text not null,
  email text not null,
  telefono text not null,
  estado_embudo text default 'nuevo'::text,
  resumen_chat text
);

-- Habilitar Row Level Security (RLS) pero permitir inserciones anonimas
ALTER TABLE "leads-guardforcesegurity" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir inserción de leads anónimos"
ON "leads-guardforcesegurity"
FOR INSERT
TO anon
WITH CHECK (true);

-- (Opcional) Política para permitir a un rol autenticado leer la tabla
CREATE POLICY "Permitir lectura a usuarios autenticados"
ON "leads-guardforcesegurity"
FOR SELECT
TO authenticated
USING (true);
