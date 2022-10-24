const React = require('react') 
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
            <form method='POST' action={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/${data.resource.resources_id}?_method=PUT`}>
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resourceName'>Resource Name</label>
                    <input className='form-control' id='name' name="resourceName" defaultValue={`${data.resource.resources_name}`}  />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resourceType'>Resource Type</label>
                    <input  className='form-control'  id='rType' name='resourceType' defaultValue={`${data.resource.resources_type}`}/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resourceLink'>Resource Link</label>
                 <input className='form-control'  id='Rlink' name='resourceLink' defaultValue={`${data.resource.resources_link}`}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </form>
          </main>
      </Def>
    )
  }

module.exports = editResource