
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
