import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
