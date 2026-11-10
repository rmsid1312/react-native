import { Text, TextInput, View } from "react-native";

export default function Input({ label, className, textInputConfig, inValid }) {
  return (
    <View className={`mx-1 my-2  ${className ?? ""} `}>
      <Text className={`mb-1 text-lg text-primary100 }`}>{label}</Text>
      <TextInput
        {...textInputConfig}
        className={` p-[6] rounded-lg text-lg text-primary700 
            ${textInputConfig.multiline ? "min-h-24 align-top" : ""} 
            ${inValid ? "bg-error50" : "bg-primary100"}
        `}
      />
    </View>
  );
}
