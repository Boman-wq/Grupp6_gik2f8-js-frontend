const userList = document.getElementById('user');

getAllJSON().then((users) => {
    users.forEach((user) => {
        const currentUserHTML = `<option value = ${user.email}>${user.f_name} ${user.l_name}</option>`;
        userList.insertAdjacentHTML('beforeend', currentUserHTML);
        console.log(currentUserHTML);
    });
});

//( ` )= backtick

function removeUser(event){
    event.preventDefault();
  
    const data = {
        email: userList.value
    };
    console.log(data);
    
    deleteUser(data).then((result) =>{console.log(result); location.replace("http://localhost:5500/read.html"); }).catch((error) => {
      console.log(error);
    });
    //location.replace("http://localhost:5500/read.html")
  }