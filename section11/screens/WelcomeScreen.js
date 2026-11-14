import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { fetchList } from "../components/util/auth";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [list, setList] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    async function loadList() {
      try {
        const data = await fetchList(token);
        setList(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadList();
  }, [token]);

  return (
    <View className="items-center justify-center flex-1 p-8">
      <Text className="mb-2 text-xl font-bold">Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{JSON.stringify(list)}</Text>
    </View>
  );
}

export default WelcomeScreen;
