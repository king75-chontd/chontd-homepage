-- Run this in Supabase SQL Editor to create the contact_inquiries table for the partnership form.

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  company text,
  message text not null
);

-- Optional: enable RLS and allow service role to insert (API uses service role key)
alter table public.contact_inquiries enable row level security;

create policy "Service role can insert"
  on public.contact_inquiries
  for insert
  to service_role
  with check (true);

-- Optional: allow authenticated admin to read (e.g. for future dashboard)
-- create policy "Authenticated can read"
--   on public.contact_inquiries for select to authenticated with check (true);
