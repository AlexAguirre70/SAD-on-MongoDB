//TOPICS INDEX PAGE VIEW

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
  

  

  