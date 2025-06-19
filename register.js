const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email-address");
const password = document.getElementById("pass");
const signUp = document.getElementById("sign-up-btn");
const eye = document.querySelector('.eye-btn');


let multipleValues = [];
let multipleObject;



// Storing values in Local Storage

signUp.addEventListener("click", function (e) {
  e.preventDefault();

  multipleObject = {
    fullname: fullName.value,
    emailAddress: emailAddress.value,
    password: password.value,
  };

  multipleValues.push(multipleObject);

  console.log(multipleValues);

  localStorage.setItem("object", JSON.stringify(multipleValues));

  
});


function showPass(){
    if(password.type==='password'){
       password.type = "text"; 
    }else{
        password.type = "password"
    }
}


// Working code
// signUp.addEventListener("click", function (e) {
//     e.preventDefault();
 
 
//     multipleObject = {
//     fullname: fullName.value,
//     emailAddress: emailAddress.value,
//     password: password.value,
//   };
  
//     saveFormData(multipleObject);
//   });
 
//   function saveFormData(multipleObject){
//     const storeData = JSON.parse(localStorage.getItem('formData'));
 
//     storeData.push(multipleObject);
//     localStorage.setItem('formData' , JSON.stringify(storeData));
//   }

