import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/home" />;
  // return <View className="flex-1 justify-center items-center"></View>;
}
