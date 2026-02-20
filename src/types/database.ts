export type Database = {
  public: {
    Tables: {
      contact_inquiries: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string | null;
          message: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company?: string | null;
          message: string;
        };
      };
    };
  };
};
