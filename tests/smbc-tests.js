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
            expect(result).toBe('Stuart Coulton, <i>Hitting the Holy Road</i> (Nottingham: IVP, 2011), 75');
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
            expect(result).toBe('Coulton, <i>Hitting the Holy Road</i>, 114');
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
          expect(result).toBe('Eugene H. Merrill, “Old Testament History: A Theological Perspective,” in <i>A Guide to Old Testament Theology and Exegesis</i>, ed. Willem A. VanGemeren (Grand Rapids: Zondervan, 1999), 67');
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
          expect(result).toBe('Merrill, “Old Testament History” (VanGemeren), 72');
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
    });
});
