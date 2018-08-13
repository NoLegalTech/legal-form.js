# legal-form.js


## Getting Started

legal-form.js is an independent javascript client library intended to easily add a popup with legal info to any web form.

The basic case of use is:

 - You have a form that collects some data from the user and has a submit button
 - You need to force the user to read some legal info before accepting the input from the user

What legal-form.js does for you in this case is:

 - When the submit button is clicked in that form, a popup dialog will show up with the necessary legal info
 - The dialog can be closed without accepting, in which case the user is back to the form but cannot submit it
 - The dialog has an "accept and proceed" button that submits the form when clicked.

### Installing

**1)** Include javascript library in the `<head>` block of your webpage:
```html
    <script src="./legal-form.js"></script>
```

**2)** Include stylesheet library in the `<head>` block of your webpage:
```html
    <link rel="stylesheet" href="css/legal-form.css" type="text/css" charset="utf-8" />
```

**3)** Configure and create the legal form in a new `<script>` block:
```html
    <script>
        new LegalForm({
            button: 'register-button',
            submitText: 'Aceptar y registrarme',
            dialogTitle: 'Antes de registrarte revisa que estás de acuerdo con esto',
            tableTitle: 'Información básica sobre protección de datos',
            info: [
                {
                    label: 'Responsable',
                    description: 'Fulanito de Tal, S.L.',
                    additional_info: 'http://www.google.es'
                },
                {
                    label: 'Finalidad',
                    description: 'Prestación del servicio',
                    additional_info: 'http://www.google.es'
                },
                {
                    label: 'Legitimación',
                    description: 'Consentimiento del interesado',
                    additional_info: 'http://www.google.es'
                },
                {
                    label: 'Destinatarios',
                    description: 'Google Analytics y terceros por obligación legal',
                    additional_info: 'http://www.google.es'
                },
                {
                    label: 'Derechos',
                    description: 'Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional',
                    additional_info: 'http://www.google.es'
                },
                {
                    label: 'Información Adicional',
                    description: 'Puede consultar la información adicional y detallada sobre Protección de datos en nuestra política de privacidad',
                    additional_info: 'http://www.google.es'
                }
            ]
        });
    </script>
```


In future versions of the library we expect to allow more flexibility; so far you need to stick to these fields.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/NoLegalTech/legal-form.js/tags). 

## Authors

* **Pepe Doval** - *Initial work* - [pepellou](https://github.com/pepellou)

See also the list of [contributors](https://github.com/NoLegalTech/legal-form.js/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
