import { View } from "react-native";
import { Text } from "react-native";
import { Title } from "../components/ui/Title";
import { Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

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
        <Text className="my-6 text-xl text-center">
          Your phone needed{" "}
          <Text className="font-open-sans text-rose-950">X</Text> rounds to
          guess the number
          <Text className="font-open-sans text-rose-950"> Y</Text>.
        </Text>
        <PrimaryButton>Start new Game</PrimaryButton>
      </View>
    </View>
  );
}
