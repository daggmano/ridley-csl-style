function getSys() {

    var sys = {};

    var citationItems = loadJson('./citations.json');
    
    sys.retrieveLocale = function (locale) {
        return loadXml('./locales/locales-' + locale + '.xml');
    };

    sys.retrieveItem = function (item_id) {
        return citationItems[item_id];
    };

    return sys;
}
