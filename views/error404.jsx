const React = require('react')  //This includes React to create views with html and js server side rendering

const Def = require('./default')  //This will include the default jsx view framework that is passed 

//The 404 error function to be ran when a path is not found.
function error404 () {
    return (
      <Def>
          <main>
              <div>
                <img src="/images/error404-robot.jpg" id="robot" alt="confused robot error 404" />
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404  //This will export to be able to be used with other JSX views  