import { Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../UI/Button";

export default function ExpenseForm({ onCancel, onSubmit, subitButtonLabel }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  }

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
            onChangeText: (enteredValue) =>
              inputChangedHandler("amount", enteredValue),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          className="flex-1"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredValue) =>
              inputChangedHandler("date", enteredValue),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCapitalize: "none",
          //   autocorrect: false, // default is true
          onChangeText: (enteredValue) =>
            inputChangedHandler("description", enteredValue),
          value: inputValues.description,
        }}
      />
      <View className="flex-row items-center justify-center ">
        <Button mode="flat" onPress={onCancel} className="min-w-[120px] mx-2">
          Cancel
        </Button>
        <Button onPress={submitHandler} className="min-w-[120px] mx-2">
          {subitButtonLabel}
        </Button>
      </View>
    </View>
  );
}
