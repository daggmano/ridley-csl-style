var module = {};

function loadXml(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, false);
    xhttp.overrideMimeType('application/xml');
    xhttp.send();

    var xml = xhttp.responseXML;
    return xml.documentElement;
}

function loadJson(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, false);
    xhttp.overrideMimeType('application/json');
    xhttp.send();

    var json = xhttp.response;
    return JSON.parse(json);
}
