var ibidWithLocator = 1;
var ibid = 2;

describe('Reported Tests', function() {
    describe('Missing page number #3', function() {
        it('should always display locator for ibid', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'childs',
                label: 'page',
                locator: '57',
                position: ibid
            };

            citeproc.updateItems([]);

            var result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Childs, <i>Isaiah</i>, 57.');
        });
    });

    describe('Extraneous full stop #5', function() {
        it('should remove extra full stops between citations', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItems = [{
                id: 'motyer',
                label: 'page'
            }, {
                id: 'porter',
                label: 'page'
            }];

            citeproc.updateItems(['motyer', 'porter']);

            var result = citeproc.makeCitationCluster(citationItems);
            expect(result).toBe('J. Alec Motyer, <i>The Prophecy of Isaiah: An Introduction &#38; Commentary</i> (Downers Grove: InterVarsity, 1993); Stanley E. Porter, ed., <i>The Messiah in the Old and New Testaments</i>, McMaster New Testament Studies (Grand Rapids: Eerdmans, 2007).');
        });
    });

    describe('Magazine citations', function() {
        it('should produce correct footnote', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'krupp',
                label: 'page'
            };

            citeproc.updateItems([]);

            var result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Robert A. Krupp, ‘Golden Tongue &#38; Iron Will’, <i>Christian History</i> 44 (1994).')
        });

        it('should produce correct bibliography', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['krupp']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Krupp, Robert A. ‘Golden Tongue &#38; Iron Will’. <i>Christian History</i> 44 (1994).</div>');
        });
    });
});
