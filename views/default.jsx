const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>SAD-on-MongoDB</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../style.css"/>
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/topics/6350e5774e544064a7ab6088">Node.js</a>
                    </li>
                    <li>
                    <a href="/topics/6350e5a74e544064a7ab6089">React</a>
                    </li>
                    <li>
                    <a href="/topics/6350e6434e544064a7ab608a">MongoDB</a>
                    </li>
                </ul>
                </nav>
                 {html.children}
            </body>                      

        </html>
    )
}

module.exports = Def