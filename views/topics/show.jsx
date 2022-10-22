const React = require('react') 

const Def = require('../default')

function showTopic (data) {
   console.log(data)
    return (
      <Def>
          <main>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                 <img src='/images/senior-soft-dev.jpg' id='Senior'alt='Senior Software Developer'/> 
                </div>
                <div className='col-sm-8'>
                <h2>Let's share what we know about </h2>
                <h1><strong>{data.subject.subject_name}</strong></h1>
                <h3>Choose a Topic Below</h3>
                </div> 
               </div>
            </div>               
            <div className='container'>
              <div className='row'>
                <div className='col-sm'>  
                <a href="/topics/6350e5774e544064a7ab6088">
                Topic 1
                </a>
                </div>
                <div className='col-sm'>  
                <a href="/topics/6350e5a74e544064a7ab6089">
                Topic 2
                </a>
                </div>
                <div className='col-sm'>  
                <a href="/topics/6350e6434e544064a7ab608a">
                Topic 3
                </a>
                </div>
              </div> 
            </div>
            
            </main>
      </Def>
    )
  }

module.exports = showTopic 