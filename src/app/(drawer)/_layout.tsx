import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="atlas" options={{ title: 'Atlas' }} />
        <Drawer.Screen name="menu" options={{ title: 'Menu' }} />
        <Drawer.Screen name="metabuilds" options={{ title: 'Builds' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
