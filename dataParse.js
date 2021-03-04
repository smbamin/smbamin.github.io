
fetch('patient.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < 4; i++) {
        var div = document.createElement("div");
        if (i == 0) {
            div.innerHTML = 'Name: ' + data.name.given + ' ' + data.name.family;
            mainContainer.appendChild(div);
        } else if (i == 1) {
            div.innerHTML = 'Organization name: ' + data.managingOrganization.display;
            mainContainer.appendChild(div);
        }
        else if (i == 2) {
            div.innerHTML = 'Gender: ' + data.gender;
            mainContainer.appendChild(div);
        }
        else if (i == 3) {
            var count = data.conditions.length;
            div.innerHTML = 'Number of conditions they have: ' + count;
            mainContainer.appendChild(div);
            div = document.createElement("div");
            div.innerHTML = "List of all conditions:"
            mainContainer.appendChild(div);
            for (var i = 0; i < count; i++) {
                div = document.createElement("div");
                div.innerHTML = "-" + data.conditions[i];
                mainContainer.appendChild(div);
            }
        }
    }
}
