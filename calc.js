function calculate(day, month, yy, cc) {
  var ss1 = cc / 4 - (2 * cc - 1);
  var ss2 = (5 * yy) / 4;
  var ss3 = (26 * (month + 1)) / 10;
  var ss = ss1 + ss2 + ss3 + day;
  ss = ss % 7;

  ss = parseInt(ss);
  return ss;
}

function displaydata() {
  var formData = document.forms[0];

  var fname = formData.firstname.value;
  var sname = formData.secondname.value;
  var fullname = fname.concat(sname);

  var day = parseInt(formData.day.value);
  var month = parseInt(formData.month.value);
  var year = parseInt(formData.year.value);

  var gender = parseInt(formData.gender.value);

  if(fname == null, sname == null, day == null,month, year ==null, gender ==null){
      alert("Please fill all the requred fields");
      return false;

  }

  var cc = parseInt(year / 100);
  var yy = year % 100;

  var ss = calculate(day, month, yy, cc);

  if (ss === 0 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Sunday and your akan name is Kwasi"
    );
  } else if (ss === 0 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Sunday and your akan name is Akosua"
    );
  } else if (ss === 1 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Monday and your akan name is Kwadwo"
    );
  } else if (ss === 1 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Monday and your akan name is Adwoa"
    );
  } else if (ss === 2 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Teusday and your akan name is Kwabena"
    );
  } else if (ss === 2 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Teusday and your akan name is Abenaa"
    );
  } else if (ss === 3 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a wednesday and your akan name is Kwaku"
    );
  } else if (ss === 3 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a wednesday and your akan name is Akua"
    );
  } else if (ss === 4 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Thursday and your akan name is Yaw"
    );
  } else if (ss === 4 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Thursday and your akan name is Yaa"
    );
  } else if (ss === 5 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Friday and your akan name is Kofi"
    );
  } else if (ss === 5 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Friday and your akan name is Afua"
    );
  } else if (ss === 6 && gender == 1) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Saturday and your akan name is Kwame"
    );
  } else if (ss === 6 && gender == 2) {
    alert(
      "Hello " +
        fullname +
        " you were born on a Saturday and your akan name is Ama"
    );
  } else {
    alert("Enter a valid date");
  }
}
