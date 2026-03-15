// ============================================
// POP STUDIO — SHARED SUPABASE CONFIG
// Import this in every page via <script src="supabase-config.js">
// IMPORTANT: Replace SUPABASE_URL and SUPABASE_ANON_KEY with your actual values.
// Never expose your service_role key here — anon key only.
// ============================================

const SUPABASE_URL  = 'https://fxuinuxyjhjxygdhskfn.supabase.co';
const SUPABASE_ANON = 'sb_publishable_Mgh-fEqB3IVF4iTvV0-rjw_GkfftY_5';

// Singleton — safe to call multiple times across pages
function getSupabase() {
  if (window._popClient) return window._popClient;
  window._popClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  return window._popClient;
}
