const React=require('react')
const Def = require('../default')

function newresource(html){
    return (
      <Def>
        <div className='container'>
            <form method='POST' onChange={{handleChange}}  action={`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/`}>
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input onChange={handleChange} className='form-control' id='resources_name' name="resources_name" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input  onChange={handleChange} className='form-control' id='resources_type' name='resources_type' />
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                 <input onChange={handleChange} className='form-control'  id='resources_link' name='resources_link'/>
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_topic_id'>Topic ID</label>
                 <input onChange={handleChange}  className='form-control'  id='resources_topic_id' name='resources_topic_id' value={data.topicId} readOnly={true}/>
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_id'>Resources ID</label>
                 <input onChange={handleChange}  className='form-control'  id='resources_id' name='resources_id' value={0} readOnly={true}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button onClick={handleSubmit} type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </form>
        </div>  
     </Def>       
    )
}
module.exports = newresource