import { Text, TextInput, View } from "react-native";

export default function Input({ label, textInputConfig }) {
  return (
    <View className="mx-1 my-2">
      <Text className="mb-1 text-lg text-primary100">{label}</Text>
      <TextInput
        {...textInputConfig}
        className={`bg-primary100 p-[6] rounded-lg text-lg text-primary700 ${textInputConfig.multiline ? "min-h-24 align-top" : ""}`}
      />
    </View>
  );
}
