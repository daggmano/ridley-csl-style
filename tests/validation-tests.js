describe('Validation tests', function() {
    it('should pass validation', function() {
        // Validation provided by http://validator.citationstyles.org/
        // Note that this validates the uploaded latest CSL file in the master branch of the repo.
        // Ideally this should test the local file, but would be significantly more involved.
        // If anyone wishes to work on this, it would be appreciated.

        var url = 'http://validator.w3.org/nu/' +
            '?doc=https://raw.githubusercontent.com/daggmano/ridley-csl-style/master/ridley-sbl.csl' +
            '&schema=https://raw.githubusercontent.com/citation-style-language/schema/v1.0.1/csl.rnc https://raw.githubusercontent.com/citation-style-language/schema/master/csl.sch' +
            '&parser=xml&laxtype=yes&level=error&out=json&showsource=yes';
            
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, false);
        xhttp.overrideMimeType('application/json');
        xhttp.send();

        var json = xhttp.response;

        var response = JSON.parse(json);

        expect(response.url).toBe('https://raw.githubusercontent.com/daggmano/ridley-csl-style/master/ridley-sbl.csl')
        expect(response.messages.length).toBe(0);
    });
});
