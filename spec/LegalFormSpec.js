describe("Utils", function() {

    it("getRandomId() starts with legal-form-dialog-", function() {
        var expectedStart = 'legal-form-dialog-';
        expect(Utils.getRandomId().substring(0, expectedStart.length)).toEqual(expectedStart);
    });

    it("getFormOfButton() returns form of a button", function() {
        var theForm = document.createElement('form');
        var theButton = document.createElement('button');
        theForm.appendChild(theButton);

        expect(getFormOfButton(theButton)).toEqual(theForm);
    });

    it("getFormOfButton() returns null if form not found", function() {
        var theForm = document.createElement('form');
        var theButton = document.createElement('button');

        expect(getFormOfButton(theButton)).toEqual(null);
    });

});
