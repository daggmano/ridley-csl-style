# Ridley CSL Style [![Build Status](https://travis-ci.org/daggmano/ridley-csl-style.svg)](https://travis-ci.org/daggmano/ridley-csl-style)

This project provides a CSL style suitable for Ridley College.  It is based on the Society of Biblical Literature (2nd Edition, full note) style, but with tweaks
to better match Ridley's specification.

## Running Tests ##

Download or clone the repo, and from a terminal window `cd` to the root folder of the project.  Restore the required node packages, and then run the tests.

    npm install
    npm test

Note that the use of `PhantomJS` may cause issues. If you are unable to run tests using the above command, you can run the tests through Chrome.

    npm run chrome 

## Notes on Zotero and 2018 Ridley Student Manual ##

### Example 2.3.4 ###
As Zotero does not have a `shortContainerTitle` field for dictionary entries, the short container name (`DJG` in this case, cited in the First Footnote citation) is placed in the `Note` field (appears as `Extra` in Zotero).

### Example 3.9.2b ###
As previously seen, Zotero does not support name prefixes and so `Patrick D. Miller Jr` becomes `Patrick D. Miller`.



# Check stuff from citations ex 2.3.3 #



More information will be added as the author gets time...
