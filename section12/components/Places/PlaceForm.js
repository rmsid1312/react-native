import { useCallback, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  function savePlaceHandler() {
    console.log(enteredTitle);
    console.log(selectedImage);
    console.log(pickedLocation);
  }

  return (
    <ScrollView className="flex-1 p-6">
      <View>
        <Text className="mb-1 font-bold text-primary500">Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          className="px-1 py-2 mt-2 text-xl border-b-2 border-b-primary700 bg-primary100"
        ></TextInput>
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}
