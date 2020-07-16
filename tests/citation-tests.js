describe('Citation tests', function() {

    const ibidWithLocator = 1;
    const ibid = 2;

    describe('2018 Student Manual tests', function() {
        it('cites a book (ex 2.3.1)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'wright',
                locator: '199-201',
                label: 'page'
            };

            citeproc.updateItems(['wright']);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Christopher J. H. Wright, <i>The Mission of God: Unlocking the Bible’s Grand Narrative</i> (Nottingham: Inter-Varsity Press, 2006), 199–201.');
        });

        it('cites a book - short style (ex 2.3.1)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'wright',
                locator: '200',
                label: 'page',
                position: ibidWithLocator
            };

            citeproc.updateItems(['wright']);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Wright, <i>Mission of God</i>, 200.');
        });

        it('cites an essay in an edited book (ex 2.3.2)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'hurtado',
                locator: '15-17',
                label: 'page'
            };

            citeproc.updateItems(['hurtado']);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Larry W. Hurtado, ‘Following Jesus in the Gospel of Mark — And Beyond’, in <i>Patterns of Discipleship in the New Testament</i>, ed. Richard N. Longenecker (Grand Rapids: Eerdmans, 1996), 15–17.');
        });

        it('cites an essay in an edited book - short style (ex 2.3.2)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'hurtado',
                locator: '19-21',
                label: 'page',
                position: ibidWithLocator
            };

            citeproc.updateItems(['hurtado']);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Hurtado, ‘Following Jesus’, 19–21.');
        });

        it('cites a journal article (ex 2.3.3)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'hamilton',
                locator: '29-32',
                label: 'page'
            };

            citeproc.updateItems(['hamilton']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('James M. Hamilton Jr, ‘Rushing Wind and Organ Music: Toward Luke’s Theology of the Spirit in Acts’, <i>RTR</i> 65 (2006): 29–32.');
        });

        it('cites a journal article - short style (ex 2.3.3)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'hamilton',
                locator: '17',
                label: 'page',
                position: ibidWithLocator
            };

            citeproc.updateItems(['hamilton']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Hamilton, ‘Rushing Wind’, 17.');
        });

        it('cites a dictionary or lexicon article (ex 2.3.4)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'bird',
                locator: '116-118',
                label: 'page'
            };

            citeproc.updateItems(['bird']);

            const result = citeproc.makeCitationCluster([citationItem]);

            // Note: As Zotero does not have a shortContainerTitle field for dictionary entries, the short container name is placed in the Note field (appears as Extra in Zotero)
            expect(result).toBe('Michael F. Bird, ‘Christ’, <i>DJG</i> 116–118.');
        });

        it('cites a dictionary or lexicon article - short style (ex 2.3.4)', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'bird',
                locator: '123',
                label: 'page',
                position: ibidWithLocator
            };

            citeproc.updateItems(['bird']);

            const result = citeproc.makeCitationCluster([citationItem]);

            // Note: As Zotero does not have a shortContainerTitle field for dictionary entries, the short container name is placed in the Note field (appears as Extra in Zotero)
            expect(result).toBe('Bird, ‘Christ’, 123.');
        });

        // Note: Classic texts removed as of June 2018 as fixing would require the use of additional types and terms, mostly provided under CSL-M.
        // Unfortunately at this point Zotero does not accept CSL-M extensions.
        // it('cites ancient documents (ex 3.9.2e (i))', function() {
        //    var style = loadXml('./ridley-sbl.csl');
        //    var citeproc = new CSL.Engine(getSys(), style);

        //    var citationItem = {
        //        id: 'augustine',
        //        locator: '28.3.5',
        //        label: 'page',
        //        position: ibidWithLocator
        //    };

        //    citeproc.updateItems(['augustine']);

        //    var result = citeproc.makeCitationCluster([citationItem]);

        //    expect(result).toBe('Augustine, <i>Letters of St. Augustin</i> 28.3.5 (<i>N.P.N.F</i> 1:252).');
        // });

        // it('cites ancient documents (ex 3.9.2e (ii))', function() {
        //    var style = loadXml('./ridley-sbl.csl');
        //    var citeproc = new CSL.Engine(getSys(), style);

        //    var citationItem = {
        //        id: 'calvin',
        //        locator: '165',
        //        label: 'page'
        //    };

        //    citeproc.updateItems(['calvin']);

        //    var result = citeproc.makeCitationCluster([citationItem]);

        //    expect(result).toBe('John Calvin, <i>Inst</i>. 1.14.5, trans. Ford Lewis Battles, ed. John T. McNeill, 2 vols., LCC 20-21 (Philadelphia: Westminster, 1960), 1:165.');
        // });

        // it('cites ancient documents (ex 3.9.2e (iii))', function() {
        //    var style = loadXml('./ridley-sbl.csl');
        //    var citeproc = new CSL.Engine(getSys(), style);

        //    var citationItem = {
        //        id: 'elowsky',
        //        locator: '72',
        //        label: 'page'
        //    };

        //    citeproc.updateItems(['elowsky']);

        //    var result = citeproc.makeCitationCluster([citationItem]);

        //    expect(result).toBe('Theodore of Mopsuestia, <i>Comm</i>. John 12:38-41, cited in Joel C. Elowsky, ed., <i>John 11-21</i>, ACCS 4B (Downers Grove: InterVarsity Press, 2007), 72.');
        // });

        it('cites electronic sources (ex 3.9.3 (i))', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'blomberg',
                locator: 'Kindle edition, ch. 14, ‘Parables: Interpretive Method’'
            };

            citeproc.updateItems(['blomberg']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Craig L. Blomberg, <i>Jesus and the Gospels: An Introduction and Survey</i>, 2nd ed. (Nashville: B&#38;H Academic), Kindle edition, ch. 14, ‘Parables: Interpretive Method’.');
        });

        it('cites electronic sources - short style (ex 3.9.3 (i))', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'blomberg',
                locator: 'ch. 14, ‘Miracles: Historicity’',
                position: ibidWithLocator
            };

            citeproc.updateItems(['blomberg']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Blomberg, <i>Jesus and the Gospels</i>, ch. 14, ‘Miracles: Historicity’.');
        });

        it('cites electronic sources (ex 3.9.3 (ii))', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'bezzant'
            };

            citeproc.updateItems(['bezzant']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Rhys Bezzant, ‘Jonathon Edwards on Mentoring’, Euangelion, 17 November 2014, http://www.patheos.com/blogs/euangelion/2014/11/jonathon-edwards-on-mentoring.');
        });
    });

    describe('Specific examples', function() {
        it('cites from A New Eusebius as expected - includes literal name', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'clement',
                locator: '8',
                label: 'page'
            };

            citeproc.updateItems(['clement']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Clement of Rome, ‘First Epistle to the Corinthians, Section 1.1’, in <i>A New Eusebius: Documents Illustrating the History of the Church to A.D. 337</i>, ed. James Stevenson (London: SPCK Publishing, 1987), 8.');
        });

        it('cites from A New Eusebius as expected - includes literal name - short style', function() {
            const style = loadXml('./ridley-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'clement',
                locator: '8',
                label: 'page',
                position: ibidWithLocator
            };

            citeproc.updateItems(['clement']);

            const result = citeproc.makeCitationCluster([citationItem]);

            expect(result).toBe('Clement of Rome, ‘First Epistle to the Corinthinans’, 8.');
        });
    });
});
