describe("Dialog", function() {

    describe("constructor", function() {

        it("creates dialog in DOM", function() {
            var theDialog = new Dialog({
                    info: [{
                        label: 'Responsable',
                        description: 'Fulanito de Tal, S.L.',
                        additional_info: 'http://www.google.es'
                    }],
                    dialogTitle: 'A dialog title',
                    tableTitle: 'A table title',
                    submitText: 'Submit'
                }, document.body
            );

            expect(theDialog.dialog.className)
                .toEqual('legal-form-dialog');
            expect(theDialog.dialog.style.display)
                .toEqual('none');
            expect(theDialog.dialog.innerHTML)
                .toEqual(
                    '<div class="legal-form-topbar">'
                    + '<span>A dialog title</span>'
                    + '<button title="Close"> X </button>'
                    + '</div>'
                    + '<div class="legal-form-content">'
                    + '<h3>A table title</h3>'
                    + '<table><tbody>'
                    + '<tr>'
                    + '<td>Responsable</td>'
                    + '<td>Fulanito de Tal, S.L.</td>'
                    + '<td><a href="http://www.google.es">+info</a></td>'
                    + '</tr></tbody>'
                    + '</table>'
                    + '</div>'
                    + '<div class="legal-form-bottombar">'
                    + '<button type="button">Submit</button>'
                    + '</div>'
                );
        });

    });

});
