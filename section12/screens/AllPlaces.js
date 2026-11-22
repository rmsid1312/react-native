import { useEffect, useState } from "react";
import PlaceList from "../components/Places/PlaceList";

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const place = route.params?.place;
  useEffect(() => {
    if (place) {
      setLoadedPlaces((curPlaces) => [...curPlaces, place]);
    }
  }, [place]);
  return <PlaceList places={loadedPlaces} />;
}
