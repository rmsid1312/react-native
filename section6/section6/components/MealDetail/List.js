import { Text, View } from "react-native";

export default function List({ data }) {
  return data.map((item) => (
    <View key={item} className="px-1 py-2 rounded-xl my-1 mx-3 bg-[#e2b497]">
      <Text className="text-center text-[#351401]">{item}</Text>
    </View>
  ));
}
