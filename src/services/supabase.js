import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wbywwgwkqnxfssdndlkr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndieXd3Z3drcW54ZnNzZG5kbGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxNDA3NDMsImV4cCI6MjA3ODcxNjc0M30.0cajdNtPCD5XjZ-Idx9pH9fi7f6kEbFiKRXePRl7a5E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
