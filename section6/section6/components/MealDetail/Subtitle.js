import { Text, View } from "react-native";

export default function Subtitle({ title }) {
  return (
    <View className="p-[6] m-1 border-b-[#e2b497] border-b-2 mx-3 my-1 ">
      <Text className="m-[6] text-xl font-bold  text-center text-[#e2b497]">
        {title}
      </Text>
    </View>
  );
}
