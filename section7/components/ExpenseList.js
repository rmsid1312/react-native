import { FlatList, View } from "react-native";

export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => (
        <View className="flex-row justify-between p-4 rounded-xl items-between bg-[#b4addb] m-2">
          <View className="flex-1">
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
          </View>
          <View>
            <Text>{item.amount}</Text>
          </View>
        </View>
      )}
      key={item.id}
    />
  );
}
