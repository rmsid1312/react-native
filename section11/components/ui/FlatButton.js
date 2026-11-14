import { Pressable, Text, View } from 'react-native';

function FlatButton({ children, onPress }) {
  return (
    <Pressable className="px-3 py-1.5 active:opacity-70" onPress={onPress}>
      <View>
        <Text className="text-center text-primary100">{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;
