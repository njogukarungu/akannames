function getdetails(){
    // alert("How are you");
    var fname = document.forms["form_sub"]["firstname"].value;
    var sname = document.forms["form_sub"]["secondname"].value;
    alert(fname);
    var day = document.forms["form_sub"]["day"].value;
    var month  = document.forms["form_sub"]["month"].value;
    var year = document.forms["form_sub"]["year"].value;
    var e =     document.getElementById("sex");
    var gender = e.options[e.selectedIndex].text;
    alert(gender);

    var hh = day.concat(month);
    var hh = hh.concat(year);
    alert(hh);
     
    var cc = year.slice(0,2);
    alert(cc);

    
}