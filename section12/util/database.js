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
