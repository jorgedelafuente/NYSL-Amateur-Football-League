/* eslint-env browser */
/* eslint "no-console": "off" */
/* global$ */

//FORM LOGIC

//document.form.onsubmit = function(event) {return false;}

document.form.onsubmit = function (event) {
    return (event.target.firstname.value !== "") && (event.target.lastname.value !== "");
};

//document.form.onsubmit = function(event) {
//    return (event.target.firstname.value !== "") && (event.target.lastname.value !== "") && (event.target.birthdate.value !== "") && (event.target.signdate.value !== "") && (event.target.tel.value !== "");
//  };

// NAV
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// FORM LETTERS ONLY REGEX

function lettersOnly(input) {
    //var regex = /[^a-z]/gi //
    var regex = /[^a-z\s]/gi
    //  var regex = /^[a-z ,.'-]+$/i //
    input.value = input.value.replace(regex, "");
}

// FORM NUMBERS ONLY REGEX

function numbersOnly(input) {
    var regex = /[^0-9]/g
    input.value = input.value.replace(regex, "");
}

// FORM PHONE NUMBER VALIDATOR

function phonenumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
        return true;
    } else {
        console.log("Not a valid Phone Number");
        return false;
    }
}

// FORM DATE VALIDATOR

function validatedate(inputText) {
    var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if (inputText.value.match(dateformat)) {
        document.form1.text1.focus();
        //Test which seperator is used '/' or '-'
        var opera1 = inputText.value.split('/');
        var opera2 = inputText.value.split('-');
        lopera1 = opera1.length;
        lopera2 = opera2.length;
        // Extract the string into month, date and year
        if (lopera1 > 1) {
            var pdate = inputText.value.split('/');
        } else if (lopera2 > 1) {
            var pdate = inputText.value.split('-');
        }
        var mm = parseInt(pdate[0]);
        var dd = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
                alert('Invalid date format!');
                return false;
            }
        }
        if (mm == 2) {
            var lyear = false;
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear == false) && (dd >= 29)) {
                alert('Invalid date format!');
                return false;
            }
            if ((lyear == true) && (dd > 29)) {
                alert('Invalid date format!');
                return false;
            }
        }
    } else {
        console.log("Invalid date format!");
        document.form1.text1.focus();
        return false;
    }
}

// GET DATE

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
// today = mm + '/' + dd + '/' + yyyy;


// BIRTH DATE

document.getElementById("birthdate").addEventListener("change", function () {
    var input = this.value;
    var dateEntered = new Date(input);
    var bday = document.forms.form[11].value;
    var bdayyear = bday.substring(0, 4);
    var age = ((yyyy - bdayyear) +1);
    var agegroup = ("Age Group: Under" + age);

    if ((yyyy - bdayyear) <= 3) {
        console.log("You are too young to play in the league!");
    } else if ((yyyy - bdayyear) >= 13) {
        console.log("You are too old to play in the league!");
        } else {
            console.log(agegroup);
        }
    
});

// SIGN DATE

document.getElementById("signdate").addEventListener("change", function () {
    var input = this.value;
    var dateEntered = new Date(input);
    if (document.forms.form[43].value !== today) {
        console.log("Signed Date needs to be current date!");
    }
});

// PUSH DATE

(function pushDate() {
    var node = document.createElement("span");
    var textnode = document.createTextNode(yyyy);
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

// CHATBOX OPEN CLOSE

function openForm() {
    document.getElementById("myChatBox").style.display = "block";
}

function closeForm() {
    document.getElementById("myChatBox").style.display = "none";
}



//
//document.forms[0].help_text.addEventListener("click", EnableDisableToolTip);
//
//function EnableDisableToolTip() {
//    if (document.forms[0].help_text.checked) {
//        alert("Checked");
//    }
//    else if (!document.forms[0].help_text.checked) {
//    alert("Unchecked");
//    }        
//}
//
//


//// LOGIC FOR FORM DATA

//var showData = window.location.href.includes("show_data");
//var tbody = document.getElementById(formResults);
//
//if (showData == true) {
//    printForm();
//    console.log(showData);
//}

//function printForm() {
//    var args = location.search.substr(1).split('&');
//    for (var i = 0; i < args.length; ++i) {
//        var parts = args[i].split('=');
//        if (parts != null) {
//            var field = parts[0];
//            var value = parts[1];
//            if (value == null) {
//                value = "null"
//            } else {
//                value = '"' + unescape(value.replace(/\+/g, ' ')) + '"';
//            }
//
//            //      document.writeln('<tr><td align="center">' + field + '</td>');
//            //      document.writeln('<td align="center">' + value + '</td></tr>');
//            document.getElementById("formResults").textContent('<tr><td align="center">' + field + '</td>');
//            document.getElementById("formResults").textContent('<td align="center">' + value + '</td></tr>');
//        }
//    }
//}
//
//// document.writeln(intNum1 + intNum2)
//// document.getElementById("formResults").innerHTML = answer!
