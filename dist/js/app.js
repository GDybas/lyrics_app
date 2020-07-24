//Displaying songs list
function getSongList() {
  fetch("./lyrics.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(song => {
        output += `<li class="song-btn" id="${song.id}">${song.title}</li>`;
      });
      document.querySelector("#songs-list").innerHTML = output;
    })
    .catch(err => console.log(err));
}
getSongList();


document.getElementById('songs-list').addEventListener('click', getSongLyrics);

//Wyświetlenie napisów po kliknięciu na liście
function getSongLyrics(e) {

  if (e.target && e.target.matches("li.song-btn")) {
    fetch("./lyrics.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
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
      })
      .catch(function (err) {
        console.log(err);
      });
  }



}