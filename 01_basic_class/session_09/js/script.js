function addList() {
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var para = document.createElement("div");
    para.classList.add("alert");
    para.classList.add("alert-secondary");
    para.appendChild(t);

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
    }
    document.getElementById('myInput').value = "";
}
