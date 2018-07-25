describe("LegalForm", function() {

    describe("constructor", function() {

        it("throws error if no button", function() {
            try {
                new LegalForm();
                expect('Error expected').toEqual('Error not thrown');
            } catch(e) {
                expect(e.message).toEqual('No button was defined to trigger the legal form!');
            }
        });

        it("throws error if no info", function() {
            try {
                new LegalForm({ button: 'something' });
                expect('Error expected').toEqual('Error not thrown');
            } catch(e) {
                expect(e.message).toEqual('No info was defined to show in the legal form!');
            }
        });

    });

});
