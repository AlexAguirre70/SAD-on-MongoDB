import React from 'react' 
const Def = require('../default')  


function editResource(data) {   
    return (
      <Def>
         <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../../../../css/style.css"/>
          </head>
          <main>
          <h1>Editing the {data.topicName} Resource</h1>
                <h2>{data.resource.resources_name}</h2>
            <form method='POST' action={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/${data.resource.resources_id}?_method=PUT`}  encType="application/x-www-form-urlencoded">
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input  className='form-control' id='resources_name' name="resources_name" defaultValue={data.resource.resources_name} key={true} required/>
                </div> 
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input  className='form-control'  id='resource_type' name='resources_type' defaultValue={data.resource.resources_type} key={true} required/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                  <input  className='form-control'  id='resources_link' name='resources_link' defaultValue={data.resource.resources_link} key={true} required/>
                </div>
                 <div className='form-group col-sm-6'>
                    <label   htmlFor='resources_id'>Resource Id</label>
                    <input  className='form-control'  id='resources_id' name='resources_id' defaultValue={data.resource.resources_id} key={true} readOnly={true}/>
                 </div>
            </div> 
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_topic_id'>Resource Link</label>
                  <input  className='form-control'  id='resources_topic_id' name='resources_topic_id' defaultValue={data.resource.resources_topic_id} key={true} readOnly={true}/>
                </div>
            </div>      
            <div className='row' >     
                <button id="editBtn" className='button' type='submit' >Submit Changes</button>
            </div>    
            </form>
            <div>
                    <a href={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}`}>
                    <button id='back' className='btn btn-secondary'>Go Back </button>
                     </a>
            </div>
          </main>
      </Def>
    )
  }

module.exports = editResource