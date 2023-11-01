const sql = require("msnodesqlv8");

const connectionString = "Server=tcp:music-lib-server5.database.windows.net,1433;Initial Catalog=Music_Lib_DB;Persist Security Info=False;User ID=MusicAdmin;Password=CoogMusic1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

// Create a connection object
const connection = new sql.Connection(connectionString, (err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
    }
});

// Listen for the 'error' event
connection.on("error", (err) => {
    console.error("Database connection error:", err);
});

// Listen for the 'connect' event
connection.on("connect", () => {
    console.log("Database connection established");
});

// Open the database connection
connection.connect();

/*
sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});
// Simulated data (replace with real data from your database)
const songData = {
    song: "apple song", genre: "Rap", rating: "0.0", views: "0"
};

// Sort it out by vies highest to lowest
songData.sort((a,b) => b.views - a.views);

const topTenSongs = songData.slice(0,10);

topTenSongs.forEach((song,index) => {
  //creates html for each song and fills in the data.
  const songElement = document.createElement("div");
  songElement.innerHTML = `
      <h2>${song.song}</h2>
      <p>Genre: ${song.genre}</p>
      <p>Rating: ${song.rating}</p>
      <p>Views: ${song.views}</p>
  `;
  // appends each of the song within the div element
  document.getElementbyID("song-list").appendChild(songElement);
    
});
*/