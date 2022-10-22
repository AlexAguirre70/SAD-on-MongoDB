const React = require('react') 

const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                 <img src='/images/senior-soft-dev.jpg' id='Senior'alt='Senior Software Developer'/> 
                </div>
                <div className='col-sm-8'>
                <h1>Social Software Development Learning</h1>
                <h3>made easy even for our geriatric community</h3>
                </div> 
               </div>
            </div>               
            <div className='container'>
              <div className='row'>
                <div className='col-sm'>  
                <a href="/topics/6350e5774e544064a7ab6088">
                <img src="/images/node-med.jpg" alt="Learn Node.js"/>
                </a>
                </div>
                <div className='col-sm'>  
                <a href="/topics/6350e5a74e544064a7ab6089">
                <img src="/images/react-med.jpg" alt="Learn React"/>
                </a>
                </div>
                <div className='col-sm'>  
                <a href="/topics/6350e6434e544064a7ab608a">
                <img src="/images/mongodb-med.jpg" alt="Learn React"/>
                </a>
                </div>
              </div> 
            </div>
              <h2>Start Learning,Engaging and Contributing Your Favorite Resources</h2>
            </main>
      </Def>
    )
  }

module.exports = home   // This will export this module to be able to be used with other views  