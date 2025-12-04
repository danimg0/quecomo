import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/auth/login" />;
  // return <View className="flex-1 justify-center items-center"></View>;
}
