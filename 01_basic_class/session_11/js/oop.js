function fetchJobs(artist, title) {
    const Http = new XMLHttpRequest({mozSystem: true});
    var url = 'https://api.lyrics.ovh/v1/'+artist+'/'+title;
    console.log(url);
    Http.open("GET", url);
    // Http.setRequestHeader("Content-Type", "application/json");
    Http.send();

    Http.onreadystatechange = function() {
    if(this.readyState==4) {
        console.log('Good');
        console.log(Http.response);
    }
    }
}
var name, number, realTimeAmount;
// definisi class e-money

class eMoney {
  //constructor
  //constructor adalah metode instansiasi class eMoney
  //constructor mengandung atribut name, phone, dan amount 
  constructor(nameInit, phoneInit, amountInit) {
    this.name = nameInit;
    this.number = phoneInit;
    this.amount = amountInit;
  }
  
  //contoh, ketika daftar dengan nama Yogi dan no hp 088888
  //objek yang terbentuk diawali constuctor ("Yogi", "088888")

  //method
  //requirement: bisa top-up, belanja, transfer
  topupFunction(value) {
    // Number(this.amount);
    // Number(value);
    // console.log(typeof(this.amount));
    // console.log(typeof(value));
    this.amount = Number(this.amount) + Number(value);
    realTimeAmount = Number(realTimeAmount) + Number(this.amount);
    console.log("AMOUNT:" + realTimeAmount);
  }

  transferFunction(value) {
    this.amount = Number(this.amount) - Number(value);
    realTimeAmount = Number(realTimeAmount) - Number(this.amount);
    console.log("AMOUNT:" + realTimeAmount);
  }

//   transfer(recipientPhone, value) {
//     //urusan recipient diabaikan dulu
//     this.amount -= value;
//   }

  //requirement ganti nama dan no hp
  //menggunakan metode getter & setter
  getName() {
    return this.name;
  }

  setname(newName) {
    this.name = newName;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(newPhone) {
    this.phone = newPhone;
  }

}

function transferAmount() {
    var inputTransfer = document.getElementById("transfer").value;
    var inName = document.getElementById("inputName").value;
    var inNumber = document.getElementById("inputNumber").value;
    var inAmount = document.getElementById("inputAmount").value;
    console.log(inputTransfer);
    console.log(inName);
    console.log(inNumber);
    console.log(inAmount);
    var newUser = new eMoney(inName,inNumber,inAmount);

    newUser.transferFunction(inputTransfer);

    document.getElementById("idNameTransfer").innerHTML = "Name : " + newUser.name;
    document.getElementById("idNumberTransfer").innerHTML = "Number : " + newUser.number;
    document.getElementById("idAmountTransfer").innerHTML = "Amount : " + newUser.amount;
}

function topupAmount() {
    console.log("topup-run");
    var inputTopup = document.getElementById("topup").value;
    console.log(inputTopup);
    var inName = document.getElementById("inputName").value;
    var inNumber = document.getElementById("inputNumber").value;
    var inAmount = document.getElementById("inputAmount").value;
    // Number(inputTopup);
    // Number(inAmount);
    // console.log(typeof(inputTopup));
    // console.log(typeof(inAmount));
    var newUser = new eMoney(inName,inNumber,inAmount);

    // document.getElementById("idName").innerHTML = "Name : " + newUser.name;
    // document.getElementById("idNumber").innerHTML = "Number : " + newUser.number;
    // document.getElementById("idAmount").innerHTML = "Amount : " + newUser.amount;

    newUser.topupFunction(inputTopup);

    // document.getElementById().innerHTML = 
    document.getElementById("idNameTopup").innerHTML = "Name : " + newUser.name;
    document.getElementById("idNumberTopup").innerHTML = "Number : " + newUser.number;
    document.getElementById("idAmountTopup").innerHTML = "Amount : " + newUser.amount;
    // realTimeAmount = Number(realTimeAmount) + Number(inAmount);
}

function newAccount() {
    console.log("run");
    //instansiasi e-money Yogi
    // var Yogi = new eMoney("Yogi","0888");
    //set output
    var inName = document.getElementById("inputName").value;
    var inNumber = document.getElementById("inputNumber").value;
    var inAmount = document.getElementById("inputAmount").value;
    // String(inNumber);
    console.log(inName);
    console.log(inNumber);
    console.log(inAmount);
    
    var newUser = new eMoney(inName,inNumber,inAmount);

    document.getElementById("idName").innerHTML = "Name : " + newUser.name;
    document.getElementById("idNumber").innerHTML = "Number : " + newUser.number;
    document.getElementById("idAmount").innerHTML = "Amount : " + newUser.amount;
    // realTimeAmount = Number(realTimeAmount) + Number(inAmount);
}
