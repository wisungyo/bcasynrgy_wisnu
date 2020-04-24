function fetchLyrics(/*artist, title*/) {
    var artist = document.getElementById("idArtist").value;
    var title = document.getElementById("idTitle").value;

    const Http = new XMLHttpRequest();
    var url = 'https://api.lyrics.ovh/v1/'+artist+'/'+title;
    var output = document.getElementById("idLyricOutput");
    Http.open("GET", url); //kirim HTTP request dengan metode GET
    Http.send();

    //ketika balasan dari server sudah ada
    Http.onreadystatechange = function() {
    if(this.readyState==4) {
      var result = JSON.parse(Http.responseText);
      output.innerHTML = result.lyrics;
    }
    }
}

// function fetchLyricsMusicmatch(/*artist, title*/) {
//     var artist = document.getElementById("idArtist").value;
//     var title = document.getElementById("idTitle").value;

//     const Http = new XMLHttpRequest();
//     var url = 'http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc';
//     var output = document.getElementById("idLyricOutput");
//     Http.open("GET", url); //kirim HTTP request dengan metode GET
//     Http.send();

//     //ketika balasan dari server sudah ada
//     Http.onreadystatechange = function() {
//     if(this.readyState==4) {
//       var result = JSON.parse(Http.responseText);
//       output.innerHTML = result.lyrics;
//     }
//     }
// }

// fetchLyrics('Muse','Hysteria');