//TOPICS INDEX PAGE VIEW
const React = require('react')  //This includes the React middleware to render views via the server

const Def = require('../default') //This includes the default html views frameworks

function index (data) {
    let topicsFormatted = data.topics.map((topic) => {
      return (
        <div>
          <h2>{topic.name}</h2>
          <img src={topic.pic} alt={topic.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>TOPIC INDEX PAGE</h1>
              {topicsFormatted}
          </main>
      </Def>
  )
  }
  
  module.exports = index  //This makes the view detail index page available 
  

  