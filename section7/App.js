import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./global.css";
import RecentScreen from "./screens/RecentScreen";
import ExpenseScreen from "./screens/ExpenseScreen";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { store } from "./store/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#211875",
        },
        sceneStyle: { backgroundColor: "#280463" },
        headerTintColor: "white",
        headerRight: ({ tintColor }) => (
          <Pressable
            onPress={() => navigation.navigate("ManageExpense")}
            className="mr-4 active:opacity-50"
          >
            <Ionicons name="add" size={24} color={tintColor} />
          </Pressable>
        ),
      })}
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
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreen}
              options={{
                presentation: "modal",
                animation: "slide_from_bottom",
                title: "Add Expense",
                headerStyle: { backgroundColor: "#211875" },
                headerTintColor: "white",
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
