const listPage = document.getElementById('song-choice-section');
const lyricsPage = document.getElementById('song-lyrics-section');

//Event Listeners
document.getElementById('songs-list').addEventListener('click', getSongLyrics);
document.querySelector('.change-view-btn').addEventListener('click', changeView);



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


//Wyświetlenie napisów po kliknięciu na liście
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

function changeView(e) {
  if (e.target.id === 'to-list') {
    console.log(listPage);
    lyricsPage.style.display = 'none';
    listPage.style.display = 'flex';
  }
}