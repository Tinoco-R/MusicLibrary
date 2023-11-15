document.addEventListener('DOMContentLoaded', async () => {
    fetch("http://localhost:8080/data1").then(x => x.json()).then( x => {
        const userList = document.getElementById('Recommended');
        
    // Loop through the array and create list items for each username
    x.data1.forEach(user => {
        // Create a new LI element
        const listItem = document.createElement('li');
        listItem.classList.add("song-item");
    
        // Create a new LI element
        const artistBox = document.createElement('div');
        artistBox.classList.add("Rec-box");
    
        // Create a new div for the artist info
        const artistInfo = document.createElement('div');
        artistInfo.classList.add("song-info");

        // Create an H2 element for the artist name
        const artistName = document.createElement('h2');
        artistName.textContent = user["Username"];

        // Append the artist box, info, and name to the LI element
        artistInfo.appendChild(artistName);
        listItem.appendChild(artistBox);
        listItem.appendChild(artistInfo);

        // Append the LI element to the UL
        userList.appendChild(listItem);

        });
    });
    fetch("http://localhost:8080/data3").then(y => y.json()).then( y => {
        const userlist = document.getElementById('new-releases');
        
    // Loop through the array and create list items for each username
    y.data2.forEach(peeps => {
        // Create a new LI element
        const listitem = document.createElement('li');
        listitem.classList.add("song-item");
    
        // Create a new LI element
        const artistbox = document.createElement('div');
        artistbox.classList.add("NR-box");
    
        // Create a new div for the artist info
        const artistinfo = document.createElement('div');
        artistinfo.classList.add("song-info");

        // Create an H2 element for the artist name
        const artistname = document.createElement('h2');
        artistname.textContent = peeps["Username"];

        // Append the artist box, info, and name to the LI element
        artistinfo.appendChild(artistname);
        listitem.appendChild(artistbox);
        listitem.appendChild(artistinfo);

        // Append the LI element to the UL
        userlist.appendChild(listitem);

        });
    });
});

// async function fetchDataAndRender(url, listId, boxClass) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log(data);

//         const userList = document.getElementById(listId);

//         // Clear existing content in the list
//         userList.innerHTML = '';

//         // Loop through the array and create list items for each username
//         data.data.forEach(user => {
//             // Create a new LI element
//             const listItem = document.createElement('li');
//             listItem.classList.add("song-item");

//             // Create a new LI element
//             const artistBox = document.createElement('div');
//             artistBox.classList.add(boxClass);

//             // Create a new div for the artist info
//             const artistInfo = document.createElement('div');
//             artistInfo.classList.add("song-info");

//             // Create an H2 element for the artist name
//             const artistName = document.createElement('h2');
//             artistName.textContent = user["Username"];

//             // Append the artist box, info, and name to the LI element
//             artistInfo.appendChild(artistName);
//             listItem.appendChild(artistBox);
//             listItem.appendChild(artistInfo);

//             // Append the LI element to the UL
//             userList.appendChild(listItem);
//         });

//     } catch (error) {
//         console.error('Error fetching and rendering data:', error);
//     }
// }



// document.addEventListener('DOMContentLoaded', async () => {
//     // Fetch usernames from the database
//     let data = [];

//     fetch("http://localhost:8080/data1").then(x => x.json()).then( x => {
//         const userList = document.getElementById('Recommended');
        
//     // Loop through the array and create list items for each username
//     x.data.forEach(user => {
//         // Create a new LI element
//         const listItem = document.createElement('li');
//         listItem.classList.add("song-item");
    
//         // Create a new LI element
//         const artistBox = document.createElement('div');
//         artistBox.classList.add("Rec-box");
    
//         // Create a new div for the artist info
//         const artistInfo = document.createElement('div');
//         artistInfo.classList.add("song-info");

//         // Create an H2 element for the artist name
//         const artistName = document.createElement('h2');
//         artistName.textContent = user["Username"];

//         // Append the artist box, info, and name to the LI element
//         artistInfo.appendChild(artistName);
//         listItem.appendChild(artistBox);
//         listItem.appendChild(artistInfo);

//         // Append the LI element to the UL
//         userList.appendChild(listItem);

//         });
//     })

// });

// document.addEventListener('DOMContentLoaded', async () => {
//     // Fetch usernames from the database
//     let data = [];

//     fetch("http://localhost:8080/data2").then(y => y.json()).then( y => {
//         const userlist = document.getElementById('Recommended');
        
//     // Loop through the array and create list items for each username
//     y.data.forEach(peeps => {
//         // Create a new LI element
//         const listitem = document.createElement('li');
//         listitem.classList.add("song-item");
    
//         // Create a new LI element
//         const artistbox = document.createElement('div');
//         artistbox.classList.add("NR-box");
    
//         // Create a new div for the artist info
//         const artistinfo = document.createElement('div');
//         artistinfo.classList.add("song-info");

//         // Create an H2 element for the artist name
//         const artistname = document.createElement('h2');
//         artistname.textContent = peeps["Username"];

//         // Append the artist box, info, and name to the LI element
//         artistinfo.appendChild(artistname);
//         listitem.appendChild(artistbox);
//         listitem.appendChild(artistinfo);

//         // Append the LI element to the UL
//         userlist.appendChild(listitem);

//         });
//     })

    // });


