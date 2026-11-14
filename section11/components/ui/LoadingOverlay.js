import { ActivityIndicator, Text, View } from 'react-native';

function LoadingOverlay({ message }) {
  return (
    <View className="flex-1 items-center justify-center p-8">
      <Text className="mb-3 text-base">{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;
