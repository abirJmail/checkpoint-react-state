import React, { Component } from "react";
import "./App.css";



class App extends Component {
  
    state = { show : true, };
    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
          <div className="App">
                <button onClick={ this.toggleDiv }>Toggle div</button>
                <br /><br />
                { this.state.show && <Box /> }
            </div>
        );
    }
}

class Box extends Component{
  
  state = {
    person: {
      fullName : "Abir Jmail",
      bio : "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
      imgSrc : "https://avatars.githubusercontent.com/u/82514715?v=4",
      profession : "Full stack developer",
    },
    arr: [],
  };
    render(){
        return(
            <div>
              { this.state.person.fullName} <br /><br />
              { this.state.person.bio} <br /><br />
              { this.state.person.profession}
              </div>
        )
    }
}

export default App;