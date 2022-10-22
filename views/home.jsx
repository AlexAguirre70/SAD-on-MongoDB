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
                <a href="/topics/63537cf04e544064a7ab60a7">
                <img src="/images/node-med.jpg" alt="Learn Node.js"/>
                </a>
                </div>
                <div className='col-sm'>  
                <a href="/topics/63537d9f4e544064a7ab60a8">
                <img src="/images/react-med.jpg" alt="Learn React"/>
                </a>
                </div>
                <div className='col-sm'>  
                <a href="/topics/63537e1a4e544064a7ab60a9">
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

module.exports = home  