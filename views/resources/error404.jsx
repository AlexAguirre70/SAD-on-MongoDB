const React = require('react') 
const Def = require('../default')  


function error404 () {
    return (
      <Def>
          <main>
              <div>
              <img src="../images/error404-robot,jpg" id="robot" alt="confused robot error 404" />
              <h1>404: PAGE NOT FOUND</h1>
              <img src="/images/error404-robot,jpg" id="robot" alt="confused robot error 404" />
              <p>Oops, sorry, we can't find this page!</p>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404  