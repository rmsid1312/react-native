import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlaceList from "../components/Places/PlaceList";
import { fetchPlaces } from "../util/database";

export default function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      console.log(places);
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlaceList places={loadedPlaces} />;
}
