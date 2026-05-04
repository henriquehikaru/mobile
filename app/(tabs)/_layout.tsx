import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#EA1D2C' },
        headerTintColor: '#FFF',
        tabBarActiveTintColor: '#EA1D2C',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }} 
      />

      <Tabs.Screen 
        name="about" 
        options={{ 
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="info-circle" size={20} color={color} />
          ),
        }} 
      />

      <Tabs.Screen 
        name="toDoList" 
        options={{ 
          title: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list" size={20} color={color} />
          ),
        }} 
      />

      <Tabs.Screen 
        name="cartScreen" 
        options={{ 
          title: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={20} color={color} />
          ),
        }} 
      />

      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}