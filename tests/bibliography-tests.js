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
});