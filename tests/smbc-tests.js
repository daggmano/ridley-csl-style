describe('SMBC tests', function() {

    const ibidWithLocator = 1;
    const ibid = 2;

    describe('SMBC Style Guide tests', function() {
        it('cites a book - full', function() {
            const style = loadXml('./smbc-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'smbc-coulton',
                locator: '75',
                label: 'page'
            };

            citeproc.updateItems(['smbc-coulton']);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Stuart Coulton, <i>Hitting the Holy Road</i> (Nottingham: IVP, 2011), 75.');
        });

        it('cites a book - subsequent', function() {
            const style = loadXml('./smbc-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            const citationItem = {
                id: 'smbc-coulton',
                locator: '114',
                label: 'page',
                position: ibid
            };

            citeproc.updateItems(['smbc-coulton']);

            const result = citeproc.makeCitationCluster([citationItem]);
            expect(result).toBe('Coulton, <i>Hitting the Holy Road</i>, 114.');
        });

        it('cites a book - bibliography', function() {
            const style = loadXml('./smbc-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['smbc-coulton']);

            const result = citeproc.makeBibliography();
            expect(result[1][0].trim()).toBe('<div class="csl-entry">Coulton, Stuart. <i>Hitting the Holy Road</i>. Nottingham: IVP, 2011.</div>');
        });

        it('cites a book chapter - full', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-merrill',
              locator: '67',
              label: 'page'
          };

          citeproc.updateItems(['smbc-merrill']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Eugene H. Merrill, “Old Testament History: A Theological Perspective,” in <i>A Guide to Old Testament Theology and Exegesis</i>, ed. Willem A. VanGemeren (Grand Rapids: Zondervan, 1999), 67.');
        });

        it('cites a book chapter - subsequent', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-merrill',
              locator: '72',
              label: 'page',
              position: ibid
          };

          citeproc.updateItems(['smbc-merrill']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Merrill, “Old Testament History” (VanGemeren), 72.');
        });

        it('cites a book chapter - bibliography', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          citeproc.updateItems(['smbc-merrill']);

          const result = citeproc.makeBibliography();
          expect(result[1][0].trim()).toBe('<div class="csl-entry">Merrill, Eugene H. “Old Testament History: A Theological Perspective.” Pages 65–82 in <i>A Guide to Old Testament Theology and Exegesis</i>. Edited by Willem A. VanGemeren. Grand Rapids: Zondervan, 1999.</div>');
        });

        it('cites a journal article - full', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-johansson',
              locator: '110',
              label: 'page'
          };

          citeproc.updateItems(['smbc-johansson']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Daniel Johansson, “Kyrios in the Gospel of Mark,” <i>JSNT</i> 33 (2010): 110.');
        });

        it('cites a journal article - subsequent', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-johansson',
              locator: '120',
              label: 'page',
              position: ibid
          };

          citeproc.updateItems(['smbc-johansson']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Johansson, “Kyrios in the Gospel of Mark,” 120.');
        });

        it('cites a journal article - bibliography', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          citeproc.updateItems(['smbc-johansson']);

          const result = citeproc.makeBibliography();
          expect(result[1][0].trim()).toBe('<div class="csl-entry">Johansson, Daniel. “Kyrios in the Gospel of Mark.” <i>JSNT</i> 33 (2010): 101–124.</div>');
        });

        it('cites a book with two authors - full', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-nienhuis',
              locator: '17',
              label: 'page'
          };

          citeproc.updateItems(['smbc-nienhuis']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('David R. Nienhuis and Robert W. Wall, <i>Reading the Epistles of James, Peter, John, and Jude as Scripture: The Shaping and Shape of a Canonical Collection</i> (Grand Rapids: Eerdmans, 2013), 17.');
        });

        it('cites a book with two authors - subsequent', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-nienhuis',
              locator: '13',
              label: 'page',
              position: ibid
          };

          citeproc.updateItems(['smbc-nienhuis']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Nienhuis and Wall, <i>Reading the Epistles of James, Peter, John, and Jude as Scripture</i>, 13.');
        });

        it('cites a book with two authors - bibliography', function() {
            const style = loadXml('./smbc-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['smbc-nienhuis']);

            const result = citeproc.makeBibliography();
            expect(result[1][0].trim()).toBe('<div class="csl-entry">Nienhuis, David R., and Robert W. Wall. <i>Reading the Epistles of James, Peter, John, and Jude as Scripture: The Shaping and Shape of a Canonical Collection</i>. Grand Rapids: Eerdmans, 2013.</div>');
        });

        it('cites a book with four authors - full', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-scott',
              locator: '53',
              label: 'page'
          };

          citeproc.updateItems(['smbc-scott']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Bernard Brandon Scott et al., <i>Reading New Testament Greek</i> (Peabody, MA: Hendrickson, 1993), 53.');
        });

        it('cites a book with four authors - subsequent', function() {
          const style = loadXml('./smbc-sbl.csl');
          const citeproc = new CSL.Engine(getSys(), style);

          const citationItem = {
              id: 'smbc-scott',
              locator: '42',
              label: 'page',
              position: ibid
          };

          citeproc.updateItems(['smbc-scott']);

          const result = citeproc.makeCitationCluster([citationItem]);
          expect(result).toBe('Scott et al., <i>Reading New Testament Greek</i>, 42.');
        });

        it('cites a book with four authors - bibliography', function() {
            const style = loadXml('./smbc-sbl.csl');
            const citeproc = new CSL.Engine(getSys(), style);

            citeproc.updateItems(['smbc-scott']);

            const result = citeproc.makeBibliography();
            expect(result[1][0].trim()).toBe('<div class="csl-entry">Scott, Bernard Brandon, Margaret Dean, Kristen Sparks, and Frances LaZar. <i>Reading New Testament Greek</i>. Peabody, MA: Hendrickson, 1993.</div>');
        });
    });
});
