import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        topspots: []
      };
  }
    
  componentWillMount() {
    // see readme for additional notes on the parts to this function
    Axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data) 
    .then(topspots => this.setState({ topspots }));
  }
  
  render() {
    return (

      <div className='container'>
      <div className='App'></div>
        
        <div className="mt-5" style={{width: '50rem' }}>
          <div className="body bg-light">
            <h1 className="title">San Diego Top Spots</h1>
            <h6 className="subtitle mb-2 text-muted">A list of the top 30 places to see in San Diego, California.</h6>
          </div>
        </div>
        <div className="" style={{width: '50rem' }}>
                  
                  <div>
                    { 
                    this.state.topspots.map(topspot => (
                    <TopSpot
                      key={topspot.id}
                      name={topspot.name}
                      description={topspot.description}
                      location={topspot.location} 
                    />
                       ))
                    }
                  
                  
                   {/* <pre>
                     { JSON.stringify(this.state.topspots, null, 2) }
                   </pre> */}

                  </div>
                </div>



      </div>
    );
  }
}

export default App;
