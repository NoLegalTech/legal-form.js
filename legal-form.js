var Utils = {
    getRandomId: function() {
        var id = 'legal-form-dialog-';
        var alphabet = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        return id + [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            .map(n => alphabet[Math.floor(Math.random() * alphabet.length)])
            .join('');
    }
}

var getFormOfButton = function(button) {
    var form = button.parentElement;
    while (form != null) {
        if (form.tagName.toLowerCase() == 'form') {
            return form;
        }
    }
    return null;
};

var deepClone = function(node) {
    if (!node.children || node.children.length == 0) {
        var copy = node.cloneNode();
        if (node.innerText != '') {
            copy.innerText = node.innerText;
        }
        return copy;
    }
    var copy = node.cloneNode();
    for (var i = 0; i < node.children.length; i++) {
        copy.appendChild(deepClone(node.children[i]));
    }
    return copy;
};

var Dialog = function(options, form) {
    var _this = this;

    _this.id = Utils.getRandomId();

    _this.create = function() {
        var template = document.getElementsByClassName('legal-form-dialog')[0];

        var dialog = deepClone(template);
        var table = dialog.children[1].children[1].children[0];
        var rowTemplate = table.children[0];

        table.removeChild(rowTemplate);

        for (var i = 0; i < options.info.length; i++) {
            var newRow = deepClone(rowTemplate);
            newRow.children[0].innerText = options.info[i].label;
            newRow.children[1].innerText = options.info[i].description;
            newRow.children[2].children[0].setAttribute('href', options.info[i].additional_info);
            table.appendChild(newRow);
        }

        dialog.setAttribute('id', _this.id);

        document.body.append(dialog);

        dialog.children[0].children[0].innerText = options.dialogTitle;
        dialog.children[1].children[0].innerText = options.tableTitle;
        dialog.children[2].children[0].innerText = options.submitText;

        var cancelButton = dialog.children[0].children[1];
        var okButton = dialog.children[2].children[0];

        cancelButton.onclick = function(e) {
            dialog.style.display = 'none';
        }

        okButton.onclick = function(e) {
            form.submit();
        }

        return _this;
    };

    return _this.create();
}

var LegalForm = function(options) {
    var _this = this;

    options.submitText  = options.submitText  || 'Aceptar y registrarme';
    options.dialogTitle = options.dialogTitle || 'Antes de registrarte revisa que estás de acuerdo con esto';
    options.tableTitle  = options.tableTitle  || 'Información básica sobre protección de datos';

    if (!options.button) {
        throw new Error('No button was defined to trigger the legal form!');
    }

    if (!options.info || options.info.length == 0) {
        throw new Error('No info was defined to show in the legal form!');
    }

    _this.init = function() {
        var theButton = document.getElementById(options.button);

        if (!theButton) {
            throw new Error(`Button to trigger the legal form (${options.button}) not found!`);
        }

        var theForm = getFormOfButton(theButton);

        if (!theForm) {
            throw new Error(`Cannot find form to submit for button (${options.button})!`);
        }

        var theDialog = new Dialog(options, theForm);

        theButton.setAttribute('data-dialog-id', theDialog.id);

        theButton.onclick = function(e) {
            e.preventDefault();
            var dialog = document.getElementById(theDialog.id);
            dialog.style.display = 'block';
        }
    };

    window.addEventListener("DOMContentLoaded", function() {
        _this.init();
    }, false);

    return _this;
}
