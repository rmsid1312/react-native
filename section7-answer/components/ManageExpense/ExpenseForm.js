import { Text, View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function amountChangedHandler() {}
  return (
    <View className="mt-10">
      <Text className="my-6 text-2xl font-bold text-center text-white">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <Input
          label="Amount"
          className="flex-1"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          label="Date"
          className="flex-1"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCapitalize: "none",
          //   autocorrect: false, // default is true
        }}
      />
    </View>
  );
}
