import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mlojetsinwgpbwzaoksg.supabase.co"
const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sb2pldHNpbndncGJ3emFva3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NDQ4NDUsImV4cCI6MjA2MTUyMDg0NX0.SAo04muF1rB9WY8zF1NjnbiRvBAOy7mA7uusWlwozNI"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)