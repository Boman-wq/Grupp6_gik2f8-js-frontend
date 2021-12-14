// getById(userId).then((result) => {
//   console.log(result);
// });

/* User.js
  HTML-code to represent a "User-object"

*/
const formElement = document.querySelector('form.create__form');
const buttonElement = document.querySelector(".btn");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

if(buttonElement)
{
  buttonElement.addEventListener('click', updateUser);
}



if(userId){
  getById(userId).then((user) => {
    formElement.f_name.value = user.f_name;
    formElement.l_name.value = user.l_name;
    formElement.email.value = user.email;
    formElement.presentation.value = user.presentation;
  })
}

function updateUser(event){
  event.preventDefault();

  const data = {
    id: userId,
    f_name: formElement.f_name.value,
    l_name: formElement.l_name.value,
    email: formElement.email.value,
    presentation: formElement.presentation.value
  };

  putUser(data).then((result) =>{console.log(result);}).catch((error) => {
    console.log(error);
  });
}
//location.replace("http://localhost:5500/read.html")