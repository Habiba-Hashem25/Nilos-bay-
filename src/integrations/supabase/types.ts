export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      guest_submissions: {
        Row: {
          created_at: string;
          email: string | null;
          id: string;
          name: string;
          notes: string | null;
          party_size: number | null;
          phone: string;
          venue_interest: string | null;
          visit_date: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: string;
          name: string;
          notes?: string | null;
          party_size?: number | null;
          phone: string;
          venue_interest?: string | null;
          visit_date?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: string;
          name?: string;
          notes?: string | null;
          party_size?: number | null;
          phone?: string;
          venue_interest?: string | null;
          visit_date?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
