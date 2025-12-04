import { supabase } from '../api/config/supabase';

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Logout error:', error.message);
  } else {
    console.log('User logged out.');
  }
}
