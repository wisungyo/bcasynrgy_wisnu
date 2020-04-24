function addList() {
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var para = document.createElement("div");
    para.classList.add("alert");
    para.classList.add("alert-secondary");
    para.appendChild(t);

    var para2 = document.createElement("button");
    var t2 = document.createTextNode("x");
    para2.classList.add("btn");
    para2.classList.add("btn-danger");
    para2.classList.add("btn-block");
    para2.appendChild(t2);

    // var buttons = '<div class="btn-group" role="group" aria-label="Basic example">' + 
    //               '<button type="button" class="btn btn-info">v</button>' +
    //               '<button type="button" class="btn btn-secondary">x</button>' +
    //               'button type="button" class="btn btn-dark">x</button>' +
    //               '</div>';
    // addElement('idButton',);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("idAnswer").appendChild(para);
        document.getElementById("idButton").appendChild(para2);
    }
    document.getElementById('myInput').value = "";
}

/* 
    FUNCTION OF ARITHMETIC IS HERE ... */

var firstVar = null, secondVar = null, result = null;

function addFunc() {
    firstVar = document.getElementById("theFirst").value;
    secondVar = document.getElementById("theSecond").value;
    result = Number(firstVar) + Number(secondVar);
    console.log(typeof(result));
    console.log(result);
    numberToEnglish(result);
    testFunc(result);
}

function reduceFunc() {
    firstVar = document.getElementById("theFirst").value;
    secondVar = document.getElementById("theSecond").value;
    result = Number(firstVar) - Number(secondVar);
    console.log(typeof(result));
    console.log(result);
    numberToEnglish(result);
    testFunc(result);
}

function divideFunc() {
    firstVar = document.getElementById("theFirst").value;
    secondVar = document.getElementById("theSecond").value;
    result = Number(firstVar) / Number(secondVar);
    console.log(typeof(result));
    console.log(result);
    numberToEnglish(result);
    testFunc(result);
}

function multiFunc() {
    firstVar = document.getElementById("theFirst").value;
    secondVar = document.getElementById("theSecond").value;
    result = Number(firstVar) * Number(secondVar);
    console.log(typeof(result));
    console.log(result);
    numberToEnglish(result);
    testFunc(result);
}

function testFunc() {
    if (firstVar === '' || secondVar === '') {
        alert("You must enter the numbers");
        return;
    }
    else if (result == 0) {
        document.getElementById("changeThis").className = "alert alert-primary form-control";
        document.getElementById("theFirst").value = null;
        document.getElementById("theSecond").value = null;
        return;
    }
    else if (result%2 === 1) {
        document.getElementById("changeThis").className = "alert alert-warning form-control";
        document.getElementById("theFirst").value = null;
        document.getElementById("theSecond").value = null;
        return;
    }
    else if (result%2 === 0) {
        document.getElementById("changeThis").className = "alert alert-success form-control";
        document.getElementById("theFirst").value = null;
        document.getElementById("theSecond").value = null;
        return;
    }
}

function numberToEnglish(n, custom_join_character) {

    var string = n.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    var and = custom_join_character || 'and';

    /* Is number zero? */
    if (parseInt(string) === 0) {
        document.getElementById("parsing").innerHTML = "zero";
        return 'zero';
    }

    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                words.push(word);
            }

            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            /* Add 'and' string after units or tens integer if: */
            if (ints[0] || ints[1]) {

                /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                if (ints[2] || !i && chunksLen) {
                    words.push(and);
                }

            }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }

        }

    }

    document.getElementById("parsing").innerHTML = words.reverse().join(' ');
    return words.reverse().join(' ');
}