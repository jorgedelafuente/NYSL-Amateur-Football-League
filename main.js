/* eslint-env browser */
/* eslint "no-console": "off" */
/* global$ */

// NAV
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function lettersOnly(input) {
    //var regex = /[^a-z]/gi //
    var regex = /[^a-z\s]/gi
    //  var regex = /^[a-z ,.'-]+$/i //
    input.value = input.value.replace(regex, "");
}

function numbersOnly(input) {
    var regex = /[^0-9]/g
    input.value = input.value.replace(regex, "");
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//// LOGIC FOR FORM DATA
//
//var args = location.search.substr(1).split('&');
//for (var i = 0; i < args.length; ++i) {
//    var parts = args[i].split('=');
//    if (parts != null) {
//        var field = parts[0];
//        var value = parts[1];
//        if (value == null) {
//            value = "null"
//        } else {
//            value = '"' + unescape(value.replace(/\+/g, ' ')) + '"';
//        }
//
//        document.writeln('<tr><td align="center">' + field + '</td>');
//        document.writeln('<td align="center">' + value + '</td></tr>');
//    }
//}
//
//



//function validate(form_id, email)
//
//var reg = /^   $/;
//var address = document.forms[form_id].elements[email].value;
//
///* var address = document.email_form.email.value */
//
//if (reg.test(address) == false) {
//    alert('Invalid Email Address. Please enter a valid one.');
//    document.forms[form_id].elements[email].value.focus();
//
//    return false;
//}
