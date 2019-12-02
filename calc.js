function getdetails(){
    // alert("How are you");
    var fname = document.forms["form_sub"]["firstname"].value;
    var sname = document.forms["form_sub"]["secondname"].value;
    // alert(fname);
    var day = document.forms["form_sub"]["day"].value;
    //  day = parseInt(day);
    var month  = document.forms["form_sub"]["month"].value;
    // month = parseInt(month);
    var year = document.forms["form_sub"]["year"].value;
    // year = parseInt(year);
    var e =     document.getElementById("gender");
    var gender = e.options[e.selectedIndex].value;
  
    fulname = fname.concat(sname);
    
    var hh = day.concat(month);
    var hh = hh.concat(year);
    // alert(hh);
     
    var cc = year.slice(0,2);
    // alert(cc);
    var yy = year.slice(2,4)
    // alert(yy)
    // day_of_birth(nj);
    // alert(nj);



    var cc = parseInt(year.slice(0, 2));
    var yy = parseInt(year.slice(2, 4));
    var mm = parseInt(month);
    var dd = parseInt(day);
    var ss1 = ((cc/4)- (2*cc-1));
    // alert(ss1);

    var ss2 = (5*yy/4);
    // alert(ss2); 
    var ss3 = (26*(mm+1)/10);
    // alert(ss3);
    var ss = ss1+ss2+ss3+dd;
    ss = ss%7;
    alert(ss);
    ss = parseFloat(ss);


    
        

    if ((ss >= 0.0 && ss < 1) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a Sunday and your akan name is Kwasi");
    }   
    else if ((ss >= 0.0 && ss < 1) && (gender == 2)){
        alert("Hello " + fulname + " you were born on a Sunday and your akan name is Akosua");
    }
    else if ((ss >= 1.0 && ss < 2) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a Monday and your akan name is Kwadwo");
    }
    else if ((ss >= 1.0 && ss < 2) && (gender == 2)) {
        alert("Hello " + fulname + " you were born on a Monday and your akan name is Adwoa");
    }
    else if ((ss >= 2.0 && ss < 3) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a Teusday and your akan name is Kwabena");
    }
    else if ((ss >= 2.0 && ss < 3) && (gender == 2)) {
        alert("Hello " + fulname + " you were born on a Teusday and your akan name is Abenaa");
    }
    else if ((ss >= 3.0 && ss < 4) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a wednesday and your akan name is Kwaku");
    }
    else if ((ss >= 3.0 && ss < 4) && (gender == 2)) {
        alert("Hello " + fulname + " you were born on a wednesday and your akan name is Akua");
    }
    else if ((ss >= 4.0 && ss < 5) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a Thursday and your akan name is Yaw");
    }
    else if ((ss >= 4.0 && ss < 5) && (gender == 2)) {
        alert("Hello " + fulname + " you were born on a Thursday and your akan name is Yaa");
    }
    else if ((ss >= 5.0 && ss < 6) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a Friday and your akan name is Kofi");
    }
    else if ((ss >= 5.0 && ss < 6) && (gender == 2)) {
        alert("Hello " + fulname + " you were born on a Friday and your akan name is Afua");
    }
    else if ((ss >= 6.0 && ss < 7) && (gender == 1)) {
        alert("Hello " + fulname + " you were born on a Saturday and your akan name is Kwame");
    }
    else if ((ss >= 6.0 && ss < 7) && (gender == 2)) {
        alert("Hello " + fulname + " you were born on a Saturday and your akan name is Ama");
    }
    else{
        alert("Enter a valid date");
    }

    
 

}

function day_of_birth(nj){
var cc = parseInt(year.slice(0,2));
var yy = parseInt(year.slice(2,4));
var mm = parseInt(month);
var dd = parseInt(day);

var nj = cc*yy;
nj = nj.toString();
return nj;


}


    
    
    













   




   




   




   













