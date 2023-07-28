const activity = document.getElementById("text-line");
const type = document.getElementById("sub-text");
const reloadBtn = document.getElementById("reloadBtn");

reloadBtn.addEventListener("click", function () {
    location.reload();
});

// deal with the api
let request = new XMLHttpRequest();
request.open("GET","https://www.boredapi.com/api/activity");
request.send();

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200){
        let jsObject = JSON.parse(this.responseText);
        let activityText = document.createTextNode(jsObject.activity);
        let typeText = document.createTextNode(jsObject.type);
        activity.appendChild(activityText);
        type.appendChild(typeText);
        
    }
}