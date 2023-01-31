let name = "";



document.getElementById('Name_button').onclick = () => {

    let nameField = document.getElementById('WebChatNameID');
    name = nameField.value;
    name = ('' + name.replace(/ +(?= )/g, '')).trim();

    if (name != "") {

        nameField.setAttribute("style", "margin-top:10px; border: 2px solid green;");
        nameField.value = name;

        ChangeNameButtonEnebility(nameField);

    }
    else {
        nameField.setAttribute("style", "margin-top:10px; border: 2px solid red;");
    }

}

function ChangeNameButtonEnebility(nameField) {

    let buttonName = document.getElementById('Name_button');
    let messageField = document.getElementById('WebChatTextID');
    let buttonMessage = document.getElementById('Chat_button');

    var d = buttonMessage.hasAttribute("disabled");

    if (!d) {
        buttonMessage.setAttribute("disabled", true);
        messageField.setAttribute("disabled", true);
        nameField.removeAttribute("disabled");
        buttonName.setAttribute("value", "Подтвердить имя");
    }
    else {
        buttonMessage.removeAttribute("disabled");
        messageField.removeAttribute("disabled");
        nameField.setAttribute("disabled", true);
        buttonName.setAttribute("value", "Изменить имя");
    }
}





setInterval(get, 2000)

$(document).ready(get());

function get() {
    var doc = document.getElementById("WebChatFormForm")
    var text = "";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "xml/XMLFile.xml", false);
    xmlhttp.send(null);
    xmlDoc = xmlhttp.responseXML;
    text = "<div id='content' data-role='listview' data-inset='true'>";

    try {
        var x = xmlDoc.getElementsByTagName("message");
        for (i = 0; i < x.length; i++) {
            text = text + "<p>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "[" +
                x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue + " ] " +
                x[i].getElementsByTagName("mess")[0].childNodes[0].nodeValue + "</p>";
        }
        text = text + "</div>";

    }
    catch { }
    doc.innerHTML = text;
}



function send() {

    let messageField = document.getElementById('WebChatTextID');
    let message = messageField.value;
    message = ('' + message.replace(/ +(?= )/g, '')).trim();
    if (message != '') {
        messageField.setAttribute("style", "max-width: 100%; max-height: 100px;width: 100%;margin-top:10px;display: block; border: 2px solid green;");
        messageField.value = "";

        let time = (new Date).toLocaleTimeString();

        writeXML(time, message);

    }
    else {
        messageField.setAttribute("style", "max-width: 100%; max-height: 100px;width: 100%;margin-top:10px;display: block; border: 2px solid red;");
    }
}



function writeXML( time, message1) {
    xmlhttp = new XMLHttpRequest();


    
    var message = new FormData();
    message.append('name', name);
    message.append('time', time);
    message.append('mess', message1);


    xmlhttp.open("POST", 'xml/XMLFile.xml');

    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //xmlhttp.onreadystatechange = function () {
       
    //        console.log(this.responseText)
        
    //}
    
    xmlhttp.send(message);
    xmlhttp.onload = () => console.log(xmlhttp.response);
}
