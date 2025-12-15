import { useAuth } from '@/hooks/auth/useAuth';
import { Redirect } from 'expo-router';

export default function Index() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href={'/home'} />;
  } else {
    return <Redirect href="/auth/login" />;
  }

  // return <View className="flex-1 justify-center items-center"></View>;
}
