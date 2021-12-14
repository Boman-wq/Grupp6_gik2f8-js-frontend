const url = 'http://127.0.0.1:8000/users/';

//funtion to GET all users
function getAllJSON() {
    const result = fetch(url).then((response) => response.json()).then((data) => {
        return data;
    });
return result;
}

// GET user ID
function getById(id){
    const completeUrl = url + id;
    console.log(completeUrl)
        const result = fetch(completeUrl)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
    return result;
}
getById(1)

//Create a user
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

//Remove a user
function deleteUser(data){
    const JSONData = JSON.stringify(data);
    console.log(JSONData)
    const result = fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type":"application/json"
        },
        body: JSONData
    });
    return result;
}

//Update an exsiting user
function putUser(data){
    const JSONData = JSON.stringify(data);
    console.log(JSONData)
    const result = fetch(url, {
        method: "PUT",
        headers: {
            "Content-type":"application/json"
        },
        body: JSONData
    });
    return result;
}

// Vad some behöver fixas:
// 1.Update User
// 2.Delete User