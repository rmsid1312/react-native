import { Button, Text, View } from "react-native";

export default function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View className="items-center flex-1 text-center">
      <Text>This is the user screen</Text>
      <Button title="Open drawer" onPress={openDrawerHandler} />
    </View>
  );
}
