import { Text, View } from 'react-native';

function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-8">
      <Text className="mb-2 text-xl font-bold">Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;
