const registerForm = document.getElementById("form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = e.target.username.value;
  let password = e.target.password.value;
  let email = e.target.email.value;
  let phoneNumber = e.target.phoneNumber.value;

  // compare data in session storage with data that user enter it
  let dataKeys = ["userName",  "email", "phoneNumber"];
  let inputsData = [userName,  email, phoneNumber];
  let arr = [];
  for (let i = 0; i < dataKeys.length; i++) {
    arr.push(sessionStorage.getItem(dataKeys[i]) === inputsData[i]);
  }
  //  validate data and add to session storage
  const check = (arr) => {
    if (arr.some((item)=> item === true) ) return alert("the user is exist");
    else {
      sessionStorage.clear();
      validateUserName(userName);
      validatePassword(password);
      validateEmail(email);
      validatePhoneNumber(phoneNumber);
      return alert('the user added succsessfull')
    }
  };
  check(arr);
 form.reset();
});

// functions to validate form data
const validateUserName = (userName) => {
  let regex = /^[a-zA-Z0-9_]+$/;
  if (regex.test(userName) === false) {
    return alert("plz enter userName with out spaces");
  }
  window.sessionStorage.setItem("userName", userName);
  return "done";
};

const validatePassword = (password) => {
  let regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/g;
  if (regex.test(password) === false) {
    return alert(
      "plz write password more than  8 characters and at least 1 number , 1 special characters and 1 uppercase "
    );
  }
  window.sessionStorage.setItem("password", password);

  return "done";
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email) === false) {
    return alert("plz write a valid email as like {user@user.domain}");
  }
  window.sessionStorage.setItem("email", email);

  return "done";
};

const validatePhoneNumber = (phoneNumber) => {
  let regex = /^(07\d{8})/g;

  if (regex.test(phoneNumber) === false) {
    return alert(
      "plz write a valid phone number with 10 digits  and start with 07 "
    );
  }
  window.sessionStorage.setItem("phoneNumber", phoneNumber);

  return "done";
};


// check data if exsist on session storage or not

// let dataKeys = ['userName'  , 'email' , 'phoneNumber'];
// let inputsData = ['MohammadZayed'  , 'mohammadzayed193@gmail.com' , '0788120269'];
// let arr = [];

// for (let i = 0; i < dataKeys.length; i++) {

//       arr.push(sessionStorage.getItem(dataKeys[i]) === inputsData[i]);

// }

// console.log(arr);
