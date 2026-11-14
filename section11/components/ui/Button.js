import { Pressable, Text, View } from 'react-native';

function Button({ children, onPress }) {
  return (
    <Pressable className="active:opacity-70" onPress={onPress}>
      <View className="rounded-md bg-primary500 px-3 py-1.5 android:elevation-sm ios:shadow">
        <Text className="text-center text-base font-bold text-white">
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;
