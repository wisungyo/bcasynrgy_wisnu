var x=0, current=null, counter=0, idCounter=0;
var score = [50,90,70,10,88,77,68,84]; // array[0,1,2,3,...]
document.getElementById('nilaiAwal').innerHTML = "[ " + score + " ]";

function batchGrader() {
    // document.getElementById('buttonId').style.visibility = hidden;
    // console.log(score);
    // console.log('func called');
    // console.log(score.length);
    for (x=0; x<score.length; x++) {
        // console.log(score[x]);
        if (score[x] >= 80) {
            score[x] = "A";
            // console.log('ganti A');
        }
        else if (score[x] >= 70 && score[x] < 80 ) {
            score[x] = "B";
            // console.log('ganti B');
        }
        else if (score[x] >= 60 && score[x] < 70 ) {
            score[x] = "C";
            // console.log('ganti C');
        }
        else {
            score[x] = "D";
            // console.log('ganti D');
        }
        // console.log(score[x]);
    }
    // console.log(score);
    // alert(score);
    document.getElementById('nilai').innerHTML = "[ " + score + " ]";
}

function recapGrader() {
    score.sort();
    // console.log(score);
    // console.log(score.length);
    // A, A, A, B, B, C, D, D 
    for (x=0; x<score.length; x++) { // 8 < 8
        if (score[x] != current) {
            if (counter > 0) {
                // document.getElementById('nilaiSama').innerHTML = counter + " siswa sama bernilai " + score[x];
                // console.log(counter + " siswa sama bernilai " + current);
                idCounter++;
                console.log('idCounter:' + idCounter);
                document.getElementById('nilaiSama' + idCounter).innerHTML = counter + " siswa sama bernilai " + current;
                // document.write(counter + " siswa sama bernilai " + current);
                // alert(counter + " siswa sama bernilai " + current);
                // 'nilaiSama1'
            }
            current = score[x];
            counter = 1;
        }
        else {
            counter++;
        }
    }
    if (counter > 0) {
        // console.log(counter + " siswa sama bernilai " + current);
        idCounter++;
        console.log('idCounter:' + idCounter);
        document.getElementById('nilaiSama' + idCounter).innerHTML = counter + " siswa sama bernilai " + current;
        // document.write(counter + " siswa sama bernilai " + current);
        // alert(counter + " siswa sama bernilai " + current);
    }
}

// batchGrader([80,90,70,50])
// ambil indeks ke 0
// tak bandingkan apakah lebih dari 80
//     jika iya    = ganti nilai dari indeks 0 menjadi A 
//     jika tidak  = lakukan pengkondisian berikutnya 
// tak bandingankan apakah lebih lebih dari 70 dan kurang dari 80
//     jika iya    = ganti nilai dari indeks 0 menjadi B 
//     jika tidak  = lakukan pengkondisian barikutnya 
// ....





