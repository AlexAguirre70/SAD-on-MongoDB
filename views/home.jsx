const React = require('react')  //Includes React in order to render jsx files in views

const Def = require('./default')  //includes the default jsx file to provide the default jsx framework

// the function to pass the hmt js setup for the home page
function home () {
    return (
      <Def>
          <main>
              <h1>Software App For The Developer</h1>
              <div>     
              <img src="/images/river.jpg" alt="river" />
              <img src="/images/space1.jpg" alt="space1" />
              <img src="/images/space2.jpg" alt="space2" />
              </div>
              <p>
                <a href="/topics">
                    <button className="btn-primary"> Topics Page</button>
                </a> 
              </p>
          </main>
      </Def>
    )
  }

module.exports = home   // This will export this module to be able to be used with other views  