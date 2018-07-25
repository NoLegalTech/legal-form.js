describe("HTMLElement", function() {

    describe("findAncestor()", function() {

        it("returns ancestor if it exists", function() {
            var theForm = document.createElement('form');
            var theButton = document.createElement('button');
            theForm.appendChild(theButton);

            expect(theButton.findAncestor('form')).toEqual(theForm);
        });

        it("returns null if it does not exist", function() {
            var theForm = document.createElement('form');
            var theButton = document.createElement('button');

            expect(theButton.findAncestor('form')).toEqual(null);
        });

    });

    describe("clone()", function() {

        it("copies the whole element with children", function() {
            var aDiv = document.createElement('div');
            aDiv.appendChild(document.createElement('p'));
            aDiv.appendChild(document.createElement('h2'));
            aDiv.appendChild(document.createElement('ul'));

            var theCopy = aDiv.clone();
            expect(theCopy.tagName).toEqual('DIV');
            expect(theCopy.children.length).toEqual(3);
            expect(theCopy.children[0].tagName).toEqual('P');
            expect(theCopy.children[1].tagName).toEqual('H2');
            expect(theCopy.children[2].tagName).toEqual('UL');
        });

    });

});
