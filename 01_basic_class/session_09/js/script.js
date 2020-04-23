function addList() {
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var para = document.createElement("div");
    para.classList.add("alert");
    para.classList.add("alert-secondary");
    para.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("idAnswer").appendChild(para);
    }
    document.getElementById('myInput').value = "";
}
