function validationform() {
    var first = document.forms["registerform"]["first name"].value;
    var last = document.forms["registerform"]["last name"].value;
    var father = document.forms["registerform"]["father name"].value;
    var email = document.forms["registerform"]["email id"].value;
    var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mobileno = document.forms["registerform"]["mobilenumber"].value;
    var passwd = document.forms["registerform"]["password"].value;
    var conformpasswd = document.forms["registerform"]["correctpassword"].value;
    var city = document.forms["registerform"]["city"].value;
    var dob = document.forms["registerform"]["dateofbirth"].value;
    var male = document.forms["registerform"]["gender"][0].checked;
    var female = document.forms["registerform"]["gender"][1].checked;
    var others = document.forms["registerform"]["gender"][2].checked;
    var agree = document.forms["registerform"]["Agree"].checked;

    /* firstname condition */
    if (first != " " && parsInt(first.length) <= 10) {
        document.getElementById("fnameerror").style.display = "none";
    } else {
        document.getElementById("fnameerror").style.display = "block";
    }
    /* lastname condition */
    if (parsInt(last.length) > 4 && parsInt(last.length) < 12) {
        document.getElementById("lnameerror").style.display = "none";
    } else {
        document.getElementById("lnameerror").style.display = "block";
    }
     /* father name condition */
    if (father != " " && parsInt(father.length) <= 12) {
        document.getElementById("fanameerror").style.display = "none";
    } else {
        document.getElementById("fanameerror").style.display = "block";
    }
    /* email id condition */
    if (email == "" && (!emailfilter.test(email))) {
        document.getElementById("emailerror").style.display = "block";
    } else {
        document.getElementById("emailerror").style.display = "none";
    }
    /* mobile number condition */
    if (/^\d{10}$/.test(mobileno)) {
        document.getElementById("mobileerror").style.display = "none";
    } else {
        document.getElementById("mobileerror").style.display = "block";
    }
    /* password condition */
    if (passwd != "" && parsInt(passwd.length) <= 8) {
        document.getElementById("passerror").style.display = "none";
    } else {
        document.getElementById("passerror").style.display = "block";
    }
    /* correct password condition */
    if (conformpasswd == passwd) {
        document.getElementById("conformpasserror").style.display = "none";
    } else {
        document.getElementById("conformpasserror").style.display = "block";
    }
    /* city condition */
    if (city != "") {
        document.getElementById("cityerror").style.display = "none";
    } else {
        document.getElementById("cityerror").style.display = "block";
    }
    /* dateof birth condition */
    if (dob != "") {
        document.getElementById("dateerror").style.display = "none";
    } else {
        document.getElementById("dateerror").style.display = "block";
    }
    /* gender condition */
    if (male || female || others) {
        document.getElementById("gendererror").style.display = "none";
    } else {
        document.getElementById("gendererror").style.display = "block";
    }
    /* agree condition */
    if (agree) {
        document.getElementById("agreeerror").style.display = "none";
    } else {
        document.getElementById("agreeerror").style.display = "block";
    }
 
return false;
}