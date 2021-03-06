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