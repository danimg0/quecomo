import { supabase } from '../api/config/supabase';

async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error('Signup error:', error.message);
  } else {
    console.log('User signed up:', data.user);
  }
}
