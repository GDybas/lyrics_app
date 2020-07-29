const listPage = document.getElementById('song-choice-section');
const lyricsPage = document.getElementById('song-lyrics-section');
const startPage = document.getElementById('start-page-mobile');
const songsList = document.getElementById('songs-list');


//Event Listeners
//Wyświetlanie listy
document.getElementById('songs-list').addEventListener('click', getSongLyrics);
// Zmiana widoku po kliknieciu przycisków
document.getElementById('start-to-list').addEventListener('click', (e) => {
  startPage.style.display = 'none';
  listPage.style.display = 'flex';
});
document.getElementById('to-list').addEventListener('click', (e) => {
  lyricsPage.style.display = 'none';
  listPage.style.display = 'flex';
});

//wyszukiwanie na liście
// document.querySelector('form #search').addEventListener('keyup', searchLyrics);




//Displaying songs list
function getSongList() {
  fetch("./lyrics.json")
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      let output = "";
      data.forEach(song => {
        output += `<li class="song-btn" id="${song.id}">${song.title}</li>`;
      });
      document.querySelector("#songs-list").innerHTML = output;
    })
    .catch(err => console.log(err));
}
getSongList();


//Wyświetlenie napisów po kliknięciu na liście i zmiana widoku
function getSongLyrics(e) {

  if (e.target && e.target.matches("li.song-btn")) {
    fetch("./lyrics.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        //console.log(data);
        let title = '';
        let author = '';
        let lyrics = '';
        data.forEach(function (song) {
          if (song.id === e.target.id) {
            title = song.title;
            author = song.author;
            lyrics = song.lyrics;
          }

        });
        document.getElementById('title').innerHTML = title;
        document.getElementById('author').innerHTML = author;
        document.getElementById('lyrics').innerHTML = lyrics;
        lyricsPage.style.display = 'flex';
        listPage.style.display = 'none';
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}




//Wyszukiwanie piosenek na liście
/*function searchLyrics(e) {
  const typed = e.target.value.toLowerCase();

  // const songs = songsList.querySelector('li.matches("li.song-btn")');
  Array.from(songs).forEach((song) => {
    const title = song.innerText;
    if (title.toLowerCase().indexOf(typed) != -1) {
      song.style.display = 'block';
    } else {
      song.style.display = 'none';
    }
  });
}*/