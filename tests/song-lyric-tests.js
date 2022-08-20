describe('Song Lyric tests', function() {

    const ibidWithLocator = 1;
    const ibid = 2;

    it('should correctly cite a song', function() {
        const style = loadXml('./ridley-sbl.csl');
        const citeproc = new CSL.Engine(getSys(), style);

        const citationItem = {
            id: 'chisholm'
        };

        citeproc.updateItems(['chisholm']);

        const result = citeproc.makeCitationCluster([citationItem]);
        expect(result).toBe('Thomas O. Chisholm, <i>Great Is Thy Faithfulness</i>, 1923.');
    });
});
