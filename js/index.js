let userid = 123;
let message = `hello user id ${userid}`;
console.log(message);

const pageLoad = () => {
    console.log('page completely loaded')
    let dropdown = document.getElementById("usernameInput")

    const request = new XMLHttpRequest();
    request.addEventListener('load', onLoad)
    request.open('GET', 'http://localhost:8081/users'); // TODO: enable global cors in server
    request.send();
    function onLoad() {
        const res = JSON.parse(request.response);
        console.log(res);

        for (let i = 0; i < res.length; i++) {
            dropdown.innerHTML += "<option value=\"" + res[i].id + "\">" + res[i].name + "</option>"

        }

    }

    dropdown.addEventListener('change', function (event) {
        if(dropdown.value == 'adduser') {
            console.log('adding user');
        }
    });


    let click = document.getElementById("button1");
    click.addEventListener('click', myFunction )
    function myFunction (){

        const request = new XMLHttpRequest();
        request.addEventListener('load' , onload)
        request.open('GET', 'http://localhost:8081/costs?userId=' + dropdown.value); // TODO: enable global cors in server
        request.send();
        function onload (){
            const res = JSON.parse(request.response);
            console.log(res);
        }   
        
        
    }
   

    // TODO: console.log when the user selects "add user" from the dropdown
    // TODO: when a user is selected and show costs is clicked, make an api call to get the costs and console.log the result

}
window.addEventListener('load', pageLoad);
