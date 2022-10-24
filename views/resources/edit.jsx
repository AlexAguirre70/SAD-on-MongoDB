import React,{useState} from'react' 
const Def = require('../default')  


function editResource(data) {
    const [input,setInput]=useState({
        resources_name:data.resource.resources_name,
        resources_type:data.resource.resources_type,
        resources_link:data.resource.resources_link,
        resources_id: data.resource.resource_id,
        resources_topic_id: data.topicId
    })
    
    function handleChange(e){
        const {name,value}=e.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]:value
            }
        })

    }
    function handleSubmit(e){
        e.preventDefault;
        console.log(input)
    }
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
                    <input om className='form-control' id='resources_name' name="resources_name" value={input.resources_name}  />
                </div> 
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input className='form-control'  id='resource_type' name='resources_type' value={input.resources_type}/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                 <input  className='form-control'  id='resources_link' name='resources_link' value={input.resources_link}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button  type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </form>
          </main>
      </Def>
    )
  }

module.exports = editResource