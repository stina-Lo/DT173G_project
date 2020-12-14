/*Function to show login form*/
const showLogin = () => {
    const mainEl = document.getElementById("adminMain");
    mainEl.innerHTML = "";
    mainEl.innerHTML = '<form id="adminPass"  onSubmit = "login()">' +
        '<label> Lösen : </label >' +
        '<input type="password" placeholder="Lösen" name="password" required>' +
        '<button type="submit">Login</button>' +
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
    fetch('http://localhost:8080/DT173G_project/API/rest_courses.php', {
        method: 'DELETE',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => {
            console.log('Error: ', error);
        })
    location.reload();
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
    fetch('http://localhost:8080/DT173G_project/API/rest_xp.php', {
        method: 'DELETE',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
            console.log('Error: ', error);
        })
    location.reload();

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
    fetch('http://localhost:8080/DT173G_project/API/rest_wp.php', {
        method: 'DELETE',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
            console.log('Error: ', error);
        })
    location.reload();

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
    fetch('http://localhost:8080/DT173G_project/API/rest_xp.php', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('http://localhost:8080/DT173G_project/API/rest_wp.php', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('http://localhost:8080/DT173G_project/API/rest_xp.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('http://localhost:8080/DT173G_project/API/rest_wp.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('http://localhost:8080/DT173G_project/API/rest_courses.php', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('http://localhost:8080/DT173G_project/API/rest_courses.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('http://localhost:8080/DT173G_project/API/rest_wp.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
    fetch('http://localhost:8080/DT173G_project/API/rest_xp.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
    fetch('http://localhost:8080/DT173G_project/API/rest_courses.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            console.log(data)
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

/**
 * Function to render admin form if user is authorixed
 * makes fetch call to rest_authoruzed.php
 */
const showAdmin = () => {
    const data = {
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('http://localhost:8080/DT173G_project/API/rest_authorized.php', {
        method: 'POST',
        body: JSON.stringify(data)
    }) /*make fetch*/
        .then(response => {
            if (!response.ok) {
                showLogin();
            } else {


                const mainEl = document.getElementById("adminMain");
                mainEl.innerHTML = "";
                mainEl.innerHTML = '<form id="courseAdd" onSubmit = "addCourse()">' +
                    '<label for="kursname">Kursnamn:</label>' +
                    '<input type="text" name="kursnamn" id="kursnamn">' +
                    '<label for="university">Universitet:</label>' +
                    '<input type="text" name="university" id="uni">' +
                    '<label for="start_date">Startdatum:</label>' +
                    '<input type="date" name="start_date" id="sdate">' +
                    '<label for="end_date">Slutdatum:</label>' +
                    '<input type="date" name="end_date" id="edate">' +
                    '<button type="submit">Lägg till kurs</button>' +
                    '</form>' + "<hr/>" +
                    '<form id="xpAdd"  onSubmit = "addXp()">' +
                    '<label for="workplace">Workplace:</label>' +
                    '<input type="text" name="workplace" id="workplace">' +
                    '<label for="title">Title:</label>' +
                    '<input type="text" name="title" id="title">' +
                    '<label for="start_date">Startdatum:</label>' +
                    '<input type="date" name="start_date" id="sdate">' +
                    '<label for="end_date">Slutdatum:</label>' +
                    '<input type="date" name="end_date" id="edate">' +
                    '<button type="submit">Lägg till erfarenhet</button>' +
                    '</form>' + "<hr/>" +
                    '<form  id="wpAdd"  onSubmit = "addWp()">' +
                    '<label for="title">Title:</label>' +
                    '<input type="text" name="title" id="wpTitle">' +
                    '<label for="url">Url:</label>' +
                    '<input type="url" name="url" id="url">' +
                    '<label for="desc">Description:</label>' +
                    '<input type="text" name="desc" id="desc">' +
                    '<button type="submit">Lägg till webpage</button>' +
                    '</form>' + "<hr/>" +
                    '<form  id="courseupdate"  onSubmit = "updateCourse()">' +
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
                    '<button type="submit">Updatera</button>' +
                    '</form>' + "<hr/>" +
                    '<form  id="xpupdate"  onSubmit = "updateXp()">' +
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
                    '<button type="submit">Updatera</button>' +
                    '</form>' + "<hr/>" +
                    '<form  id="wpupdate"  onSubmit = "updateWp()">' +
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
                    '<button type="submit">updatera</button>' +
                    '</form>'

                return response.json();
            }
        }).then((data) => {
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    getCourses();
    getWp();
    getXp();

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
        fetch('http://localhost:8080/DT173G_project/API/rest_login.php', {
            method: 'POST',
            body: JSON.stringify(data)
        }) /*make fetch*/
            .then(response => {
                if (!response.ok) {
                    showLogin();
                }
                return response.json();
            })
            .then(data => {
                if (data.message === "Login ok") {
                    showAdmin();
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKkZ1bmN0aW9uIHRvIHNob3cgbG9naW4gZm9ybSovXG5jb25zdCBzaG93TG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbk1haW5cIik7XG4gICAgbWFpbkVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbkVsLmlubmVySFRNTCA9ICc8Zm9ybSBpZD1cImFkbWluUGFzc1wiICBvblN1Ym1pdCA9IFwibG9naW4oKVwiPicgK1xuICAgICAgICAnPGxhYmVsPiBMw7ZzZW4gOiA8L2xhYmVsID4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkzDtnNlblwiIG5hbWU9XCJwYXNzd29yZFwiIHJlcXVpcmVkPicgK1xuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj4nICtcbiAgICAgICAgJzwvZm9ybT4nXG59XG4vKipcbiAqIGZ1bmN0aW9uIHRvIGRlbGV0ZSBvbmUgc2xlY3RlZCBjb3Vyc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9jb3Vyc2VzLnBocCBcbiAqIEBwYXJhbSB7Kn0gdW5pIFxuICogQHBhcmFtIHsqfSBuYW1lIFxuICovXG5jb25zdCBkZWxldGVDb3Vyc2UgPSAodW5pLCBuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZzogXCIgKyB1bmkgKyBcIiBcIiArIG5hbWUpO1xuICAgIC8qbWFrZSBmZXRjaCBkZWxldGUqL1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVuaXZlcnNpdHk6IHVuaSxcbiAgICAgICAgY291cnNlX25hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfY291cnNlcy5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gZGVsZXRlIHhwXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfeHAucGhwXG4gKiBAcGFyYW0geyp9IHdvcmtwbGFjZSBcbiAqIEBwYXJhbSB7Kn0gcG9zaXRpb24gXG4gKi9cbmNvbnN0IGRlbGV0ZVhwID0gKHdvcmtwbGFjZSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nOiBcIiArIHdvcmtwbGFjZSArIFwiIFwiICsgcG9zaXRpb24pO1xuICAgIC8qbWFrZSBmZXRjaCBkZWxldGUqL1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHdvcmtwbGFjZTogd29ya3BsYWNlLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfeHAucGhwJywge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcblxufVxuLyoqXG4gKiBGdW5jdGlvbiB0byBkZWxldGUgd2VicGFnZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3dwLnBocFxuICogQHBhcmFtIHsqfSB0aXRsZSBcbiAqIEBwYXJhbSB7Kn0gdXJsIFxuICovXG5jb25zdCBkZWxldGVXcCA9ICh0aXRsZSwgdXJsKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZzogXCIgKyB0aXRsZSArIFwiIFwiICsgdXJsKTtcbiAgICAvKm1ha2UgZmV0Y2ggZGVsZXRlKi9cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL0RUMTczR19wcm9qZWN0L0FQSS9yZXN0X3dwLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG5cbn1cbi8qKlxuICogRnVuY3Rpb24gdG8gdXBkYXRlIGFuIGV4cGVyaWVuY2UgXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfeHAucGhwXG4gKi9cbmNvbnN0IHVwZGF0ZVhwID0gKCkgPT4ge1xuXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhwdXBkYXRlXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHdvcmtwbGFjZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgcG9zaXRpb246IHguZWxlbWVudHNbMV0udmFsdWUsXG4gICAgICAgIG5ld19wb3NpdGlvbjogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgbmV3X3dvcmtwbGFjZTogeC5lbGVtZW50c1szXS52YWx1ZSxcbiAgICAgICAgbmV3X3N0YXJ0X2RhdGU6IHguZWxlbWVudHNbNF0udmFsdWUsXG4gICAgICAgIG5ld19lbmRfZGF0ZTogeC5lbGVtZW50c1s1XS52YWx1ZSxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9EVDE3M0dfcHJvamVjdC9BUEkvcmVzdF94cC5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIC8vZ2V0Q291cnNlcygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG5cbn1cbi8qKlxuICogRnVuY3Rpb24gdG8gdXBkYXRlIGEgd2VicGFnZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3dwLnBocFxuICovXG5jb25zdCB1cGRhdGVXcCA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cHVwZGF0ZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgdXJsOiB4LmVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICBuZXdfdGl0bGU6IHguZWxlbWVudHNbMl0udmFsdWUsXG4gICAgICAgIG5ld191cmw6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIG5ld19kZXNjcmlwdGlvbjogeC5lbGVtZW50c1s0XS52YWx1ZSxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9EVDE3M0dfcHJvamVjdC9BUEkvcmVzdF93cC5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIC8vZ2V0Q291cnNlcygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG5cbn1cbi8qKlxuICogZnVuY3Rpb24gdG8gQWRkIGFuIGV4cGVyaWVuY2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF94cC5waHBcbiAqL1xuY29uc3QgYWRkWHAgPSAoKSA9PiB7XG5cbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieHBBZGRcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgd29ya3BsYWNlOiB4LmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbjogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW5kX2RhdGU6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfeHAucGhwJywge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgLy9nZXRDb3Vyc2VzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfSlcblxufVxuLyoqXG4gKiBGdW5jdGlvbiB0byBhZGQgd2VicGFnZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3dwLnBocFxuICovXG5jb25zdCBhZGRXcCA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cEFkZFwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgdXJsOiB4LmVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9EVDE3M0dfcHJvamVjdC9BUEkvcmVzdF93cC5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIGZ1bmN0aW9uIHRvIHVwZGF0ZSBhIGNvdXJzZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X2NvdXJzZS5waHBcbiAqL1xuY29uc3QgdXBkYXRlQ291cnNlID0gKCkgPT4ge1xuXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZXVwZGF0ZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjb3Vyc2VfbmFtZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgdW5pdmVyc2l0eTogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgbmV3X2NvdXJzZV9uYW1lOiB4LmVsZW1lbnRzWzJdLnZhbHVlLFxuICAgICAgICBuZXdfdW5pdmVyc2l0eTogeC5lbGVtZW50c1szXS52YWx1ZSxcbiAgICAgICAgbmV3X3N0YXJ0X2RhdGU6IHguZWxlbWVudHNbNF0udmFsdWUsXG4gICAgICAgIG5ld19lbmRfZGF0ZTogeC5lbGVtZW50c1s1XS52YWx1ZSxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9EVDE3M0dfcHJvamVjdC9BUEkvcmVzdF9jb3Vyc2VzLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgLy9nZXRDb3Vyc2VzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfSlcblxufVxuLyoqXG4gKiBmdW5jdGlvbiB0byBhZGQgY291cnNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfY291cnNlcy5waHBcbiAqL1xuY29uc3QgYWRkQ291cnNlID0gKCkgPT4ge1xuXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUFkZFwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjb3Vyc2VfbmFtZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgdW5pdmVyc2l0eTogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW5kX2RhdGU6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfY291cnNlcy5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIGdldCBhbGwgd2VicGFnZXMgIGZyb20gdGhlIGRhdGFiYXNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIG90IHJlc3Rfd3AucGhwXG4gKi9cbmNvbnN0IGdldFdwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluSGVhZGVyXCIpO1xuICAgIGNvbnN0IHdwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpXG4gICAgd3BFbC5pbm5lckhUTUwgPSAnJzsgLyplbXB0eSB2YWx1ZSovXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9EVDE3M0dfcHJvamVjdC9BUEkvcmVzdF93cC5waHAnKSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm8gd2VicGFnZXMgZm91bmRcIikgeyAvL2NoZWNrIGlmIHRoaXMgaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHdwID0+IHtcbiAgICAgICAgICAgICAgICAvKiogcGFyc2UganNvbiBoZXJlICovXG4gICAgICAgICAgICAgICAgd3BFbC5pbm5lckhUTUwgKz1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvdXJzZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxiPldlYnBsYXRzZXI8L2I+XG4gICAgICAgICAgICAgICAgPGI+VGl0ZWw6PC9iPiAke3dwLnRpdGxlfVxuICAgICAgICAgICAgICAgIDxiPkJlc2tyaXZuaW5nOiA8L2I+ICR7d3AuZGVzY31cbiAgICAgICAgICAgICAgICA8Yj5VUkw6IDwvYj4gJHt3cC51cmx9XG4gICAgICAgICAgICAgICAgYCsgXCI8c3BhbiBvbkNsaWNrPSdkZWxldGVXcChcIiArICdcIicgKyBgJHt3cC50aXRsZX1gICsgJ1wiJyArIFwiLFwiICsgJ1wiJyArIGAke3dwLnVybH1gICsgJ1wiJyArIFwiKSc+IFRhIGJvcnQgPC9zcGFuPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L3A+PC9kaXY+XCJcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZCh3cEVsKVxuXG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gZ2V0IGFsbCBleHBlcmllbmNlcyBpbiBkYXRhYmFzZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3hwLnBocFxuICovXG5jb25zdCBnZXRYcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbkhlYWRlclwiKTtcbiAgICBjb25zdCB4cEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKVxuICAgIHhwRWwuaW5uZXJIVE1MID0gJyc7IC8qZW1wdHkgdmFsdWUqL1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfeHAucGhwJykgLyptYWtlIGZldGNoKi9cbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09PSBcIk5vIGV4cGVyaWVuY2UgZm91bmRcIikgeyAvL2NoZWNrIGlmIHRoaXMgaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHhwID0+IHtcbiAgICAgICAgICAgICAgICAvKiogcGFyc2UganNvbiBoZXJlICovXG4gICAgICAgICAgICAgICAgeHBFbC5pbm5lckhUTUwgKz1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvdXJzZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxiPkVyZmFyZW5oZXQ8L2I+XG4gICAgICAgICAgICAgICAgPGI+QXJiZXRzcGxhdHM6PC9iPiAke3hwLndvcmtfcGxhY2V9XG4gICAgICAgICAgICAgICAgPGI+UG9zaXRpb246IDwvYj4gJHt4cC5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICA8Yj5TdGFydCBkYXR1bTogPC9iPiAke3hwLnN0YXJ0X2RhdGV9XG4gICAgICAgICAgICAgICAgPGI+U2x1dCBkYXR1bTogPC9iPiAke3hwLmVuZF9kYXRlfVxuICAgICAgICAgICAgICAgIGArIFwiPHNwYW4gb25DbGljaz0nZGVsZXRlWHAoXCIgKyAnXCInICsgYCR7eHAud29ya19wbGFjZX1gICsgJ1wiJyArIFwiLFwiICsgJ1wiJyArIGAke3hwLnBvc2l0aW9ufWAgKyAnXCInICsgXCIpJz4gVGEgYm9ydCA8L3NwYW4+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvcD48L2Rpdj5cIlxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKHhwRWwpXG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gZ2V0IGFsbCBjb3Vyc2VzIGZyb20gZGF0YWJhc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9jb3Vyc2VzLnBocFxuICovXG5jb25zdCBnZXRDb3Vyc2VzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluSGVhZGVyXCIpO1xuICAgIGNvbnN0IGNvdXJzZXNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIilcbiAgICBjb3Vyc2VzRWwuaW5uZXJIVE1MID0gJyc7IC8qZW1wdHkgdmFsdWUqL1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfY291cnNlcy5waHAnKSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm8gY291cnNlcyBmb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goY291cnNlID0+IHtcbiAgICAgICAgICAgICAgICAvKiogcGFyc2UganNvbiBoZXJlICovXG4gICAgICAgICAgICAgICAgY291cnNlc0VsLmlubmVySFRNTCArPVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY291cnNlXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGI+S3VyczwvYj5cbiAgICAgICAgICAgICAgICA8Yj5Vbml2ZXJzaXRldDo8L2I+ICR7Y291cnNlLnVuaXZlcnNpdHl9XG4gICAgICAgICAgICAgICAgPGI+TmFtbjogPC9iPiAke2NvdXJzZS5jb3Vyc2VfbmFtZX1cbiAgICAgICAgICAgICAgICA8Yj5TdGFydCBkYXR1bTogPC9iPiAke2NvdXJzZS5zdGFydF9kYXRlfVxuICAgICAgICAgICAgICAgIDxiPlNsdXQgZGF0dW06IDwvYj4gJHtjb3Vyc2UuZW5kX2RhdGV9XG4gICAgICAgICAgICAgICAgYCsgXCI8c3BhbiBvbkNsaWNrPSdkZWxldGVDb3Vyc2UoXCIgKyAnXCInICsgYCR7Y291cnNlLnVuaXZlcnNpdHl9YCArICdcIicgKyBcIixcIiArICdcIicgKyBgJHtjb3Vyc2UuY291cnNlX25hbWV9YCArICdcIicgKyBcIiknPiBUYSBib3J0IDwvc3Bhbj5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9wPjwvZGl2PlwiXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoY291cnNlc0VsKVxuXG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gcmVuZGVyIGFkbWluIGZvcm0gaWYgdXNlciBpcyBhdXRob3JpeGVkXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfYXV0aG9ydXplZC5waHBcbiAqL1xuY29uc3Qgc2hvd0FkbWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfYXV0aG9yaXplZC5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pIC8qbWFrZSBmZXRjaCovXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBzaG93TG9naW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5NYWluXCIpO1xuICAgICAgICAgICAgICAgIG1haW5FbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG1haW5FbC5pbm5lckhUTUwgPSAnPGZvcm0gaWQ9XCJjb3Vyc2VBZGRcIiBvblN1Ym1pdCA9IFwiYWRkQ291cnNlKClcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJrdXJzbmFtZVwiPkt1cnNuYW1uOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwia3Vyc25hbW5cIiBpZD1cImt1cnNuYW1uXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidW5pdmVyc2l0eVwiPlVuaXZlcnNpdGV0OjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidW5pdmVyc2l0eVwiIGlkPVwidW5pXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPlN0YXJ0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydF9kYXRlXCIgaWQ9XCJzZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImVuZF9kYXRlXCI+U2x1dGRhdHVtOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZW5kX2RhdGVcIiBpZD1cImVkYXRlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mw6RnZyB0aWxsIGt1cnM8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZm9ybT4nICsgXCI8aHIvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgJzxmb3JtIGlkPVwieHBBZGRcIiAgb25TdWJtaXQgPSBcImFkZFhwKClcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ3b3JrcGxhY2VcIj5Xb3JrcGxhY2U6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3b3JrcGxhY2VcIiBpZD1cIndvcmtwbGFjZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJzdGFydF9kYXRlXCI+U3RhcnRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIiBpZD1cInNkYXRlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIj5TbHV0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiIGlkPVwiZWRhdGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkzDpGdnIHRpbGwgZXJmYXJlbmhldDwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9mb3JtPicgKyBcIjxoci8+XCIgK1xuICAgICAgICAgICAgICAgICAgICAnPGZvcm0gIGlkPVwid3BBZGRcIiAgb25TdWJtaXQgPSBcImFkZFdwKClcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cIndwVGl0bGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ1cmxcIj5Vcmw6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidXJsXCIgbmFtZT1cInVybFwiIGlkPVwidXJsXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiZGVzY1wiPkRlc2NyaXB0aW9uOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY1wiIGlkPVwiZGVzY1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TMOkZ2cgdGlsbCB3ZWJwYWdlPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Zvcm0+JyArIFwiPGhyLz5cIiArXG4gICAgICAgICAgICAgICAgICAgICc8Zm9ybSAgaWQ9XCJjb3Vyc2V1cGRhdGVcIiAgb25TdWJtaXQgPSBcInVwZGF0ZUNvdXJzZSgpXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwia3Vyc25hbWVcIj5LdXJzbmFtbjo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImt1cnNuYW1uXCIgaWQ9XCJrdXJzbmFtblwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInVuaXZlcnNpdHlcIj5Vbml2ZXJzaXRldDo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVuaXZlcnNpdHlcIiBpZD1cInVuaVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImt1cnNuYW1lXCI+bnl0dCBLdXJzbmFtbjo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImt1cnNuYW1uXCIgaWQ9XCJrdXJzbmFtblwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInVuaXZlcnNpdHlcIj5ueXR0IFVuaXZlcnNpdGV0OjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidW5pdmVyc2l0eVwiIGlkPVwidW5pXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPm55dHQgU3RhcnRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIiBpZD1cInNkYXRlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIj5ueXR0IFNsdXRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZF9kYXRlXCIgaWQ9XCJlZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlcmE8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZm9ybT4nICsgXCI8aHIvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgJzxmb3JtICBpZD1cInhwdXBkYXRlXCIgIG9uU3VibWl0ID0gXCJ1cGRhdGVYcCgpXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwid29ya3BsYWNlXCI+V29ya3BsYWNlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid29ya3BsYWNlXCIgaWQ9XCJ3b3JrcGxhY2VcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwid29ya3BsYWNlXCI+TnkgV29ya3BsYWNlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid29ya3BsYWNlXCIgaWQ9XCJ3b3JrcGxhY2VcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPk55IFRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPm55dHQgU3RhcnRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIiBpZD1cInNkYXRlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIj5ueXR0IFNsdXRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZF9kYXRlXCIgaWQ9XCJlZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlcmE8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZm9ybT4nICsgXCI8aHIvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgJzxmb3JtICBpZD1cIndwdXBkYXRlXCIgIG9uU3VibWl0ID0gXCJ1cGRhdGVXcCgpXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ3cFRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidXJsXCI+VXJsOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInVybFwiIG5hbWU9XCJ1cmxcIiBpZD1cInVybFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInRpdGxlXCI+bnkgVGl0bGU6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwid3BUaXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInVybFwiPm55IFVybDo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ1cmxcIiBuYW1lPVwidXJsXCIgaWQ9XCJ1cmxcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJkZXNjXCI+bnkgRGVzY3JpcHRpb246PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjXCIgaWQ9XCJkZXNjXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj51cGRhdGVyYTwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9mb3JtPidcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgZ2V0Q291cnNlcygpO1xuICAgIGdldFdwKCk7XG4gICAgZ2V0WHAoKTtcblxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHByZWZvcm0gYSBsb2dpbiBvZiB1c2VyXG4gKiBjYWxscyBmZXRjaCB3aXRoIHVybCByZXN0X2xvZ2luLnBocFxuICovXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pblBhc3NcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB4LmVsZW1lbnRzWzBdLnZhbHVlXG4gICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvRFQxNzNHX3Byb2plY3QvQVBJL3Jlc3RfbG9naW4ucGhwJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICB9KSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJMb2dpbiBva1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBZG1pbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl0sImZpbGUiOiJhZG1pbi5qcyJ9
