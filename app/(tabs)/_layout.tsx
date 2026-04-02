import { Stack, Tabs } from 'expo-router';
import { StackScreen } from 'react-native-screens';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}
    >
      <Tabs.Screen
      name="index"
    </Tabs>
    />
  );
}