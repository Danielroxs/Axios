function main() {

    //===================GET=====================//

    /*  axios.get("https://jsonplaceholder.typicode.com/users", {
         params: {
             _limit: 2
         }
     })
         .then(response => console.log(response.data))
         .catch(error => console.log(error)); */

    /* axios({
        method: "POST",
        url: "https://reqres.in/api/register",
        data: {
            "email": "eve.holt@reqres.in",
            //"password": "pistol"
        }
    }) */

    //===================POST=====================//

    /* const data = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }

    axios.post("https://reqres.in/api/register", data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
} */

    //===================POST=====================//

    /* axios.patch("https://jsonplaceholder.typicode.com/users/1", {
        "name": "Dan",
        "üsername": "Rox"
    }).then(response => console.log(response))
        .catch(error => console.log(error)); */

    axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then(response => console.log(response))
        .catch(error => console.log(error));

}

main();