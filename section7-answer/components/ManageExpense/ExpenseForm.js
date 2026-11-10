import { Alert, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../UI/Button";
import { getFormattedDate } from "../../util/date";

export default function ExpenseForm({
  onCancel,
  onSubmit,
  subitButtonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionValid) {
      setInputs((curInputs) => ({
        amount: { value: curInputs.amount.value, isValid: amountIsValid },
        date: { value: curInputs.date.value, isValid: dateIsValid },
        description: {
          value: curInputs.description.value,
          isValid: descriptionValid,
        },
      }));
      return;
    }

    onSubmit(expenseData);
  }

  const isFormInvaild =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View className="mt-10">
      <Text className="my-6 text-2xl font-bold text-center text-white">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <Input
          label="Amount"
          inValid={!inputs.amount.isValid}
          className="flex-1"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (enteredValue) =>
              inputChangedHandler("amount", enteredValue),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          inValid={!inputs.date.isValid}
          className="flex-1"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredValue) =>
              inputChangedHandler("date", enteredValue),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        inValid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          //   autoCapitalize: "none",
          //   autocorrect: false, // default is true
          onChangeText: (enteredValue) =>
            inputChangedHandler("description", enteredValue),
          value: inputs.description.value,
        }}
      />
      {isFormInvaild && (
        <Text className="m-2 text-center text-error500">
          Please check your input values
        </Text>
      )}
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
