const sql = require("msnodesqlv8");

const connectionString = "DSN=NaimMusic";

// Create a connection to the database using a DSN
sql.open(connectionString, (err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
        // You can now use the 'connection' object to execute queries
    }
});

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