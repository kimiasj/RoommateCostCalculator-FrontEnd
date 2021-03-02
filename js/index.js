let userid = 123;
let message = `hello user id ${userid}`;
console.log(message);

const pageLoad = () => {
    console.log('page completely loaded')

    const myFunction = () => {
        const request = new XMLHttpRequest();
        request.addEventListener('load', onLoad)
        request.open('GET', 'http://localhost:8081/users'); // TODO: enable global cors in server
        request.send();
        function onLoad() {
            const res = JSON.parse(request.response);
            console.log(res);
            let dropdown = document.getElementById("usernameInput")
            for (let i = 0; i < dropdown.length; i++) {
                dropdown.innerHTML += "<option value=\"" + res[i].id + "\">" + res[i].name + "</option>"
            
            }
            
            // TODO: show users in dropdown, put user Ids in "value"
            // TODO: add an option for "add user"
        }
    }
    myFunction();
    
    

    // TODO: console.log when the user selects "add user" from the dropdown
    // TODO: when a user is selected and show costs is clicked, make an api call to get the costs and console.log the result

}
window.addEventListener('load', pageLoad);
