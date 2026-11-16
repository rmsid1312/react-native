import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, Text, View } from "react-native";

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
    if (image.canceled) {
      return;
    }
    setPickedImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet</Text>;
  if (pickedImage) {
    imagePreview = (
      <Image source={{ uri: pickedImage }} className="w-full h-full" />
    );
  }
  return (
    <View>
      <View className="w-full h-[200px] my-2 justify-center items-center bg-primary100 rounded-xl">
        {imagePreview}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}
