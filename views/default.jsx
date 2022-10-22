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
                    <a href="/topics/63537cf04e544064a7ab60a7">Node.js</a>
                    </li>
                    <li>
                    <a href="/topics/63537d9f4e544064a7ab60a8">React</a>
                    </li>
                    <li>
                    <a href="/topics/63537e1a4e544064a7ab60a9">MongoDB</a>
                    </li>
                </ul>
                </nav>
                 {html.children}
            </body>                      

        </html>
    )
}

module.exports = Def