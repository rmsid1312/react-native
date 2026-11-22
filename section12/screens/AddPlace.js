import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

export default function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.popTo("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
