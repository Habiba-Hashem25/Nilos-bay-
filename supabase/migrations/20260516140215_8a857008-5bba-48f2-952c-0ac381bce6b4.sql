CREATE TABLE public.guest_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  visit_date DATE,
  party_size INT,
  venue_interest TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.guest_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit guest list entry"
  ON public.guest_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
