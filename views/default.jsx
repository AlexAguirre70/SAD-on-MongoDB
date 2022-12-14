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
                    <a href="/topics/Node.JS">Node.js</a>
                    </li>
                    <li>
                    <a href="/topics/React">React</a>
                    </li>
                    <li>
                    <a href="/topics/MongoDB">MongoDB</a>
                    </li>
                </ul>
                </nav>
                 {html.children}
            </body>                      

        </html>
    )
}

module.exports = Def