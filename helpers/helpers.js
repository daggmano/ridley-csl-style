const module = {};

function loadXml(url) {
    const xHttp = new XMLHttpRequest();
    xHttp.open('GET', url, false);
    xHttp.overrideMimeType('application/xml');
    xHttp.send();

    const xml = xHttp.responseXML;
    return xml.documentElement;
}

function loadJson(url) {
    const xHttp = new XMLHttpRequest();
    xHttp.open('GET', url, false);
    xHttp.overrideMimeType('application/json');
    xHttp.send();

    const json = xHttp.response;
    return JSON.parse(json);
}
