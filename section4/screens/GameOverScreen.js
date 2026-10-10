import { View } from "react-native";
import { Text } from "react-native";
import { Title } from "../components/ui/Title";
import { Image } from "react-native";

export default function GameOverScreen() {
  return (
    <View className="items-center justify-center flex-1 p-12">
      <Title>GAME OVER!</Title>
      <View className="m-9 h-[350px] w-[350px] overflow-hidden rounded-full border-[3px] border-rose-950">
        <Image
          source={require("../assets/images/success.png")}
          className="w-full h-full"
        />
      </View>
      <View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
      </View>
    </View>
  );
}
