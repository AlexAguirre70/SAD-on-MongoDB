import React,{useState} from 'react' 
const Def = require('../default')


function showTopicRes (data) {
  let resourcesFormatted = data.resources.map((resources)=>{
  
    return(

        <div className='m-1 border border-dark col-sm-3 rounded' key={resources.resources_id}>
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
            <h1>{data.subjectName} - {data.topicName}</h1>
            <a href={`/topics/${data.subjectName}`}>
            <button className='btn btn-outline-secondary'>Explore Another {data.subjectName} Topic</button>
            </a>
          <section>
          <h2>Resources:</h2>
          <div className='containter'>
            <div className='row'>
            {resourcesFormatted} 
            </div>
         </div>             
          </section>        
          <section>
            <h2>Add Resource Form:</h2>
            <div className='container'>
            <form method='POST' action={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/`}>
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input className='form-control' id='resources_name' name="resources_name" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input  className='form-control' id='resources_type' name='resources_type' />
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='resources_link'>Resource Link</label>
                 <input className='form-control'  id='resources_link' name='resources_link'/>
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='resources_topic_id'>Topic ID</label>
                 <input className='form-control'  id='resources_topic_id' name='resources_topic_id' value={data.topicId} readOnly={true}/>
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_id'>Resources ID</label>
                 <input  className='form-control'  id='resources_id' name='resources_id' value={0} readOnly={true}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </form>
        </div>  
             </section>
            </main>
      </Def>
    ) 
  }

module.exports = showTopicRes