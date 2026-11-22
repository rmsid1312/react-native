import * as SQLite from "expo-sqlite";

const databasePromise = SQLite.openDatabaseAsync("places.db");

export async function init() {
  const database = await databasePromise;
  await database.execAsync(
    `CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    )`,
  );
}
export async function insertPlace(place) {
  const database = await databasePromise;
  await database.runAsync(
    "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)",
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ],
  );
}

export async function fetchPlaces() {
  const database = await databasePromise;
  return await database.getAllAsync("SELECT * FROM places");
}
export async function fetchPlaceDetails(id) {
  const database = await databasePromise;
  const row = await database.getFirstAsync(
    "SELECT * FROM places WHERE id = ?",
    [id],
  );
  if (!row) {
    return null;
  }
  return {
    id: row.id,
    title: row.title,
    imageUri: row.imageUri,
    address: row.address,
    location: { lat: row.lat, lng: row.lng },
  };
}
