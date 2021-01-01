/*Function to show login form*/
const showLogin = () => {

    const mainEl = document.getElementById("adminMain");
    mainEl.innerHTML = "";
    mainEl.innerHTML = '<form id="adminPass"  onSubmit = "login()">' +
        '<label> Lösen : </label >' +
        '<input type="password" placeholder="Lösen" name="password" required>' +
        '<button onclick = "login()" type="button">Login</button>' +
        '</form>'
}
/**
 * function to delete one slected course
 * makes fetch call to rest_courses.php 
 * @param {*} uni 
 * @param {*} name 
 */
const deleteCourse = (uni, name) => {
    console.log("deleting: " + uni + " " + name);
    /*make fetch delete*/
    const data = {
        university: uni,
        course_name: name,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            response.json()
            location.reload()
        })

        .then(data => {

            location.reload();


        }).catch(()=>{
            location.reload();
        })

}

/**
 * Function to delete xp
 * makes fetch call to rest_xp.php
 * @param {*} workplace 
 * @param {*} position 
 */
const deleteXp = (workplace, position) => {
    console.log("deleting: " + workplace + " " + position);
    /*make fetch delete*/
    const data = {
        workplace: workplace,
        position: position,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_xp.php', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            response.json()
            location.reload
        })
        .then(data => {
            location.reload();
        }).catch(()=>{
            location.reload();
        })


}
/**
 * Function to delete webpage
 * makes fetch call to rest_wp.php
 * @param {*} title 
 * @param {*} url 
 */
const deleteWp = (title, url) => {
    console.log("deleting: " + title + " " + url);
    /*make fetch delete*/
    const data = {
        title: title,
        url: url,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            location.reload();
        }).catch(()=>{
            location.reload();
        })


}
/**
 * Function to update an experience 
 * makes fetch call to rest_xp.php
 */
const updateXp = () => {

    var x = document.getElementById("xpupdate");
    const data = {
        workplace: x.elements[0].value,
        position: x.elements[1].value,
        new_position: x.elements[2].value,
        new_workplace: x.elements[3].value,
        new_start_date: x.elements[4].value,
        new_end_date: x.elements[5].value,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_xp.php', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            location.reload();
        }).catch(()=>{
            location.reload();
        })


}
/**
 * Function to update a webpage
 * makes fetch call to rest_wp.php
 */
const updateWp = () => {

    var x = document.getElementById("wpupdate");
    const data = {
        title: x.elements[0].value,
        url: x.elements[1].value,
        new_title: x.elements[2].value,
        new_url: x.elements[3].value,
        new_description: x.elements[4].value,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            //getCourses();
            location.reload();
        }).catch(()=>{
            location.reload();
        })

}
/**
 * function to Add an experience
 * makes fetch call to rest_xp.php
 */
const addXp = () => {

    var x = document.getElementById("xpAdd");
    const data = {
        workplace: x.elements[0].value,
        position: x.elements[1].value,
        start_date: x.elements[2].value,
        end_date: x.elements[3].value,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_xp.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            //getCourses();
            location.reload();
        }).catch(()=>{
            location.reload();
        })


}
/**
 * Function to add webpage
 * makes fetch call to rest_wp.php
 */
const addWp = () => {

    var x = document.getElementById("wpAdd");
    const data = {
        title: x.elements[0].value,
        url: x.elements[1].value,
        description: x.elements[2].value,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            //getCourses();
            location.reload();
        }).catch(()=>{
            location.reload();
        })

}
/**
 * function to update a course
 * makes fetch call to rest_course.php
 */
const updateCourse = () => {

    var x = document.getElementById("courseupdate");
    const data = {
        course_name: x.elements[0].value,
        university: x.elements[1].value,
        new_course_name: x.elements[2].value,
        new_university: x.elements[3].value,
        new_start_date: x.elements[4].value,
        new_end_date: x.elements[5].value,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            //getCourses();
            location.reload();
        }).catch(()=>{
            location.reload();
        })

}
/**
 * function to add course
 * makes fetch call to rest_courses.php
 */
const addCourse = () => {

    var x = document.getElementById("courseAdd");
    const data = {
        course_name: x.elements[0].value,
        university: x.elements[1].value,
        start_date: x.elements[2].value,
        end_date: x.elements[3].value,
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            //getCourses();
            location.reload();
        }).catch(()=>{
            location.reload();
        })

}
/**
 * Function to get all webpages  from the database
 * makes fetch call ot rest_wp.php
 */
const getWp = () => {

    const headerEl = document.getElementById("adminHeader");
    const wpEl = document.createElement("DIV")
    wpEl.innerHTML = ''; /*empty value*/
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            if (data.message === "No webpages found") { //check if this is correct
                return
            }
            data.forEach(wp => {
                /** parse json here */
                wpEl.innerHTML +=
                    `
                <div class = "course">
                <p>
                <b>Webplatser</b>
                <b>Titel:</b> ${wp.title}
                <b>Beskrivning: </b> ${wp.desc}
                <b>URL: </b> ${wp.url}
                `+ "<span onClick='deleteWp(" + '"' + `${wp.title}` + '"' + "," + '"' + `${wp.url}` + '"' + ")'> Ta bort </span>" +
                    "</p></div>"

            })
        })
    headerEl.appendChild(wpEl)

}

/**
 * function to get all experiences in database
 * makes fetch call to rest_xp.php
 */
const getXp = () => {

    const headerEl = document.getElementById("adminHeader");
    const xpEl = document.createElement("DIV")
    xpEl.innerHTML = ''; /*empty value*/
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_xp.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            if (data.message === "No experience found") { //check if this is correct
                return
            }
            data.forEach(xp => {
                /** parse json here */
                xpEl.innerHTML +=
                    `
                <div class = "course">
                <p>
                <b>Erfarenhet</b>
                <b>Arbetsplats:</b> ${xp.work_place}
                <b>Position: </b> ${xp.position}
                <b>Start datum: </b> ${xp.start_date}
                <b>Slut datum: </b> ${xp.end_date}
                `+ "<span onClick='deleteXp(" + '"' + `${xp.work_place}` + '"' + "," + '"' + `${xp.position}` + '"' + ")'> Ta bort </span>" +
                    "</p></div>"

            })
        })
    headerEl.appendChild(xpEl)
}

/**
 * function to get all courses from database
 * makes fetch call to rest_courses.php
 */
const getCourses = () => {

    const headerEl = document.getElementById("adminHeader");
    const coursesEl = document.createElement("DIV")
    coursesEl.innerHTML = ''; /*empty value*/
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            if (data.message === "No courses found") {
                return
            }
            data.forEach(course => {
                /** parse json here */
                coursesEl.innerHTML +=
                    `
                <div class = "course">
                <p>
                <b>Kurs</b>
                <b>Universitet:</b> ${course.university}
                <b>Namn: </b> ${course.course_name}
                <b>Start datum: </b> ${course.start_date}
                <b>Slut datum: </b> ${course.end_date}
                `+ "<span onClick='deleteCourse(" + '"' + `${course.university}` + '"' + "," + '"' + `${course.course_name}` + '"' + ")'> Ta bort </span>" +
                    "</p></div>"

            })
        })
    headerEl.appendChild(coursesEl)

}
const logout = () => {
    console.log("her")
    localStorage.setItem('loggedon', false);
    location.reload()
}
/**
 * Function to render admin form if user is authorixed
 * makes fetch call to rest_authoruzed.php
 */
const showAdmin = () => {
    const headerEl = document.getElementById("adminHeader");
    headerEl.innerHTML = "";
    getCourses();
    getWp();
    getXp();
    const mainEl = document.getElementById("adminMain");
    mainEl.innerHTML = "";
    mainEl.innerHTML = '<form id="courseAdd" >' +
        '<label for="kursname">Kursnamn:</label>' +
        '<input type="text" name="kursnamn" id="kursnamn">' +
        '<label for="university">Universitet:</label>' +
        '<input type="text" name="university" id="uni">' +
        '<label for="start_date">Startdatum:</label>' +
        '<input type="date" name="start_date" id="sdate">' +
        '<label for="end_date">Slutdatum:</label>' +
        '<input type="date" name="end_date" id="edate">' +
        '<button onclick = "addCourse()">Lägg till kurs</button>' +
        '</form>' + "<hr/>" +
        '<form id="xpAdd"  >' +
        '<label for="workplace">Workplace:</label>' +
        '<input type="text" name="workplace" id="workplace">' +
        '<label for="title">Title:</label>' +
        '<input type="text" name="title" id="title">' +
        '<label for="start_date">Startdatum:</label>' +
        '<input type="date" name="start_date" id="sdate">' +
        '<label for="end_date">Slutdatum:</label>' +
        '<input type="date" name="end_date" id="edate">' +
        '<button onclick = "addXp()">Lägg till erfarenhet</button>' +
        '</form>' + "<hr/>" +
        '<form  id="wpAdd"  >' +
        '<label for="title">Title:</label>' +
        '<input type="text" name="title" id="wpTitle">' +
        '<label for="url">Url:</label>' +
        '<input type="url" name="url" id="url">' +
        '<label for="desc">Description:</label>' +
        '<input type="text" name="desc" id="desc">' +
        '<button onclick = "addWp()">Lägg till webpage</button>' +
        '</form>' + "<hr/>" +
        '<form  id="courseupdate"  >' +
        '<label for="kursname">Kursnamn:</label>' +
        '<input type="text" name="kursnamn" id="kursnamn">' +
        '<label for="university">Universitet:</label>' +
        '<input type="text" name="university" id="uni">' +
        '<label for="kursname">nytt Kursnamn:</label>' +
        '<input type="text" name="kursnamn" id="kursnamn">' +
        '<label for="university">nytt Universitet:</label>' +
        '<input type="text" name="university" id="uni">' +
        '<label for="start_date">nytt Startdatum:</label>' +
        '<input type="date" name="start_date" id="sdate">' +
        '<label for="end_date">nytt Slutdatum:</label>' +
        '<input type="date" name="end_date" id="edate">' +
        '<button onclick = "updateCourse()">Updatera</button>' +
        '</form>' + "<hr/>" +
        '<form  id="xpupdate"  >' +
        '<label for="workplace">Workplace:</label>' +
        '<input type="text" name="workplace" id="workplace">' +
        '<label for="title">Title:</label>' +
        '<input type="text" name="title" id="title">' +
        '<label for="workplace">Ny Workplace:</label>' +
        '<input type="text" name="workplace" id="workplace">' +
        '<label for="title">Ny Title:</label>' +
        '<input type="text" name="title" id="title">' +
        '<label for="start_date">nytt Startdatum:</label>' +
        '<input type="date" name="start_date" id="sdate">' +
        '<label for="end_date">nytt Slutdatum:</label>' +
        '<input type="date" name="end_date" id="edate">' +
        '<button onclick = "updateXp()">Updatera</button>' +
        '</form>' + "<hr/>" +
        '<form  id="wpupdate"  >' +
        '<label for="title">Title:</label>' +
        '<input type="text" name="title" id="wpTitle">' +
        '<label for="url">Url:</label>' +
        '<input type="url" name="url" id="url">' +
        '<label for="title">ny Title:</label>' +
        '<input type="text" name="title" id="wpTitle">' +
        '<label for="url">ny Url:</label>' +
        '<input type="url" name="url" id="url">' +
        '<label for="desc">ny Description:</label>' +
        '<input type="text" name="desc" id="desc">' +
        '<button onclick = "updateWp()">updatera</button>' +
        '</form>' +
        '<button onclick = "logout()">logout</button>'

}

const adminPage = () => {
    const loggedon = localStorage.getItem('loggedon');
    if (loggedon === "true") {
        showAdmin()
    } else {
        showLogin()
    }
}
/**
 * Function to preform a login of user
 * calls fetch with url rest_login.php
 */
const login = () => {
    const x = document.getElementById("adminPass");
    const password = x.elements[0].value

    if (password) {
        const data = {
            email: "cristina.lofqvist@gmail.com",
            password: password
        }
        fetch('https://willbur.nu/DT173G_PROJECT/API/rest_login.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }) /*make fetch*/
            .then(response => {
                if (!response.ok) {
                    showLogin();
                    localStorage.setItem('loggedon', false);
                }
                return response.json();
            })
            .then(data => {
                if (data.message === "Login ok") {
                    localStorage.setItem('loggedon', true);
                    showAdmin();
                }
            })
    }
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKkZ1bmN0aW9uIHRvIHNob3cgbG9naW4gZm9ybSovXG5jb25zdCBzaG93TG9naW4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluTWFpblwiKTtcbiAgICBtYWluRWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluRWwuaW5uZXJIVE1MID0gJzxmb3JtIGlkPVwiYWRtaW5QYXNzXCIgIG9uU3VibWl0ID0gXCJsb2dpbigpXCI+JyArXG4gICAgICAgICc8bGFiZWw+IEzDtnNlbiA6IDwvbGFiZWwgPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTMO2c2VuXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQ+JyArXG4gICAgICAgICc8YnV0dG9uIG9uY2xpY2sgPSBcImxvZ2luKClcIiB0eXBlPVwiYnV0dG9uXCI+TG9naW48L2J1dHRvbj4nICtcbiAgICAgICAgJzwvZm9ybT4nXG59XG4vKipcbiAqIGZ1bmN0aW9uIHRvIGRlbGV0ZSBvbmUgc2xlY3RlZCBjb3Vyc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9jb3Vyc2VzLnBocCBcbiAqIEBwYXJhbSB7Kn0gdW5pIFxuICogQHBhcmFtIHsqfSBuYW1lIFxuICovXG5jb25zdCBkZWxldGVDb3Vyc2UgPSAodW5pLCBuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZzogXCIgKyB1bmkgKyBcIiBcIiArIG5hbWUpO1xuICAgIC8qbWFrZSBmZXRjaCBkZWxldGUqL1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVuaXZlcnNpdHk6IHVuaSxcbiAgICAgICAgY291cnNlX25hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfY291cnNlcy5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcblxuXG4gICAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSlcblxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGRlbGV0ZSB4cFxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3hwLnBocFxuICogQHBhcmFtIHsqfSB3b3JrcGxhY2UgXG4gKiBAcGFyYW0geyp9IHBvc2l0aW9uIFxuICovXG5jb25zdCBkZWxldGVYcCA9ICh3b3JrcGxhY2UsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZzogXCIgKyB3b3JrcGxhY2UgKyBcIiBcIiArIHBvc2l0aW9uKTtcbiAgICAvKm1ha2UgZmV0Y2ggZGVsZXRlKi9cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB3b3JrcGxhY2U6IHdvcmtwbGFjZSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X3hwLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG5cblxufVxuLyoqXG4gKiBGdW5jdGlvbiB0byBkZWxldGUgd2VicGFnZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3dwLnBocFxuICogQHBhcmFtIHsqfSB0aXRsZSBcbiAqIEBwYXJhbSB7Kn0gdXJsIFxuICovXG5jb25zdCBkZWxldGVXcCA9ICh0aXRsZSwgdXJsKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZzogXCIgKyB0aXRsZSArIFwiIFwiICsgdXJsKTtcbiAgICAvKm1ha2UgZmV0Y2ggZGVsZXRlKi9cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X3dwLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSlcblxuXG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBhbiBleHBlcmllbmNlIFxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3hwLnBocFxuICovXG5jb25zdCB1cGRhdGVYcCA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4cHVwZGF0ZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB3b3JrcGxhY2U6IHguZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgIHBvc2l0aW9uOiB4LmVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICBuZXdfcG9zaXRpb246IHguZWxlbWVudHNbMl0udmFsdWUsXG4gICAgICAgIG5ld193b3JrcGxhY2U6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIG5ld19zdGFydF9kYXRlOiB4LmVsZW1lbnRzWzRdLnZhbHVlLFxuICAgICAgICBuZXdfZW5kX2RhdGU6IHguZWxlbWVudHNbNV0udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfeHAucGhwJywge1xuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG5cblxufVxuLyoqXG4gKiBGdW5jdGlvbiB0byB1cGRhdGUgYSB3ZWJwYWdlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3Rfd3AucGhwXG4gKi9cbmNvbnN0IHVwZGF0ZVdwID0gKCkgPT4ge1xuXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndwdXBkYXRlXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB4LmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICB1cmw6IHguZWxlbWVudHNbMV0udmFsdWUsXG4gICAgICAgIG5ld190aXRsZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgbmV3X3VybDogeC5lbGVtZW50c1szXS52YWx1ZSxcbiAgICAgICAgbmV3X2Rlc2NyaXB0aW9uOiB4LmVsZW1lbnRzWzRdLnZhbHVlLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X3dwLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG5cbn1cbi8qKlxuICogZnVuY3Rpb24gdG8gQWRkIGFuIGV4cGVyaWVuY2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF94cC5waHBcbiAqL1xuY29uc3QgYWRkWHAgPSAoKSA9PiB7XG5cbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieHBBZGRcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgd29ya3BsYWNlOiB4LmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbjogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW5kX2RhdGU6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfeHAucGhwJywge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG5cblxufVxuLyoqXG4gKiBGdW5jdGlvbiB0byBhZGQgd2VicGFnZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3dwLnBocFxuICovXG5jb25zdCBhZGRXcCA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cEFkZFwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgdXJsOiB4LmVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF93cC5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vZ2V0Q291cnNlcygpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSlcblxufVxuLyoqXG4gKiBmdW5jdGlvbiB0byB1cGRhdGUgYSBjb3Vyc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9jb3Vyc2UucGhwXG4gKi9cbmNvbnN0IHVwZGF0ZUNvdXJzZSA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2V1cGRhdGVcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY291cnNlX25hbWU6IHguZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgIHVuaXZlcnNpdHk6IHguZWxlbWVudHNbMV0udmFsdWUsXG4gICAgICAgIG5ld19jb3Vyc2VfbmFtZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgbmV3X3VuaXZlcnNpdHk6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIG5ld19zdGFydF9kYXRlOiB4LmVsZW1lbnRzWzRdLnZhbHVlLFxuICAgICAgICBuZXdfZW5kX2RhdGU6IHguZWxlbWVudHNbNV0udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfY291cnNlcy5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy9nZXRDb3Vyc2VzKCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIGZ1bmN0aW9uIHRvIGFkZCBjb3Vyc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9jb3Vyc2VzLnBocFxuICovXG5jb25zdCBhZGRDb3Vyc2UgPSAoKSA9PiB7XG5cbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlQWRkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNvdXJzZV9uYW1lOiB4LmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICB1bml2ZXJzaXR5OiB4LmVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICBzdGFydF9kYXRlOiB4LmVsZW1lbnRzWzJdLnZhbHVlLFxuICAgICAgICBlbmRfZGF0ZTogeC5lbGVtZW50c1szXS52YWx1ZSxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF9jb3Vyc2VzLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy9nZXRDb3Vyc2VzKCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIGdldCBhbGwgd2VicGFnZXMgIGZyb20gdGhlIGRhdGFiYXNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIG90IHJlc3Rfd3AucGhwXG4gKi9cbmNvbnN0IGdldFdwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluSGVhZGVyXCIpO1xuICAgIGNvbnN0IHdwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpXG4gICAgd3BFbC5pbm5lckhUTUwgPSAnJzsgLyplbXB0eSB2YWx1ZSovXG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF93cC5waHAnKSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJObyB3ZWJwYWdlcyBmb3VuZFwiKSB7IC8vY2hlY2sgaWYgdGhpcyBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmZvckVhY2god3AgPT4ge1xuICAgICAgICAgICAgICAgIC8qKiBwYXJzZSBqc29uIGhlcmUgKi9cbiAgICAgICAgICAgICAgICB3cEVsLmlubmVySFRNTCArPVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY291cnNlXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGI+V2VicGxhdHNlcjwvYj5cbiAgICAgICAgICAgICAgICA8Yj5UaXRlbDo8L2I+ICR7d3AudGl0bGV9XG4gICAgICAgICAgICAgICAgPGI+QmVza3Jpdm5pbmc6IDwvYj4gJHt3cC5kZXNjfVxuICAgICAgICAgICAgICAgIDxiPlVSTDogPC9iPiAke3dwLnVybH1cbiAgICAgICAgICAgICAgICBgKyBcIjxzcGFuIG9uQ2xpY2s9J2RlbGV0ZVdwKFwiICsgJ1wiJyArIGAke3dwLnRpdGxlfWAgKyAnXCInICsgXCIsXCIgKyAnXCInICsgYCR7d3AudXJsfWAgKyAnXCInICsgXCIpJz4gVGEgYm9ydCA8L3NwYW4+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvcD48L2Rpdj5cIlxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKHdwRWwpXG5cbn1cblxuLyoqXG4gKiBmdW5jdGlvbiB0byBnZXQgYWxsIGV4cGVyaWVuY2VzIGluIGRhdGFiYXNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfeHAucGhwXG4gKi9cbmNvbnN0IGdldFhwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluSGVhZGVyXCIpO1xuICAgIGNvbnN0IHhwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpXG4gICAgeHBFbC5pbm5lckhUTUwgPSAnJzsgLyplbXB0eSB2YWx1ZSovXG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF94cC5waHAnKSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJObyBleHBlcmllbmNlIGZvdW5kXCIpIHsgLy9jaGVjayBpZiB0aGlzIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh4cCA9PiB7XG4gICAgICAgICAgICAgICAgLyoqIHBhcnNlIGpzb24gaGVyZSAqL1xuICAgICAgICAgICAgICAgIHhwRWwuaW5uZXJIVE1MICs9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb3Vyc2VcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8Yj5FcmZhcmVuaGV0PC9iPlxuICAgICAgICAgICAgICAgIDxiPkFyYmV0c3BsYXRzOjwvYj4gJHt4cC53b3JrX3BsYWNlfVxuICAgICAgICAgICAgICAgIDxiPlBvc2l0aW9uOiA8L2I+ICR7eHAucG9zaXRpb259XG4gICAgICAgICAgICAgICAgPGI+U3RhcnQgZGF0dW06IDwvYj4gJHt4cC5zdGFydF9kYXRlfVxuICAgICAgICAgICAgICAgIDxiPlNsdXQgZGF0dW06IDwvYj4gJHt4cC5lbmRfZGF0ZX1cbiAgICAgICAgICAgICAgICBgKyBcIjxzcGFuIG9uQ2xpY2s9J2RlbGV0ZVhwKFwiICsgJ1wiJyArIGAke3hwLndvcmtfcGxhY2V9YCArICdcIicgKyBcIixcIiArICdcIicgKyBgJHt4cC5wb3NpdGlvbn1gICsgJ1wiJyArIFwiKSc+IFRhIGJvcnQgPC9zcGFuPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L3A+PC9kaXY+XCJcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZCh4cEVsKVxufVxuXG4vKipcbiAqIGZ1bmN0aW9uIHRvIGdldCBhbGwgY291cnNlcyBmcm9tIGRhdGFiYXNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfY291cnNlcy5waHBcbiAqL1xuY29uc3QgZ2V0Q291cnNlcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbkhlYWRlclwiKTtcbiAgICBjb25zdCBjb3Vyc2VzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpXG4gICAgY291cnNlc0VsLmlubmVySFRNTCA9ICcnOyAvKmVtcHR5IHZhbHVlKi9cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X2NvdXJzZXMucGhwJykgLyptYWtlIGZldGNoKi9cbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm8gY291cnNlcyBmb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goY291cnNlID0+IHtcbiAgICAgICAgICAgICAgICAvKiogcGFyc2UganNvbiBoZXJlICovXG4gICAgICAgICAgICAgICAgY291cnNlc0VsLmlubmVySFRNTCArPVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY291cnNlXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGI+S3VyczwvYj5cbiAgICAgICAgICAgICAgICA8Yj5Vbml2ZXJzaXRldDo8L2I+ICR7Y291cnNlLnVuaXZlcnNpdHl9XG4gICAgICAgICAgICAgICAgPGI+TmFtbjogPC9iPiAke2NvdXJzZS5jb3Vyc2VfbmFtZX1cbiAgICAgICAgICAgICAgICA8Yj5TdGFydCBkYXR1bTogPC9iPiAke2NvdXJzZS5zdGFydF9kYXRlfVxuICAgICAgICAgICAgICAgIDxiPlNsdXQgZGF0dW06IDwvYj4gJHtjb3Vyc2UuZW5kX2RhdGV9XG4gICAgICAgICAgICAgICAgYCsgXCI8c3BhbiBvbkNsaWNrPSdkZWxldGVDb3Vyc2UoXCIgKyAnXCInICsgYCR7Y291cnNlLnVuaXZlcnNpdHl9YCArICdcIicgKyBcIixcIiArICdcIicgKyBgJHtjb3Vyc2UuY291cnNlX25hbWV9YCArICdcIicgKyBcIiknPiBUYSBib3J0IDwvc3Bhbj5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9wPjwvZGl2PlwiXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoY291cnNlc0VsKVxuXG59XG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZXJcIilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2Vkb24nLCBmYWxzZSk7XG4gICAgbG9jYXRpb24ucmVsb2FkKClcbn1cbi8qKlxuICogRnVuY3Rpb24gdG8gcmVuZGVyIGFkbWluIGZvcm0gaWYgdXNlciBpcyBhdXRob3JpeGVkXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfYXV0aG9ydXplZC5waHBcbiAqL1xuY29uc3Qgc2hvd0FkbWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbkhlYWRlclwiKTtcbiAgICBoZWFkZXJFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGdldENvdXJzZXMoKTtcbiAgICBnZXRXcCgpO1xuICAgIGdldFhwKCk7XG4gICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbk1haW5cIik7XG4gICAgbWFpbkVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbkVsLmlubmVySFRNTCA9ICc8Zm9ybSBpZD1cImNvdXJzZUFkZFwiID4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJrdXJzbmFtZVwiPkt1cnNuYW1uOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwia3Vyc25hbW5cIiBpZD1cImt1cnNuYW1uXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwidW5pdmVyc2l0eVwiPlVuaXZlcnNpdGV0OjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidW5pdmVyc2l0eVwiIGlkPVwidW5pXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPlN0YXJ0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydF9kYXRlXCIgaWQ9XCJzZGF0ZVwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cImVuZF9kYXRlXCI+U2x1dGRhdHVtOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZW5kX2RhdGVcIiBpZD1cImVkYXRlXCI+JyArXG4gICAgICAgICc8YnV0dG9uIG9uY2xpY2sgPSBcImFkZENvdXJzZSgpXCI+TMOkZ2cgdGlsbCBrdXJzPC9idXR0b24+JyArXG4gICAgICAgICc8L2Zvcm0+JyArIFwiPGhyLz5cIiArXG4gICAgICAgICc8Zm9ybSBpZD1cInhwQWRkXCIgID4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ3b3JrcGxhY2VcIj5Xb3JrcGxhY2U6PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3b3JrcGxhY2VcIiBpZD1cIndvcmtwbGFjZVwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIj4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJzdGFydF9kYXRlXCI+U3RhcnRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIiBpZD1cInNkYXRlXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIj5TbHV0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiIGlkPVwiZWRhdGVcIj4nICtcbiAgICAgICAgJzxidXR0b24gb25jbGljayA9IFwiYWRkWHAoKVwiPkzDpGdnIHRpbGwgZXJmYXJlbmhldDwvYnV0dG9uPicgK1xuICAgICAgICAnPC9mb3JtPicgKyBcIjxoci8+XCIgK1xuICAgICAgICAnPGZvcm0gIGlkPVwid3BBZGRcIiAgPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwid3BUaXRsZVwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInVybFwiPlVybDo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJ1cmxcIiBuYW1lPVwidXJsXCIgaWQ9XCJ1cmxcIj4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJkZXNjXCI+RGVzY3JpcHRpb246PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjXCIgaWQ9XCJkZXNjXCI+JyArXG4gICAgICAgICc8YnV0dG9uIG9uY2xpY2sgPSBcImFkZFdwKClcIj5Mw6RnZyB0aWxsIHdlYnBhZ2U8L2J1dHRvbj4nICtcbiAgICAgICAgJzwvZm9ybT4nICsgXCI8aHIvPlwiICtcbiAgICAgICAgJzxmb3JtICBpZD1cImNvdXJzZXVwZGF0ZVwiICA+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwia3Vyc25hbWVcIj5LdXJzbmFtbjo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImt1cnNuYW1uXCIgaWQ9XCJrdXJzbmFtblwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInVuaXZlcnNpdHlcIj5Vbml2ZXJzaXRldDo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVuaXZlcnNpdHlcIiBpZD1cInVuaVwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cImt1cnNuYW1lXCI+bnl0dCBLdXJzbmFtbjo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImt1cnNuYW1uXCIgaWQ9XCJrdXJzbmFtblwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInVuaXZlcnNpdHlcIj5ueXR0IFVuaXZlcnNpdGV0OjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidW5pdmVyc2l0eVwiIGlkPVwidW5pXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPm55dHQgU3RhcnRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIiBpZD1cInNkYXRlXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIj5ueXR0IFNsdXRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZF9kYXRlXCIgaWQ9XCJlZGF0ZVwiPicgK1xuICAgICAgICAnPGJ1dHRvbiBvbmNsaWNrID0gXCJ1cGRhdGVDb3Vyc2UoKVwiPlVwZGF0ZXJhPC9idXR0b24+JyArXG4gICAgICAgICc8L2Zvcm0+JyArIFwiPGhyLz5cIiArXG4gICAgICAgICc8Zm9ybSAgaWQ9XCJ4cHVwZGF0ZVwiICA+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwid29ya3BsYWNlXCI+V29ya3BsYWNlOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid29ya3BsYWNlXCIgaWQ9XCJ3b3JrcGxhY2VcIj4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwid29ya3BsYWNlXCI+TnkgV29ya3BsYWNlOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid29ya3BsYWNlXCIgaWQ9XCJ3b3JrcGxhY2VcIj4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPk55IFRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPm55dHQgU3RhcnRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIiBpZD1cInNkYXRlXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIj5ueXR0IFNsdXRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZF9kYXRlXCIgaWQ9XCJlZGF0ZVwiPicgK1xuICAgICAgICAnPGJ1dHRvbiBvbmNsaWNrID0gXCJ1cGRhdGVYcCgpXCI+VXBkYXRlcmE8L2J1dHRvbj4nICtcbiAgICAgICAgJzwvZm9ybT4nICsgXCI8aHIvPlwiICtcbiAgICAgICAgJzxmb3JtICBpZD1cIndwdXBkYXRlXCIgID4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cIndwVGl0bGVcIj4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ1cmxcIj5Vcmw6PC9sYWJlbD4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidXJsXCIgbmFtZT1cInVybFwiIGlkPVwidXJsXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwidGl0bGVcIj5ueSBUaXRsZTo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ3cFRpdGxlXCI+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwidXJsXCI+bnkgVXJsOjwvbGFiZWw+JyArXG4gICAgICAgICc8aW5wdXQgdHlwZT1cInVybFwiIG5hbWU9XCJ1cmxcIiBpZD1cInVybFwiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cImRlc2NcIj5ueSBEZXNjcmlwdGlvbjo8L2xhYmVsPicgK1xuICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NcIiBpZD1cImRlc2NcIj4nICtcbiAgICAgICAgJzxidXR0b24gb25jbGljayA9IFwidXBkYXRlV3AoKVwiPnVwZGF0ZXJhPC9idXR0b24+JyArXG4gICAgICAgICc8L2Zvcm0+JyArXG4gICAgICAgICc8YnV0dG9uIG9uY2xpY2sgPSBcImxvZ291dCgpXCI+bG9nb3V0PC9idXR0b24+J1xuXG59XG5cbmNvbnN0IGFkbWluUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dnZWRvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRvbicpO1xuICAgIGlmIChsb2dnZWRvbiA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgc2hvd0FkbWluKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TG9naW4oKVxuICAgIH1cbn1cbi8qKlxuICogRnVuY3Rpb24gdG8gcHJlZm9ybSBhIGxvZ2luIG9mIHVzZXJcbiAqIGNhbGxzIGZldGNoIHdpdGggdXJsIHJlc3RfbG9naW4ucGhwXG4gKi9cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluUGFzc1wiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHguZWxlbWVudHNbMF0udmFsdWVcblxuICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X2xvZ2luLnBocCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgLyptYWtlIGZldGNoKi9cbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2Vkb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJMb2dpbiBva1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRvbicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzaG93QWRtaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuIl0sImZpbGUiOiJhZG1pbi5qcyJ9
