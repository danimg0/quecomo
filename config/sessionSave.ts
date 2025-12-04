import AsyncStorage from '@react-native-async-storage/async-storage';
import { Session } from '@supabase/supabase-js';

async function saveSession(session: Session) {
  try {
    await AsyncStorage.setItem('userSession', JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save session:', e);
  }
}
async function getSession() {
  try {
    const session = await AsyncStorage.getItem('userSession');
    return session ? JSON.parse(session) : null;
  } catch (e) {
    console.error('Failed to retrieve session:', e);
  }
}
