var ibidWithLocator = 1;
var ibid = 2;

describe('Citation tests', function() {
    describe('2017 Student Manual tests', function() {
        it('cites a book', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'wright',
                locator: '199-201',
                label: 'page'
            };
        
            citeproc.updateItems(['wright']);

            var result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Christopher J. H. Wright, <i>The Mission of God: Unlocking the Bible’s Grand Narrative</i> (Nottingham: Inter-Varsity Press, 2006), 199–201.');
        });

        it('cites a book - short style', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'wright',
                locator: '200',
                label: 'page',
                position: ibidWithLocator
            };
        
            citeproc.updateItems(['wright']);

            var result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Wright, <i>Mission of God</i>, 200.');
        });

        it('cites an essay in an edited book', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'hurtado',
                locator: '15-17',
                label: 'page'
            };
        
            citeproc.updateItems(['hurtado']);

            var result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Larry W. Hurtado, ‘Following Jesus in the Gospel of Mark — And Beyond’, in <i>Patterns of Discipleship in the New Testament</i>, ed. Richard N. Longenecker (Grand Rapids: Eerdmans, 1996), 15–17.');
        });

        it('cites an essay in an edited book - short style', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'hurtado',
                locator: '19-21',
                label: 'page',
                position: ibidWithLocator
            };
        
            citeproc.updateItems(['hurtado']);

            var result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Hurtado, ‘Following Jesus’, 19–21.');
        });

        it('cites a journal article', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'hamilton',
                locator: '29-32',
                label: 'page'
            };
        
            citeproc.updateItems(['hamilton']);

            var result = citeproc.makeCitationCluster([citationItem]);

            // Note: the citation and expected result differ from that given in the Ridley Student Manual 2017 as Zotero is unable to handle 'Jr.' suffixes for names.
            expect(result).toBe('James M. Hamilton, ‘Rushing Wind and Organ Music: Toward Luke’s Theology of the Spirit in Acts’, <i>RTR</i> 65 (2006): 29–32.');
        });

        it('cites a journal article - short style', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'hamilton',
                locator: '17',
                label: 'page',
                position: ibidWithLocator
            };
        
            citeproc.updateItems(['hamilton']);

            var result = citeproc.makeCitationCluster([citationItem]);

            // Note: the citation and expected result differ from that given in the Ridley Student Manual 2017 as Zotero is unable to handle 'Jr.' suffixes for names.
            expect(result).toBe('Hamilton, ‘Rushing Wind’, 17.');
        });

        it('cites a dictionary or lexicon article', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'bird',
                locator: '116-118',
                label: 'page'
            };
        
            citeproc.updateItems(['bird']);

            var result = citeproc.makeCitationCluster([citationItem]);

            // Note: As Zotero does not have a shortContainerTitle field for dictionary entries, the short container name is placed in the Note field (appears as Extra in Zotero)
            expect(result).toBe('Michael F. Bird, ‘Christ’, <i>DJG</i> 116–118.');
        });

        it('cites a dictionary or lexicon article - short style', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'bird',
                locator: '123',
                label: 'page',
                position: ibidWithLocator
            };
        
            citeproc.updateItems(['bird']);

            var result = citeproc.makeCitationCluster([citationItem]);

            // Note: As Zotero does not have a shortContainerTitle field for dictionary entries, the short container name is placed in the Note field (appears as Extra in Zotero)
            expect(result).toBe('Bird, ‘Christ’, 123.');
        });
    });

    describe('Specific examples', function() {
        it('cites from A New Eusebius as expected - includes literal name', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'clement',
                locator: '8',
                label: 'page'
            };
        
            citeproc.updateItems(['clement']);

            var result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Clement of Rome, ‘First Epistle to the Corinthians, Section 1.1’, in <i>A New Eusebius: Documents Illustrating the History of the Church to A.D. 337</i>, ed. James Stevenson (London: SPCK Publishing, 1987), 8.');
        });

        it('cites from A New Eusebius as expected - includes literal name - short style', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citationItem = {
                id: 'clement',
                locator: '8',
                label: 'page',
                position: ibidWithLocator
            };
        
            citeproc.updateItems(['clement']);

            var result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Clement of Rome, ‘First Epistle to the Corinthinans’, 8.');
        });
    });
});
