/* eslint-env browser */
/* eslint "no-console": "off" */
/* global$ */

//FORM LOGIC

//document.form.onsubmit = function(event) {return false;}

if (window.document.location.href.includes("form") == true) {
    document.form.onsubmit = function (event) {
        return (event.target.firstname.value !== "") &&
            (event.target.lastname.value !== "") &&
            (ageChecker == true) &&
            (phonenumber(document.form.tel) == true) &&
            (event.target.email.value !== "") &&
            (event.target.signature.value !== "") &&
            (signedDateChecker == true);
    };
}
//document.form.onsubmit = function(event) {
//    return (event.target.firstname.value !== "");};

// NAV
function navFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// FORM LETTERS ONLY REGEX

function lettersOnly(input) {
    //let regex = /[^a-z]/gi //
    let regex = /[^a-z\s]/gi
    //  let regex = /^[a-z ,.'-]+$/i //
    input.value = input.value.replace(regex, "");
}

// FORM NUMBERS ONLY REGEX
function numbersOnly(input) {
    let regex = /[^0-9]/g
    input.value = input.value.replace(regex, "");
}

// FORM PHONE NUMBER VALIDATOR

function phonenumber(inputtxt) {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
        console.log("Phone number is valid.");
        return true;
    } else {
        alert("Phone number is not valid. It needs to be 10 digits.");
        return false;
    }
}

// GET DATE

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
// today = mm + '/' + dd + '/' + yyyy;

// BIRTH DATE


let ageChecker = document.getElementById("birthdate").addEventListener("change", function () {
    let input = this.value;
    let dateEntered = new Date(input);
    let bday = document.forms.form[11].value;
    let bdayyear = bday.substring(0, 4);
    let age = ((yyyy - bdayyear) + 1);
    let agegroup = ("Age Group: Under" + age);

    if ((yyyy - bdayyear) <= 3) {
        //alert("You are too young to play in the league!");
        console.log("You are too young to play in the league!");
        return ageChecker = false;
    } else if ((yyyy - bdayyear) >= 13) {
        //alert("You are too old to play in the league!");
        console.log("You are too old to play in the league!");
        return ageChecker = false;
    } else {
        alert(agegroup);
        return ageChecker = true;
    }
});


// SIGN DATE

let signedDateChecker = document.getElementById("signdate").addEventListener("change", function () {
    let input = this.value;
    let dateEntered = new Date(input);
    if (document.forms.form[43].value !== today) {
        //alert("Signed Date needs to be current date!");
        alert("Signed Date needs to be current date!");
        return signedDateChecker = false;
    } else {
        console.log("Signed Date is valid.");
        return signedDateChecker = true;
    }
});

// PUSH DATE

(function pushDate() {
    const node = document.createElement("span");
    const textnode = document.createTextNode(yyyy);
    node.appendChild(textnode);
    document.getElementById("getYear").appendChild(node);

    if ((mm >= 9) || (mm <= 2)) {
        document.getElementById("getSpring").disabled = true;
        document.getElementById("getFall").disabled = true;
        document.getElementById("getFall").setAttribute("checked", "");
    } else if ((mm >= 3) || (mm <= 8)) {
        document.getElementById("getFall").disabled = true;
        document.getElementById("getSpring").disabled = true;
        document.getElementById("getSpring").setAttribute("checked", "");
    }
})();

// UNIFORM CHECKER

function uniformFunction() {

    if (document.forms.form[39].checked == true) {
        document.getElementById("shortsize").setAttribute("disabled", "hidden");
        document.getElementById("jerseysize").setAttribute("disabled", "hidden");
    } else if (document.forms.form[39].checked == false) {
        console.log(document.forms.form[39].checked);
        document.getElementById("shortsize").removeAttribute("disabled");
        document.getElementById("jerseysize").removeAttribute("disabled");
    }

};

