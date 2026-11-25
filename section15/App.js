import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, Platform, Text, View } from "react-native";
import "./global.css";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log("userName : ", userName);
      },
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RESPONSE RECEIVED");
        console.log(response);
      },
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  useEffect(() => {
    async function requestPermission() {
      if (Platform.OS === "android") {
        try {
          await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
          });
        } catch (e) {
          console.warn("channel 생성 실패:", e.message);
        }
      }
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        await Notifications.requestPermissionsAsync();
      }
    }
    requestPermission();
  }, []);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Max" },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 5,
      },
    });
  }

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-xl font-bold text-blue-500">
        <Button
          title="Schedule Notification"
          onPress={scheduleNotificationHandler}
        />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
