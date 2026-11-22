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
