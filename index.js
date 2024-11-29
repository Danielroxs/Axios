async function main() {

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

    //===================DELETE=====================//

    /* axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then(response => console.log(response))
        .catch(error => console.log(error)); */

    //===================Peticiones concurrentes=====================//

    /* const usersURL = "https://jsonplaceholder.typicode.com/users";
    const postsURL = "https://jsonplaceholder.typicode.com/posts"; */

    /* Promise.all([axios.get(usersURL), axios.get(postsURL)])
        .then(res => console.log(res))
        .catch(err => console.log(err)); */

    /* const resUsers = await axios.get(usersURL);
    const postUsers = await axios.get(postsURL);
    console.log(resUsers.data, postUsers.data); */

    /* const res = await Promise.all([
        axios.get(usersURL),
        axios.get(postsURL),
    ]);

    console.log(res[0].data, res[1].data); */

    //===================INTERCEPTADORES=====================//

    /* axios.interceptors.request.use(function (config) {
        console.log(config)
        config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        return config;
    })

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log(res); */

    //===================INTERCEPTADORES=====================//

    /* const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: "Dan"
    }, {
        headers: {
            Rox: "Rox"
        }
    })
    console.log(res); */

    //===================REQUEST TRANSFORM=====================//

    /* const res = await axios.get("https://jsonplaceholder.typicode.com/users", {
        transformResponse: axios.defaults.transformResponse.concat(data => {
            console.log(data);

            data = data.map(user => {
                return {
                    ...user,
                    myCustomtitle: `${user.name} ${user.username} ${user.email}`
                }
            })
            return data;
        })
    })
    console.log(res); */

    //===================GLOBALS=====================//

    /* axios.defaults.headers.common['Rox'] = "Hello World";

    const resUsers = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(resUsers);

    const resPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(resPosts); */

    //===================ERROR HANDLING=====================//

    /* const res = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
    })
        .catch(err => {
            if (err.response.status === 404) {
                console.log("No se encontro la peticion");
            } if (err.response.data) {
                console.log(err.response.data.error);
            }
        }); */


    /* try {
        const res = await axios.post("https://reqres.in/api/login", {
            email: "eve.holt@reqres.in",
        })
        console.log(res);
    } catch (err) {
        if (err.response.status === 404) {
            console.log("No se encontro la peticion");
        } if (err.response.data) {
            console.log("Datos erroneos");
            console.log(err.response.data.error);
        }
    } */

    //===================CANCELLATION=====================//

    /* const controller = new AbortController();

    try {
        controller.abort();
        const res = await axios.post("https://reqres.in/api/login", {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }, {
            signal: controller.signal
        })
        console.log(res);
    } catch (err) {
        console.log(err);

        if (err.response?.status === 404) {
            console.log("No se encontro la peticion");
        } if (err.response?.status === 400) {
            console.log("Datos erroneos");
            console.log(err.response.data.error);
        }
    } */

    //===================INSTANCIAS=====================//
    /* const axiosInstance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    })

    const resPosts = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(resPosts);

    const resUsers = await axiosInstance.get('https://jsonplaceholder.typicode.com/users/1')
    console.log(resUsers);

    const resComment = await axiosInstance.get('https://jsonplaceholder.typicode.com/comments/1')
    console.log(resComment); */

    //===================Timeout=====================//

    /*  const axiosInstance = axios.create({
         baseURL: "https://jsonplaceholder.typicode.com",
         timeout: 1000
     })
 
     const resPosts = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts/1', {
         timeout: 1000
     })
     console.log(resPosts);
 
     const resUsers = await axiosInstance.get('https://jsonplaceholder.typicode.com/users/1')
     console.log(resUsers);
 
     const resComment = await axiosInstance.get('https://jsonplaceholder.typicode.com/comments/1')
     console.log(resComment); */

}


main();