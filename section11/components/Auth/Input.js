import { View, Text, TextInput } from "react-native";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View className="my-2">
      <Text className={`mb-1 ${isInvalid ? "text-error500" : "text-white"}`}>
        {label}
      </Text>
      <TextInput
        className={`rounded px-1.5 py-2 text-base ${
          isInvalid ? "bg-error100" : "bg-primary100"
        }`}
        // autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;
