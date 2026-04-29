<<<<<<< HEAD
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="+not-found" />
    </Stack>
=======
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }}/>
      <Tabs.Screen name="about" options={{ title: 'About' }}/> 
    </Tabs>
>>>>>>> 5d679421bc4e50c1229e36baf6e47bf85a8b02a5
  );
}