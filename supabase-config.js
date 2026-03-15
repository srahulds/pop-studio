// ============================================
// POP STUDIO — SHARED SUPABASE CONFIG
// ============================================
const SUPABASE_URL  = 'https://fxuinuxyjhjxygdhskfn.supabase.co';
const SUPABASE_ANON = 'sb_publishable_Mgh-fEqB3IVF4iTvV0-rjw_GkfftY_5';

function getSupabase() {
  if (window._popClient) return window._popClient;
  window._popClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: {
      storageKey: 'pop-studio-auth',
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
  return window._popClient;
}
