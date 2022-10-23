const React = require('react') 
const Def = require('../default')

function showTopics (data) {
    return ( 
      <Def>
          <head>
                <title>SAD-on-MongoDB</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../../style.css"/>
          </head>
          <main>
            <h1>{data.subjectName} - {data.topicName}</h1>
            <button id='btn btn-light'href={`/topics/${data.subjectName}`}>Explore Another {data.subjectName} Topic</button>
          <section>
          <h2>Resources:</h2> 
            <button className='btn btn-primary'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
            
          </section>        
          <section>
            <h1>Add Resource Form:</h1>
             </section>
            </main>
      </Def>
    )
  }

module.exports = showTopics