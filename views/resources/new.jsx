import React,{useState}  from 'react'
const Def = require('../default')

function newresource(data){

      return (
      <Def>
         <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../../../../style.css"/>
          </head>
        <main>
         <div> 
            <h1>Let's Share Your Best {data.subjectName} Resources for</h1>
            <h2> {data.topicName}</h2>

        </div>   
        <div className='container'>
            <form method='POST' action={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/`} encType="application/x-www-form-urlencoded">
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='subject_name'>Subject</label>
                    <input className='form-control' id='subject_name' name="subject_name" defaultValue={data.subjectName} readOnly={true}/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'></label>
                    <input  className='form-control' id='topic_name' name='topic_name' defaultValue={data.topicName} readOnly={true}/>
                </div>             
            </div>       
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input className='form-control' id='resources_name' name="resources_name" defaultValue='' />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input   className='form-control' id='resources_type' name='resources_type' defaultValue=''/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                 <input className='form-control'  id='resources_link' name='resources_link' defaultValue=''/>
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_topic_id'>Topic ID</label>
                 <input   className='form-control'  id='resources_topic_id' name='resources_topic_id' defaultValue={data.topicId} readOnly={true} />
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_id'>Resources ID</label>
                 <input  className='form-control'  id='resources_id' name='resources_id' defaultValue={data.maxId} readOnly={true}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button  type='submit'  className='button' >Add My Resource</button>
                </div>
            </form>
        </div>  
       </main> 
     </Def>       
    )
}
module.exports = newresource