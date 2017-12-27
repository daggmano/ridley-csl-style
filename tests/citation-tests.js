describe('Citation tests', function() {
    describe('2017 Student Manual tests', function() {
        it('cites a book', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citation = {
                properties: {
                    noteIndex: 1
                },
                citationItems: {
                    id: 'wright',
                    locator: '199-201',
                    label: 'page'
                }
            };
        
            citeproc.updateItems(['wright']);

            var result = citeproc.makeCitationCluster([citation.citationItems]);

            expect(result).toBe('Christopher J. H. Wright, <i>The Mission of God: Unlocking the Bible’s Grand Narrative</i> (Nottingham: Inter-Varsity Press, 2006), 199–201.');
        });

        it('cites a book - short style', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citation = {
                properties: {
                    noteIndex: 2
                },
                citationItems: {
                    id: 'wright',
                    locator: '200',
                    label: 'page',
                    position: 'ibid-with-locator'
                }
            };
        
            citeproc.updateItems(['wright']);

            var result = citeproc.makeCitationCluster([citation.citationItems]);

            expect(result).toBe('Wright, <i>Mission of God</i>, 200.');
        });

        it('cites an essay in an edited book', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citation = {
                properties: {
                    noteIndex: 1
                },
                citationItems: {
                    id: 'hurtado',
                    locator: '15-17',
                    label: 'page'
                }
            };
        
            citeproc.updateItems(['hurtado']);

            var result = citeproc.makeCitationCluster([citation.citationItems]);

            expect(result).toBe('Larry W. Hurtado, ‘Following Jesus in the Gospel of Mark — And Beyond’, in <i>Patterns of Discipleship in the New Testament</i>, ed. Richard N. Longenecker (Grand Rapids: Eerdmans, 1996), 15–17.');
        });

        it('cites a journal article', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citation = {
                properties: {
                    noteIndex: 1
                },
                citationItems: {
                    id: 'hamilton',
                    locator: '29-32',
                    label: 'page'
                }
            };
        
            citeproc.updateItems(['hamilton']);

            var result = citeproc.makeCitationCluster([citation.citationItems]);

            // Note: the citation and expected result differ from that given in the Ridley Student Manual 2017 as Zotero is unable to handle 'Jr.' suffixes for names.
            expect(result).toBe('James M. Hamilton, ‘Rushing Wind and Organ Music: Toward Luke’s Theology of the Spirit in Acts’, <i>RTR</i> 65 (2006): 29–32.');
        });

        it('cites a dictionary or lexicon article', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            var citation = {
                properties: {
                    noteIndex: 1
                },
                citationItems: {
                    id: 'bird',
                    locator: '116-118',
                    label: 'page'
                }
            };
        
            citeproc.updateItems(['bird']);

            var result = citeproc.makeCitationCluster([citation.citationItems]);

            // Note: As Zotero does not have a shortContainerTitle field for dictionary entries, the short container name is placed in the Note field (appears as Extra in Zotero)
            expect(result).toBe('Michael F. Bird, ‘Christ’, <i>DJG</i> 116–118.');
        });
    });
});

/*
LATER FOOTNOTE:
Wright, Mission of God, 200.

LATER FOOTNOTE:
Hurtado, ‘Following Jesus’, 19–21.

LATER FOOTNOTE:
Hamilton, ‘Rushing Wind’, 17.

LATER FOOTNOTE:
Bird, ‘Christ’, 123.
*/