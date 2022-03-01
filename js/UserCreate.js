/* User.js
  HTML-code to represent a "User-object"

*/
const formElement = document.querySelector('form.create__form');
const buttonElement = document.querySelector(".btn");

// if the button is pressed call createUser funtion.
if(buttonElement)
{
  buttonElement.addEventListener('click', createUser);
}


//Create a user with first,last name and email.
function createUser(event){
  event.preventDefault();

  //data that is used by being created.
  const data = {
    f_name: formElement.f_name.value,
    l_name: formElement.l_name.value,
    email: formElement.email.value
  };
  
  //
  postUser(data).then((result) =>{console.log(result); location.replace("http://" + window.location.hostname + ":" + window.location.port + "/read.html");}).catch((error) => {
    console.log(error);
  });

}

