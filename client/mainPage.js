const mssql = require("msssql");

const db = mssql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});

db.connect(err => {
    if (err) { throw err; }
    console.log("DB connection OK");
});

db.query("select * FROM 'users'", (err, results) => {
    if (err) {throw err; }
    console.log(results)
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
