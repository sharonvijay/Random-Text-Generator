import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  state = {   title:''   };

  componentDidMount()
  {
    this.fetchText();
    console.log('COMPONENT DID MOUNT');
  }

  fetchText = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>
    {
      const randomindex = Math.floor(Math.random() * 100)
      const {title} = response.data[randomindex];
      this.setState({title:title})

    })
    .catch((error)=>
    {
      console.log(error);
    })
  }
  render() {
    const {title} = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{title}</h1>
          <button className='button' onClick={this.fetchText}>
            <span>Generate Random Text!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
