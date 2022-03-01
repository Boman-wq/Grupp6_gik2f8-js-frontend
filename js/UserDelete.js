const userList = document.getElementById('user');

getAllJSON().then((users) => {
    users.forEach((user) => {
        const currentUserHTML = `<option value = ${user.email}>${user.f_name} ${user.l_name}</option>`;
        userList.insertAdjacentHTML('beforeend', currentUserHTML);
        // console.log(currentUserHTML);
    });
});

//( ` )= backtick

function removeUser(event){
    event.preventDefault();
  
    const data = {
        email: userList.value
    };
    //console.log(data)
    
    deleteUser(data).then((result) =>{console.log(result); location.replace("http://" + window.location.hostname + ":" + window.location.port + "/read.html"); }).catch((error) => {
      console.log(error);
    });
  }