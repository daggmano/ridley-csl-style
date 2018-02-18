describe('Bibliography tests', function() {
    describe('2017 Student Manual tests', function() {
        it('cites a book', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['wright']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Wright, Christopher J. H. <i>The Mission of God: Unlocking the Bible’s Grand Narrative</i>. Nottingham: Inter-Varsity Press, 2006.</div>');
        });

        it('cites an essay in an edited book', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['hurtado']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Hurtado, Larry W. ‘Following Jesus in the Gospel of Mark — And Beyond’. Pages 9–29 in <i>Patterns of Discipleship in the New Testament</i>. Edited by Richard N. Longenecker. Grand Rapids: Eerdmans, 1996.</div>');
        });

        it('cites a journal article', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['hamilton']);

            var result = citeproc.makeBibliography();

            // Note: The citation and expected result differ from that given in the Ridley Student Manual 2017 as Zotero is unable to handle 'Jr.' suffixes for names.
            expect(result[1][0].trim()).toBe('<div class="csl-entry">Hamilton, James M. ‘Rushing Wind and Organ Music: Toward Luke’s Theology of the Spirit in Acts’. <i>Reformed Theological Review</i> 65 (2006): 15–33.</div>');
        });

        it('cites a dictionary or lexicon article', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['bird']);

            var result = citeproc.makeBibliography();

            // Note: As Zotero does not have a shortContainerTitle field for dictionary entries, the short container name is placed in the Note field (appears as Extra in Zotero)
            expect(result[1][0].trim()).toBe('<div class="csl-entry">Bird, Michael F. ‘Christ’. Pages 116–125 in <i>Dictionary of Jesus and the Gospels</i>. Edited by Joel B. Green, Jeannine K. Brown and Nicholas Perrin. 2nd ed. Downers Grove: IVP Academic, 2013.</div>');
        });
    });

    describe('2018 Student Manual tests', function() {
        it ('cites multiple authors and editors', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['boda', 'hill']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Boda, Mark J., and J. Gordon McConville, eds. <i>Dictionary of the Old Testament: Prophets</i>. Downers Grove: IVP Academic, 2012.</div>');
            expect(result[1][1].trim()).toBe('<div class="csl-entry">Hill, Andrew E., and John H. Walton. <i>A Survey of the Old Testament</i>. 3rd ed. Grand Rapids: Zondervan, 2009.</div>');
        });

        it('cites a commentary / book series', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['beasley', 'walton', 'wilson']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Beasley-Murray, George R. <i>John</i>. 2nd ed. WBC 36. Dallas: Word, 1999.</div>');
            expect(result[1][1].trim()).toBe('<div class="csl-entry">Walton, John H. <i>Job</i>. NIVAC. Grand Rapids: Zondervan, 2012.</div>');
            expect(result[1][2].trim()).toBe('<div class="csl-entry">Wilson, Gerald H. ‘King, Messiah, and the Reign of God: Revisiting the Royal Psalms and the Shape of the Psalter‘. Pages 391-406 in <i>The Book of Psalms: Composition and Reception</i>. Editied by Peter W. Flint and Patrick D. Miller VTSup 99. Leiden: Brill, 2005.</div>');
        });

        it('cites multiple publishers', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['ciampa']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Ciampa, Roy E., and Brian S. Rosner. <i>The First Letter to the Corinthians</i>. PNTC. Grand Rapids: Eerdmans; Nottingham: Apollos, 2010.</div>');
        });
    });

    describe('Specific examples', function() {
        it('cites from A New Eusebius as expected - includes literal name', function() {
            var style = loadXml('./ridley-sbl.csl');
            var citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['clement']);

            var result = citeproc.makeBibliography();

            expect(result[1][0].trim()).toBe('<div class="csl-entry">Clement of Rome. ‘First Epistle to the Corinthians, Section 1.1’. Pages 7–9 in <i>A New Eusebius: Documents Illustrating the History of the Church to A.D. 337</i>. Edited by James Stevenson. London: SPCK Publishing, 1987.</div>');
        });
    });
});
