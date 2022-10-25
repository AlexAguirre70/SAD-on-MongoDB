import React,{useState} from 'react' 
const Def = require('../default')  


function editResource(data) {   
    return (
      <Def>
         <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../../../../style.css"/>
          </head>
          <main>
          <h2>Editing the {data.subjectName} {data.topicName} Resource</h2>
                <h3>{data.resource.resources_name}</h3>
            <form>
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input  className='form-control' id='resources_name' name="resources_name" defaultValue={data.resource.resources_name} key={true} />
                </div> 
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input  className='form-control'  id='resource_type' name='resources_type' defaultValue={data.resource.resources_type} key={true}/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                  <input  className='form-control'  id='resources_link' name='resources_link' defaultValue={data.resource.resources_link} key={true}/>
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
            <div className='row'>
                <div className='form-group col-sm-6'>
                <button className='form-control' type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </div>    
            </form>
          </main>
      </Def>
    )
  }

module.exports = editResource