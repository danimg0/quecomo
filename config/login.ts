import { supabase } from '../api/config/supabase';

async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('Login error:', error.message);
  } else {
    console.log('User logged in:', data.session);
  }
}
