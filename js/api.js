const url = 'http://127.0.0.1:8000/users/';
function getAllJson() {
    const result = fetch(url).then((response) => response.json()).then((data) => {
        return data;
    });
return result;
}

// getAllJson().then((users) => {
//     console.log(users);
// });


function postUser(data){
    const JSONData = JSON.stringify(data);
    const result = fetch(url, {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)
    });
    return result;
}
//const testUser ={
//    f_name: 'Nata',
//    l_name: 'Hej',
//    email: 'd@du.se'
//};

//postUser(testUser);