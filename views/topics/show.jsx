import React from 'react' 
const Def = require('../default')

function showTopicRes (data) {
  let resourcesFormatted = data.resources.map((resources)=>{
  
    return(
        <div className='container m-1 border border-dark col-sm-3 rounded' key={resources.resources_id}>
            <h5>{resources.resources_name}</h5>
            <p><strong>Resource Type:</strong> {resources.resources_type}</p>
            <p><a href={`${resources.resources_link}`}>{resources.resources_link}</a>
          </p>
              <a href={`/topics/${data.subjectName}/${data.topicName}/${resources.resources_topic_id}/resources/${resources.resources_id}`}>               
               <button type='button' className='btn btn-outline-primary'>Edit</button>
              </a>        
                <form className='formBtn' method='POST' action={`/topics/${data.subjectName}/${data.topicName}/${resources.resources_topic_id}/resources/${resources.resources_id}?_method=DELETE`}>
                <button type='submit' className='btn btn-outline-danger'>Delete</button>
              </form>    
        </div>
  ) 
})
    return ( 
      <Def>
          <head>
                <title>SAD-on-MongoDB</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../../style.css"/>
          </head>
          <main>
          <section>
            <h1>{data.subjectName} - {data.topicName}</h1>
            <a href={`/topics/${data.subjectName}`}>
            <button className='btn btn-secondary'>Explore Another {data.subjectName} Topic</button>
            </a>
          </section>  
          <section>
          <h2>Resources:</h2>
          <div>
              <a href={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/new`}>
              <button className='button'>Share a New Resource</button>
              </a>
          </div>
          <div className='containter'> 
            <div className='row d-flex justify-content-center'>
            {resourcesFormatted} 
            </div>
         </div>
                     
          </section>        
            </main>
      </Def>
    ) 
  }

module.exports = showTopicRes