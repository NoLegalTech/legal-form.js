var removeById = function(id) {
    var element = document.getElementById(id);
    if (element) {
        element.remove();
    }
};

describe("LegalForm", function() {

    describe("constructor", function() {

        beforeEach(function () {
            removeById('theFormId');
            removeById('theButtonId');
            console.error = jasmine.createSpy("error");
        });

        it("shows error if no button (but throws no error)", function() {
            var theLegalForm = new LegalForm();

            expect(console.error).toHaveBeenCalledWith('No button was defined to trigger the legal form!');
            expect(theLegalForm.errors[0]).toEqual('No button was defined to trigger the legal form!');
        });

        it("shows error if no info (but throws no error)", function() {
            var theLegalForm = new LegalForm({ button: 'something' });

            expect(console.error).toHaveBeenCalledWith('No info was defined to show in the legal form!');
            expect(theLegalForm.errors[0]).toEqual('No info was defined to show in the legal form!');
        });

        it("shows error if button does not exist (but throws no error)", function() {
            var theForm = document.createElement('form');
            var theButton = document.createElement('button');
            theForm.setAttribute('id', 'theFormId')
            theButton.setAttribute('id', 'theButtonId')
            theForm.appendChild(theButton);
            document.body.appendChild(theForm);

            var theLegalForm = new LegalForm({ button: 'unexisting', info: [ { label: 'l', description: 'd', additional_info: 'a' } ] });
            theLegalForm.init();

            expect(console.error).toHaveBeenCalledWith('Button to trigger the legal form (unexisting) not found!');
            expect(theLegalForm.errors[0]).toEqual('Button to trigger the legal form (unexisting) not found!');
        });

        it("shows error if button is not contained in a form (but throws no error)", function() {
            var theButton = document.createElement('button');
            theButton.setAttribute('id', 'theButtonId')
            document.body.appendChild(theButton);

            var theLegalForm = new LegalForm({ button: 'theButtonId', info: [ { label: 'l', description: 'd', additional_info: 'a' } ] });
            theLegalForm.init();

            expect(console.error).toHaveBeenCalledWith('Cannot find form to submit for button (theButtonId)!');
            expect(theLegalForm.errors[0]).toEqual('Cannot find form to submit for button (theButtonId)!');
        });

        it("shows no errors if everything is fine", function() {
            var theForm = document.createElement('form');
            var theButton = document.createElement('button');
            theForm.setAttribute('id', 'theFormId')
            theButton.setAttribute('id', 'theButtonId')
            theForm.appendChild(theButton);
            document.body.appendChild(theForm);

            var theLegalForm = new LegalForm({ button: 'theButtonId', info: [ { label: 'l', description: 'd', additional_info: 'a' } ] });
            theLegalForm.init();

            expect(console.error).not.toHaveBeenCalled();
            expect(theLegalForm.errors.length).toEqual(0);
        });

    });

});
