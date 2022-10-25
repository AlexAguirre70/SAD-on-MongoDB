import React,{useState} from'react' 

function TestForm =new FormData
const [input,setInput]=useState({
    resources_name:'',
    resources_type:'',
    resources_link:'',
    resources_id: '',
    resources_topic_id:''
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
    const url = "`/topics/${data.subjectName}/${data.topicName}/${data.topicId}/resources/${data.resource.resources_id}?_method=PUT`";
    const formData = new formData(e.target);
    const data2 = {};
    formData.forEach((value, key) => (data[key] = value));

    // Submit the data.
    //const request = new XMLHttpRequest();
   /* request.open("POST", url);
    request.send(formData);*/
}

module.exports = editResource