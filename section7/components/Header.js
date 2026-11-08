import { Text, View } from "react-native";

export default function Header({ title, expenses }) {
  let amounts = 0;
  return (
    <View className="flex-1 m-4">
      <View className="flex-row justify-between p-4 rounded-xl items-between bg-[#a194e7] ">
        <Text className="text-[#711ae2]">{title}</Text>
        <Text className="text-[#1b0d58]">${amounts}</Text>
      </View>
    </View>
  );
}
