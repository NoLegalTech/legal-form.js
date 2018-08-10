  /********************************************/
 /*  String                                  */
/********************************************/
String.getRandom = function(n) {
    var alphabet = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    return Array.apply(null, {length: n})
        .map(n => alphabet[Math.floor(Math.random() * alphabet.length)])
        .join('');
};
/********************************************/


  /********************************************/
 /*  HTMLElement                             */
/********************************************/
HTMLElement.prototype.findAncestor = function(tagName) {
    var parent = this.parentElement, maxIter = 10;
    while (parent != null && maxIter > 0) {
        maxIter--;
        if (parent.tagName.toLowerCase() == tagName.toLowerCase()) {
            return parent;
        }
    }
    return null;
};

HTMLElement.prototype.clone = function() {
    var copy = this.cloneNode();
    copy.innerHTML = this.innerHTML;
    return copy;
};
/********************************************/


  /********************************************/
 /*  Dialog                                  */
/********************************************/
var Dialog = function(options, form) {
    var _this = this;

    _this.create = function() {
        var dialog = document.createElement('div');
        dialog.className = 'legal-form-dialog';
        dialog.style.display = 'none';

        var topbar = document.createElement('div');
        topbar.className = 'legal-form-topbar';

        var spanTitle = document.createElement('span');
        spanTitle.innerText = options.dialogTitle;

        var buttonClose = document.createElement('button');
        buttonClose.title = 'Close';
        buttonClose.innerText = ' X ';

        var content = document.createElement('div');
        content.className = 'legal-form-content';

        var h3Title = document.createElement('h3');
        h3Title.innerText = options.tableTitle;

        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        for (var i = 0; i < options.info.length; i++) {
            var newRow = document.createElement('tr');

            var td = document.createElement('td');
            td.innerText = options.info[i].label;
            newRow.appendChild(td);

            td = document.createElement('td');
            td.innerText = options.info[i].description;
            newRow.appendChild(td);

            td = document.createElement('td');
            a = document.createElement('a');
            a.setAttribute('href', options.info[i].additional_info)
            a.innerText = '+info';
            td.appendChild(a);
            newRow.appendChild(td);

            newRow.children[1].innerText
            newRow.children[2].children[0].setAttribute;
            tbody.appendChild(newRow);
        }
        table.appendChild(tbody);

        var bottombar = document.createElement('div');
        bottombar.className = 'legal-form-bottombar';

        var buttonAccept = document.createElement('button');
        buttonAccept.type = 'button';
        buttonAccept.innerText = options.submitText;

        topbar.appendChild(spanTitle);
        topbar.appendChild(buttonClose);

        content.appendChild(h3Title);
        content.appendChild(table);

        bottombar.appendChild(buttonAccept);

        dialog.appendChild(topbar);
        dialog.appendChild(content);
        dialog.appendChild(bottombar);

        buttonClose.onclick = function(e) {
            dialog.style.display = 'none';
        }

        buttonAccept.onclick = function(e) {
            form.submit();
        }

        document.body.appendChild(dialog);

        _this.dialog = dialog;

        return _this;
    };

    return _this.create();
}
/********************************************/


  /********************************************/
 /*  LegalForm                               */
/********************************************/
var LegalForm = function(options = {}) {
    var _this = this;
    _this.errors = [];

    _this.error = function(message) {
        _this.errors.push(message);
        console.error(message);
    };

    options.submitText  = options.submitText  || 'Aceptar y registrarme';
    options.dialogTitle = options.dialogTitle || 'Antes de registrarte revisa que estás de acuerdo con esto';
    options.tableTitle  = options.tableTitle  || 'Información básica sobre protección de datos';

    if (!options.button) {
        _this.error('No button was defined to trigger the legal form!');
        return _this;
    }

    if (!options.info || options.info.length == 0) {
        _this.error('No info was defined to show in the legal form!');
        return _this;
    }

    _this.init = function() {
        var theButton = document.getElementById(options.button);

        if (!theButton) {
            _this.error(`Button to trigger the legal form (${options.button}) not found!`);
            return _this;
        }

        var theForm = theButton.findAncestor('form');

        if (!theForm) {
            _this.error(`Cannot find form to submit for button (${options.button})!`);
            return _this;
        }

        var theDialog = new Dialog(options, theForm);

        theButton.onclick = function(e) {
            e.preventDefault();
            var dialog = document.getElementsByClassName('legal-form-dialog')[0];
            dialog.style.display = 'block';
        }

        _this.dialog = theDialog;
    };

    window.addEventListener("DOMContentLoaded", function() {
        _this.init();
    }, false);

    return _this;
}
