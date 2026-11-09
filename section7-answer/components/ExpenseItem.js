import { Pressable, Text, View } from "react-native";

export default function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View className="flex-row justify-between p-3 my-2 bg-primary500 rounded-xl android:elevation-md ios:shadow-md">
        <View>
          <Text className="text-lg font-bold text-primary50">
            {description}
          </Text>
          <Text className="text-primary50">{date.toString()}</Text>
        </View>
        <View className="items-center justify-center px-3 py-1 bg-white rounded-lg">
          <Text className="font-bold text-primary500">{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
