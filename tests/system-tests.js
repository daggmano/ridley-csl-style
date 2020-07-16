describe('System tests', function() {
    it('expects getSys to be valid', function() {
        expect(getSys().retrieveLocale).toBeDefined();
    });

    it('expects CSL to be defined', function() {
        expect(CSL).toBeDefined();
    });

    it('expects CSL.Engine to be defined', function() {
        expect(CSL.Engine).toBeDefined();
    });

    it('expects to be able to create a CSL instance', function() {
        const style = loadXml('./ridley-sbl.csl');
        const citeproc = new CSL.Engine(getSys(), style);

        expect(citeproc).toBeDefined();
    });
});
