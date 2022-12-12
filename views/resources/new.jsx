import React,{useState}  from 'react'
const Def = require('../default')

function newresource(data){

      return (
      <Def>
         <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../../../../css/style.css"/>
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
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input className='form-control' id='resources_name' name="resources_name" defaultValue='' required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input   className='form-control' id='resources_type' name='resources_type' defaultValue='' required/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                 <input className='form-control'  id='resources_link' name='resources_link' defaultValue='' required/>
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
                    <div>
                    <button  type='submit'  className='button' >Add My Resource</button>
                    </div>
                </div>
            </form>
            <div>
                    <a href={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}`}>
                    <button id='back' className='btn btn-secondary'>Go Back </button>
                     </a>
            </div>
        </div>  
       </main> 
     </Def>       
    )
}
module.exports = newresource