const React = require('react') 
const Def = require('../default')

function showTopic (data) {
    let topicsFormatted = data.Topic.map((topic)=>{
      return(

      <div className='col-sm' key={topic.topic_id}>
       <a href={`/topics/${topic.topic_subject}/${topic.topic_name}/${topic.topic_id}`}>
        <button className='button'>
        {topic.topic_name} 
        </button>
      </a>
      </div>
    ) 
    })
   
    return (
      <Def>
          <main>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                 <img src='/images/senior-soft-dev.jpg' id='Senior'alt='Senior Software Developer'/> 
                </div>
                <div className='col-sm-8'>
                <h2>Let's share Resources about </h2>
                <h1><strong>{data.subjectName}</strong></h1>
                <h3>Choose a Topic Below</h3>
                </div> 
               </div>
            </div>               
            <div className='container'>
              <div className='row'>
                {topicsFormatted}
              </div> 
            </div>
            </main>
      </Def>
    )
  }

module.exports = showTopic 