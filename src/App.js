import React, { Component } from "react";
import "./App.css";
import {Card,Button }from 'react-bootstrap'

class App extends Component {
  
    state = { show : false, };
    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
          <div >
                <p className="logo">Help </p>
                <div className="App" >
                <Card className="card" >
            <Card.Body >
            <Card.Img variant="top" src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" width="300px"  />
              <Card.Title><h1>Sign in to Yahoo Mail</h1>
                Let's get you into your account</Card.Title>
              <Card.Text>
              Tell us one of the following to get started:
              <ul>
              <li>Sign-in email address or mobile numbe</li>
              <li>Recovery phone number</li>
              <li>Recovery email address</li></ul>
              </Card.Text>
              <Button variant="primary" onClick={ this.toggleDiv }>Continue</Button>
            </Card.Body>
          </Card>
          { this.state.show && <Box /> }
          </div>
            </div>

        );
    }
}

class Box extends Component{
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime : new Date().toLocaleString(),
        count: this.state.count - 1
      })
    }, 1000)
  }

  state = {
    person: {
      fullName : "Abir Jmail",
      bio : "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
      imgSrc : "https://avatars.githubusercontent.com/u/82514715?v=4",
      profession : "Full stack developer",
    },
    curTime :"",
    count : 60,
  };

    render(){
        return(
            <div className="Box">
            <Card >
            <Card.Body>
              <Card.Img variant="top" src={this.state.person.imgSrc} width="300px" style={{ borderRadius: '360%' }}  />
              <Card.Title><h1>welcome { this.state.person.fullName} </h1></Card.Title>
              <Card.Text>
              <h2>{ this.state.person.profession}</h2>
              <p>{ this.state.person.bio}</p>
              <h3>Enter verification code </h3> <br/>
              {this.state.curTime}
              <p>sent to your email </p>
              <p>********h@yahoo.com</p>
              </Card.Text>
              <Button variant="primary" onClick ={this.increment}>resend code in {this.state.count}</Button>
            </Card.Body>
          </Card>
              </div>
        )
        
    }

}


export default App;