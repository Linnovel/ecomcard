import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductList from './components/ProductList';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Text className="dark:text-white text-2xl font-bold">New Collection</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === 'dark' ? "light" : "dark"} />
    </SafeAreaView>
  );
}

