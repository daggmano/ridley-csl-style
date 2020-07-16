describe('Reported Tests', function() {

    const ibidWithLocator = 1;
    const ibid = 2;

    describe('Missing page number #3', function() {
        it('should always display locator for ibid', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'childs',
                label: 'page',
                locator: '57',
                position: ibid
            };

            citeproc.updateItems([]);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Childs, <i>Isaiah</i>, 57.');
        });
    });

    describe('Extraneous full stop #5', function() {
        it('should remove extra full stops between citations', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItems = [{
                id: 'motyer',
                label: 'page'
            }, {
                id: 'porter',
                label: 'page'
            }];

            citeproc.updateItems(['motyer', 'porter']);

            const result = citeproc.makeCitationCluster(citationItems);
            expect(result).toBe('J. Alec Motyer, <i>The Prophecy of Isaiah: An Introduction &#38; Commentary</i> (Downers Grove: InterVarsity, 1993); Stanley E. Porter, ed., <i>The Messiah in the Old and New Testaments</i>, McMaster New Testament Studies (Grand Rapids: Eerdmans, 2007).');
        });
    });

    describe('Magazine citations', function() {
        it('should produce correct footnote', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'krupp',
                label: 'page'
            };

            citeproc.updateItems([]);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Robert A. Krupp, ‘Golden Tongue &#38; Iron Will’, <i>Christian History</i> 44 (1994).')
        });

        it('should produce correct bibliography', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['krupp']);

            const result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Krupp, Robert A. ‘Golden Tongue &#38; Iron Will’. <i>Christian History</i> 44 (1994).</div>');
        });
    });
});
