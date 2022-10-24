const React = require('react') 
const Def = require('../default')

function showTopicRes (data) {
  let resourcesFormatted = data.resources.map((resources)=>{
    return(
    <div className='row' key={resources.resources_id}>
        <div className='border border-dark col-sm-3 rounded'>
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
            {resourcesFormatted} 
         </div>             
          </section>        
          <section>
            <h2>Add Resource Form:</h2>
            <form method='POST' action={`/topics/${data.subjectName}/${data.topicName}/${data.resources.resources_topic_id}/resources/`}>
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resource_name'>Resource Name</label>
                    <input className='form-control' id='name' name="resource_name"/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resource_type'>Resource Type</label>
                    <input  className='form-control' id='rType' name='resource_type' />
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resource_link'>Resource Link</label>
                 <input className='form-control'  id='Rlink' name='resource_link'/>
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resource_topic_id'>Topic ID</label>
                 <input className='form-control'  id='resTopicId' name='resource_topic_id' defaultValue={data.topicId} readOnly={true}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </form>
             </section>
            </main>
      </Def>
    ) 
  }

module.exports = showTopicRes