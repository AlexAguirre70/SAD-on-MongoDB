import React,{useState}  from 'react'
const Def = require('../default')

function newresource(data){

    const[values, setValues] = useState({ 
        subject_name:'',
        topic_name:'',
        resources_id: '',
        resouces_name: '', 
        resources_link:'', 
        resources_type: '',
        resources_topic_id:'' 
      });
      
      const saveFormData = async () => {
        const response = await fetch('/resources/new', {
          method: 'POST',
          body: JSON.stringify(values)
        });
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`); 
        }
      }
      const handleChange= (e)=>{
        this.setState({name: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault(); // Prevent default submission
        try {
          await saveFormData();
          alert('Your registration was successfully submitted!');
          setValues({
            topic_name:'',resources_id:'', resources_name: '', resources_link: '', resources_type: '', resources_topic_id:'' 
          });
        } catch (e) {
          alert(`Registration failed! ${e.message}`);
        }
        }  
    console.log(data)
      return (
      <Def>
        <div className='container'>
            <form>
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='subject_name'>Subject</label>
                    <input className='form-control' id='subject_name' name="subject_name" value={data.subjectName} readOnly={true}/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'></label>
                    <input  className='form-control' id='topic_name' name='topic_name' value={data.topicName} readOnly={true}/>
                </div>             
            </div>       
            <div className='row'>    
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_name'>Resource Name</label>
                    <input onChange={handleChange} className='form-control' id='resources_name' name="resources_name" value={values.resouces_name} />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='resources_type'>Resource Type</label>
                    <input  onChange={handleChange} className='form-control' id='resources_type' name='resources_type' value={values.resources_type}/>
                </div>             
            </div>    
            <div className='row'>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_link'>Resource Link</label>
                 <input onChange={handleChange} className='form-control'  id='resources_link' name='resources_link'value={values.resources_link}/>
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_topic_id'>Topic ID</label>
                 <input   className='form-control'  id='resources_topic_id' name='resources_topic_id' value={data.topicId} readOnly={true} />
                </div>
                <div className='form-group col-sm-6'>
                  <label   htmlFor='resources_id'>Resources ID</label>
                 <input  className='form-control'  id='resources_id' name='resources_id' value={data.maxId}/>
                </div>
            </div>    
                <div className='form-group'>
                    <button onSubmit={onSubmit} type='submit'  className='btn btn-primary' >Submit Changes</button>
                </div>
            </form>
        </div>  
     </Def>       
    )
}
module.exports = newresource