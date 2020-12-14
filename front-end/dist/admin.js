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
            location.reload
        })

        .then(data => {

            location.reload();


        })
        .catch(error => {
            console.log('Error: ', error);
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
        })
        .catch(error => {
            console.log('Error: ', error);
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
        .then(response => {
            response.json()
            location.reload
        })
        .then(data => {
            location.reload();
        })
        .catch(error => {
            console.log('Error: ', error);
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php', {
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
            location.reload();
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_xp.php', {
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
            location.reload();
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php', {
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
            location.reload();
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php', {
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
            location.reload();
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php', {
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
            location.reload();
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_wp.php') /*make fetch*/
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_xp.php') /*make fetch*/
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
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_courses.php') /*make fetch*/
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
    const headerEl = document.getElementById("adminHeader");
    headerEl.innerHTML = "";
    getCourses();
    getWp();
    getXp();
    const data = {
        email: "cristina.lofqvist@gmail.com"
    }
    fetch('https://willbur.nu/DT173G_PROJECT/API/rest_authorized.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) /*make fetch*/
        .then(response => {
            if (!response.ok) {
                showLogin();
            } else {
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
                    '</form>'
            }
        }).then((data) => {
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKkZ1bmN0aW9uIHRvIHNob3cgbG9naW4gZm9ybSovXG5jb25zdCBzaG93TG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbk1haW5cIik7XG4gICAgbWFpbkVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbkVsLmlubmVySFRNTCA9ICc8Zm9ybSBpZD1cImFkbWluUGFzc1wiICBvblN1Ym1pdCA9IFwibG9naW4oKVwiPicgK1xuICAgICAgICAnPGxhYmVsPiBMw7ZzZW4gOiA8L2xhYmVsID4nICtcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkzDtnNlblwiIG5hbWU9XCJwYXNzd29yZFwiIHJlcXVpcmVkPicgK1xuICAgICAgICAnPGJ1dHRvbiBvbmNsaWNrID0gXCJsb2dpbigpXCIgdHlwZT1cImJ1dHRvblwiPkxvZ2luPC9idXR0b24+JyArXG4gICAgICAgICc8L2Zvcm0+J1xufVxuLyoqXG4gKiBmdW5jdGlvbiB0byBkZWxldGUgb25lIHNsZWN0ZWQgY291cnNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfY291cnNlcy5waHAgXG4gKiBAcGFyYW0geyp9IHVuaSBcbiAqIEBwYXJhbSB7Kn0gbmFtZSBcbiAqL1xuY29uc3QgZGVsZXRlQ291cnNlID0gKHVuaSwgbmFtZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmc6IFwiICsgdW5pICsgXCIgXCIgKyBuYW1lKTtcbiAgICAvKm1ha2UgZmV0Y2ggZGVsZXRlKi9cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1bml2ZXJzaXR5OiB1bmksXG4gICAgICAgIGNvdXJzZV9uYW1lOiBuYW1lLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X2NvdXJzZXMucGhwJywge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG5cbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9KVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGRlbGV0ZSB4cFxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3hwLnBocFxuICogQHBhcmFtIHsqfSB3b3JrcGxhY2UgXG4gKiBAcGFyYW0geyp9IHBvc2l0aW9uIFxuICovXG5jb25zdCBkZWxldGVYcCA9ICh3b3JrcGxhY2UsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZzogXCIgKyB3b3JrcGxhY2UgKyBcIiBcIiArIHBvc2l0aW9uKTtcbiAgICAvKm1ha2UgZmV0Y2ggZGVsZXRlKi9cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB3b3JrcGxhY2U6IHdvcmtwbGFjZSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X3hwLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG5cbn1cbi8qKlxuICogRnVuY3Rpb24gdG8gZGVsZXRlIHdlYnBhZ2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF93cC5waHBcbiAqIEBwYXJhbSB7Kn0gdGl0bGUgXG4gKiBAcGFyYW0geyp9IHVybCBcbiAqL1xuY29uc3QgZGVsZXRlV3AgPSAodGl0bGUsIHVybCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmc6IFwiICsgdGl0bGUgKyBcIiBcIiArIHVybCk7XG4gICAgLyptYWtlIGZldGNoIGRlbGV0ZSovXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZW1haWw6IFwiY3Jpc3RpbmEubG9mcXZpc3RAZ21haWwuY29tXCJcbiAgICB9XG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF93cC5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWRcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBhbiBleHBlcmllbmNlIFxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X3hwLnBocFxuICovXG5jb25zdCB1cGRhdGVYcCA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4cHVwZGF0ZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB3b3JrcGxhY2U6IHguZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgIHBvc2l0aW9uOiB4LmVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICBuZXdfcG9zaXRpb246IHguZWxlbWVudHNbMl0udmFsdWUsXG4gICAgICAgIG5ld193b3JrcGxhY2U6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIG5ld19zdGFydF9kYXRlOiB4LmVsZW1lbnRzWzRdLnZhbHVlLFxuICAgICAgICBuZXdfZW5kX2RhdGU6IHguZWxlbWVudHNbNV0udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfeHAucGhwJywge1xuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBhIHdlYnBhZ2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF93cC5waHBcbiAqL1xuY29uc3QgdXBkYXRlV3AgPSAoKSA9PiB7XG5cbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3B1cGRhdGVcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHguZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgIHVybDogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgbmV3X3RpdGxlOiB4LmVsZW1lbnRzWzJdLnZhbHVlLFxuICAgICAgICBuZXdfdXJsOiB4LmVsZW1lbnRzWzNdLnZhbHVlLFxuICAgICAgICBuZXdfZGVzY3JpcHRpb246IHguZWxlbWVudHNbNF0udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3Rfd3AucGhwJywge1xuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG5cbn1cbi8qKlxuICogZnVuY3Rpb24gdG8gQWRkIGFuIGV4cGVyaWVuY2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF94cC5waHBcbiAqL1xuY29uc3QgYWRkWHAgPSAoKSA9PiB7XG5cbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieHBBZGRcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgd29ya3BsYWNlOiB4LmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbjogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW5kX2RhdGU6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfeHAucGhwJywge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgLy9nZXRDb3Vyc2VzKCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9KVxuXG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIGFkZCB3ZWJwYWdlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3Rfd3AucGhwXG4gKi9cbmNvbnN0IGFkZFdwID0gKCkgPT4ge1xuXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndwQWRkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB4LmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICB1cmw6IHguZWxlbWVudHNbMV0udmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB4LmVsZW1lbnRzWzJdLnZhbHVlLFxuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X3dwLnBocCcsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIC8vZ2V0Q291cnNlcygpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfSlcblxufVxuLyoqXG4gKiBmdW5jdGlvbiB0byB1cGRhdGUgYSBjb3Vyc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9jb3Vyc2UucGhwXG4gKi9cbmNvbnN0IHVwZGF0ZUNvdXJzZSA9ICgpID0+IHtcblxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2V1cGRhdGVcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY291cnNlX25hbWU6IHguZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgIHVuaXZlcnNpdHk6IHguZWxlbWVudHNbMV0udmFsdWUsXG4gICAgICAgIG5ld19jb3Vyc2VfbmFtZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgbmV3X3VuaXZlcnNpdHk6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIG5ld19zdGFydF9kYXRlOiB4LmVsZW1lbnRzWzRdLnZhbHVlLFxuICAgICAgICBuZXdfZW5kX2RhdGU6IHguZWxlbWVudHNbNV0udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfY291cnNlcy5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIC8vZ2V0Q291cnNlcygpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfSlcblxufVxuLyoqXG4gKiBmdW5jdGlvbiB0byBhZGQgY291cnNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfY291cnNlcy5waHBcbiAqL1xuY29uc3QgYWRkQ291cnNlID0gKCkgPT4ge1xuXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUFkZFwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjb3Vyc2VfbmFtZTogeC5lbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgdW5pdmVyc2l0eTogeC5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogeC5lbGVtZW50c1syXS52YWx1ZSxcbiAgICAgICAgZW5kX2RhdGU6IHguZWxlbWVudHNbM10udmFsdWUsXG4gICAgICAgIGVtYWlsOiBcImNyaXN0aW5hLmxvZnF2aXN0QGdtYWlsLmNvbVwiXG4gICAgfVxuICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfY291cnNlcy5waHAnLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvL2dldENvdXJzZXMoKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pXG5cbn1cbi8qKlxuICogRnVuY3Rpb24gdG8gZ2V0IGFsbCB3ZWJwYWdlcyAgZnJvbSB0aGUgZGF0YWJhc2VcbiAqIG1ha2VzIGZldGNoIGNhbGwgb3QgcmVzdF93cC5waHBcbiAqL1xuY29uc3QgZ2V0V3AgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5IZWFkZXJcIik7XG4gICAgY29uc3Qgd3BFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIilcbiAgICB3cEVsLmlubmVySFRNTCA9ICcnOyAvKmVtcHR5IHZhbHVlKi9cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X3dwLnBocCcpIC8qbWFrZSBmZXRjaCovXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJObyB3ZWJwYWdlcyBmb3VuZFwiKSB7IC8vY2hlY2sgaWYgdGhpcyBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmZvckVhY2god3AgPT4ge1xuICAgICAgICAgICAgICAgIC8qKiBwYXJzZSBqc29uIGhlcmUgKi9cbiAgICAgICAgICAgICAgICB3cEVsLmlubmVySFRNTCArPVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY291cnNlXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGI+V2VicGxhdHNlcjwvYj5cbiAgICAgICAgICAgICAgICA8Yj5UaXRlbDo8L2I+ICR7d3AudGl0bGV9XG4gICAgICAgICAgICAgICAgPGI+QmVza3Jpdm5pbmc6IDwvYj4gJHt3cC5kZXNjfVxuICAgICAgICAgICAgICAgIDxiPlVSTDogPC9iPiAke3dwLnVybH1cbiAgICAgICAgICAgICAgICBgKyBcIjxzcGFuIG9uQ2xpY2s9J2RlbGV0ZVdwKFwiICsgJ1wiJyArIGAke3dwLnRpdGxlfWAgKyAnXCInICsgXCIsXCIgKyAnXCInICsgYCR7d3AudXJsfWAgKyAnXCInICsgXCIpJz4gVGEgYm9ydCA8L3NwYW4+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvcD48L2Rpdj5cIlxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKHdwRWwpXG5cbn1cblxuLyoqXG4gKiBmdW5jdGlvbiB0byBnZXQgYWxsIGV4cGVyaWVuY2VzIGluIGRhdGFiYXNlXG4gKiBtYWtlcyBmZXRjaCBjYWxsIHRvIHJlc3RfeHAucGhwXG4gKi9cbmNvbnN0IGdldFhwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluSGVhZGVyXCIpO1xuICAgIGNvbnN0IHhwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpXG4gICAgeHBFbC5pbm5lckhUTUwgPSAnJzsgLyplbXB0eSB2YWx1ZSovXG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF94cC5waHAnKSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm8gZXhwZXJpZW5jZSBmb3VuZFwiKSB7IC8vY2hlY2sgaWYgdGhpcyBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goeHAgPT4ge1xuICAgICAgICAgICAgICAgIC8qKiBwYXJzZSBqc29uIGhlcmUgKi9cbiAgICAgICAgICAgICAgICB4cEVsLmlubmVySFRNTCArPVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY291cnNlXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGI+RXJmYXJlbmhldDwvYj5cbiAgICAgICAgICAgICAgICA8Yj5BcmJldHNwbGF0czo8L2I+ICR7eHAud29ya19wbGFjZX1cbiAgICAgICAgICAgICAgICA8Yj5Qb3NpdGlvbjogPC9iPiAke3hwLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIDxiPlN0YXJ0IGRhdHVtOiA8L2I+ICR7eHAuc3RhcnRfZGF0ZX1cbiAgICAgICAgICAgICAgICA8Yj5TbHV0IGRhdHVtOiA8L2I+ICR7eHAuZW5kX2RhdGV9XG4gICAgICAgICAgICAgICAgYCsgXCI8c3BhbiBvbkNsaWNrPSdkZWxldGVYcChcIiArICdcIicgKyBgJHt4cC53b3JrX3BsYWNlfWAgKyAnXCInICsgXCIsXCIgKyAnXCInICsgYCR7eHAucG9zaXRpb259YCArICdcIicgKyBcIiknPiBUYSBib3J0IDwvc3Bhbj5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9wPjwvZGl2PlwiXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoeHBFbClcbn1cblxuLyoqXG4gKiBmdW5jdGlvbiB0byBnZXQgYWxsIGNvdXJzZXMgZnJvbSBkYXRhYmFzZVxuICogbWFrZXMgZmV0Y2ggY2FsbCB0byByZXN0X2NvdXJzZXMucGhwXG4gKi9cbmNvbnN0IGdldENvdXJzZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5IZWFkZXJcIik7XG4gICAgY29uc3QgY291cnNlc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKVxuICAgIGNvdXJzZXNFbC5pbm5lckhUTUwgPSAnJzsgLyplbXB0eSB2YWx1ZSovXG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsbGJ1ci5udS9EVDE3M0dfUFJPSkVDVC9BUEkvcmVzdF9jb3Vyc2VzLnBocCcpIC8qbWFrZSBmZXRjaCovXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJObyBjb3Vyc2VzIGZvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChjb3Vyc2UgPT4ge1xuICAgICAgICAgICAgICAgIC8qKiBwYXJzZSBqc29uIGhlcmUgKi9cbiAgICAgICAgICAgICAgICBjb3Vyc2VzRWwuaW5uZXJIVE1MICs9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb3Vyc2VcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8Yj5LdXJzPC9iPlxuICAgICAgICAgICAgICAgIDxiPlVuaXZlcnNpdGV0OjwvYj4gJHtjb3Vyc2UudW5pdmVyc2l0eX1cbiAgICAgICAgICAgICAgICA8Yj5OYW1uOiA8L2I+ICR7Y291cnNlLmNvdXJzZV9uYW1lfVxuICAgICAgICAgICAgICAgIDxiPlN0YXJ0IGRhdHVtOiA8L2I+ICR7Y291cnNlLnN0YXJ0X2RhdGV9XG4gICAgICAgICAgICAgICAgPGI+U2x1dCBkYXR1bTogPC9iPiAke2NvdXJzZS5lbmRfZGF0ZX1cbiAgICAgICAgICAgICAgICBgKyBcIjxzcGFuIG9uQ2xpY2s9J2RlbGV0ZUNvdXJzZShcIiArICdcIicgKyBgJHtjb3Vyc2UudW5pdmVyc2l0eX1gICsgJ1wiJyArIFwiLFwiICsgJ1wiJyArIGAke2NvdXJzZS5jb3Vyc2VfbmFtZX1gICsgJ1wiJyArIFwiKSc+IFRhIGJvcnQgPC9zcGFuPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L3A+PC9kaXY+XCJcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChjb3Vyc2VzRWwpXG5cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byByZW5kZXIgYWRtaW4gZm9ybSBpZiB1c2VyIGlzIGF1dGhvcml4ZWRcbiAqIG1ha2VzIGZldGNoIGNhbGwgdG8gcmVzdF9hdXRob3J1emVkLnBocFxuICovXG5jb25zdCBzaG93QWRtaW4gPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluSGVhZGVyXCIpO1xuICAgIGhlYWRlckVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZ2V0Q291cnNlcygpO1xuICAgIGdldFdwKCk7XG4gICAgZ2V0WHAoKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIlxuICAgIH1cbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxsYnVyLm51L0RUMTczR19QUk9KRUNUL0FQSS9yZXN0X2F1dGhvcml6ZWQucGhwJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgc2hvd0xvZ2luKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5NYWluXCIpO1xuICAgICAgICAgICAgICAgIG1haW5FbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG1haW5FbC5pbm5lckhUTUwgPSAnPGZvcm0gaWQ9XCJjb3Vyc2VBZGRcIiA+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwia3Vyc25hbWVcIj5LdXJzbmFtbjo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImt1cnNuYW1uXCIgaWQ9XCJrdXJzbmFtblwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInVuaXZlcnNpdHlcIj5Vbml2ZXJzaXRldDo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVuaXZlcnNpdHlcIiBpZD1cInVuaVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInN0YXJ0X2RhdGVcIj5TdGFydGRhdHVtOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwic3RhcnRfZGF0ZVwiIGlkPVwic2RhdGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiPlNsdXRkYXR1bTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZF9kYXRlXCIgaWQ9XCJlZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBvbmNsaWNrID0gXCJhZGRDb3Vyc2UoKVwiPkzDpGdnIHRpbGwga3VyczwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9mb3JtPicgKyBcIjxoci8+XCIgK1xuICAgICAgICAgICAgICAgICAgICAnPGZvcm0gaWQ9XCJ4cEFkZFwiICA+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwid29ya3BsYWNlXCI+V29ya3BsYWNlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid29ya3BsYWNlXCIgaWQ9XCJ3b3JrcGxhY2VcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiPlN0YXJ0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydF9kYXRlXCIgaWQ9XCJzZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImVuZF9kYXRlXCI+U2x1dGRhdHVtOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZW5kX2RhdGVcIiBpZD1cImVkYXRlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIG9uY2xpY2sgPSBcImFkZFhwKClcIj5Mw6RnZyB0aWxsIGVyZmFyZW5oZXQ8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZm9ybT4nICsgXCI8aHIvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgJzxmb3JtICBpZD1cIndwQWRkXCIgID4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cIndwVGl0bGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ1cmxcIj5Vcmw6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidXJsXCIgbmFtZT1cInVybFwiIGlkPVwidXJsXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiZGVzY1wiPkRlc2NyaXB0aW9uOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY1wiIGlkPVwiZGVzY1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBvbmNsaWNrID0gXCJhZGRXcCgpXCI+TMOkZ2cgdGlsbCB3ZWJwYWdlPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Zvcm0+JyArIFwiPGhyLz5cIiArXG4gICAgICAgICAgICAgICAgICAgICc8Zm9ybSAgaWQ9XCJjb3Vyc2V1cGRhdGVcIiAgPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImt1cnNuYW1lXCI+S3Vyc25hbW46PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJrdXJzbmFtblwiIGlkPVwia3Vyc25hbW5cIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ1bml2ZXJzaXR5XCI+VW5pdmVyc2l0ZXQ6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1bml2ZXJzaXR5XCIgaWQ9XCJ1bmlcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJrdXJzbmFtZVwiPm55dHQgS3Vyc25hbW46PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJrdXJzbmFtblwiIGlkPVwia3Vyc25hbW5cIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJ1bml2ZXJzaXR5XCI+bnl0dCBVbml2ZXJzaXRldDo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVuaXZlcnNpdHlcIiBpZD1cInVuaVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInN0YXJ0X2RhdGVcIj5ueXR0IFN0YXJ0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydF9kYXRlXCIgaWQ9XCJzZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImVuZF9kYXRlXCI+bnl0dCBTbHV0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiIGlkPVwiZWRhdGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gb25jbGljayA9IFwidXBkYXRlQ291cnNlKClcIj5VcGRhdGVyYTwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9mb3JtPicgKyBcIjxoci8+XCIgK1xuICAgICAgICAgICAgICAgICAgICAnPGZvcm0gIGlkPVwieHB1cGRhdGVcIiAgPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cIndvcmtwbGFjZVwiPldvcmtwbGFjZTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndvcmtwbGFjZVwiIGlkPVwid29ya3BsYWNlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cIndvcmtwbGFjZVwiPk55IFdvcmtwbGFjZTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndvcmtwbGFjZVwiIGlkPVwid29ya3BsYWNlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidGl0bGVcIj5OeSBUaXRsZTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInN0YXJ0X2RhdGVcIj5ueXR0IFN0YXJ0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydF9kYXRlXCIgaWQ9XCJzZGF0ZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImVuZF9kYXRlXCI+bnl0dCBTbHV0ZGF0dW06PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiIGlkPVwiZWRhdGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gb25jbGljayA9IFwidXBkYXRlWHAoKVwiPlVwZGF0ZXJhPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Zvcm0+JyArIFwiPGhyLz5cIiArXG4gICAgICAgICAgICAgICAgICAgICc8Zm9ybSAgaWQ9XCJ3cHVwZGF0ZVwiICA+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ3cFRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwidXJsXCI+VXJsOjwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInVybFwiIG5hbWU9XCJ1cmxcIiBpZD1cInVybFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInRpdGxlXCI+bnkgVGl0bGU6PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwid3BUaXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInVybFwiPm55IFVybDo8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ1cmxcIiBuYW1lPVwidXJsXCIgaWQ9XCJ1cmxcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJkZXNjXCI+bnkgRGVzY3JpcHRpb246PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjXCIgaWQ9XCJkZXNjXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIG9uY2xpY2sgPSBcInVwZGF0ZVdwKClcIj51cGRhdGVyYTwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9mb3JtPidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuICAgICAgICB9KTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBwcmVmb3JtIGEgbG9naW4gb2YgdXNlclxuICogY2FsbHMgZmV0Y2ggd2l0aCB1cmwgcmVzdF9sb2dpbi5waHBcbiAqL1xuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5QYXNzXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0geC5lbGVtZW50c1swXS52YWx1ZVxuXG4gICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBlbWFpbDogXCJjcmlzdGluYS5sb2ZxdmlzdEBnbWFpbC5jb21cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIGZldGNoKCdodHRwczovL3dpbGxidXIubnUvRFQxNzNHX1BST0pFQ1QvQVBJL3Jlc3RfbG9naW4ucGhwJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSAvKm1ha2UgZmV0Y2gqL1xuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJMb2dpbiBva1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBZG1pbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl0sImZpbGUiOiJhZG1pbi5qcyJ9
