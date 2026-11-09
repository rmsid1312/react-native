import { Pressable, Text, View } from "react-native";
import { getFormattedDate } from "../util/date";
export default function ExpenseItem({ description, amount, date }) {
  function expensePressHandler() {}
  return (
    <Pressable onPress={expensePressHandler} className="active:opacity-70">
      <View className="flex-row justify-between p-3 my-2 bg-primary500 rounded-xl android:elevation-md ios:shadow-md">
        <View>
          <Text className="text-lg font-bold text-primary50">
            {description}
          </Text>
          <Text className="text-primary50">{getFormattedDate(date)}</Text>
        </View>
        <View className="items-center justify-center px-3 py-1 bg-white rounded-lg min-w-[80]">
          <Text className="font-bold text-primary500">{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
