import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "./global.css";
import RecentScreen from "./screens/RecentScreen";
import ExpenseScreen from "./screens/ExpenseScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#211875",
            },
            sceneStyle: { backgroundColor: "#280463" },
            headerTintColor: "white",
            headerRight: ({ tintColor }) => (
              <Pressable onPress={() => {}} className="mr-4 active:opacity-50">
                <Ionicons name="add" size={24} color={tintColor} />
              </Pressable>
            ),
          }}
        >
          <Tab.Screen
            name="Recent Expense"
            component={RecentScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="hourglass" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="All Expenses"
            component={ExpenseScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
