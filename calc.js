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
    var e =     document.getElementById("sex");
    var gender = e.options[e.selectedIndex].text;
    // alert(gender);

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


    
    
    













   




   




   




   













