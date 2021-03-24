import React, { Component } from 'react';
import './App.css';
class App extends Component {
    state = { setStatus: false ,
              data:{}  ,
              input:"", 
            }

 getApi = () => {
                fetch(`https://api.nasa.gov/neo/rest/v1/neo/${this.state.input}?api_key=eG2WdJM0Hh4pFGjuomI696i4tnVmf25hi9gd59XO`)
                  .then((res) => res.json())
                  .then((obj) => {
                    this.setState({
                        data: obj
                    });
                  });
              };


getRandomApi = () => {
                fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
                  .then((res) => res.json())
                  .then((obj) => {
                    console.log(obj);
                    const dataArray= obj?.near_earth_objects;
                    this.setState({
                        data: dataArray[Math.floor(Math.random() * 20)]
                    });
                  });
              };
              
 
inputHandler = (evt)=>{
                //console.log(evt.target.value);
                const temp = evt.target.value;
                this.setState({
                    input: temp
                });
                 }
 submitHandler=()=>{
                    this.getApi();
                  }
                        
randomHandler = ()=>{
                      this.getRandomApi()
                  }                  

    render() { 
       // console.log("data",this.state.data)
        return (
            <div className="App">
              <div>
              <input type='text' placeholder="Enter Asteroid ID" onChange={this.inputHandler}></input> 
             <button id='mybtn' type='submit' onClick={this.submitHandler} disabled={this.state.input.length === 0? true:false}>Submit</button>
             <button id='mybtn' type='button' onClick={this.randomHandler} >RandomAteroid</button> 
             </div>

                { Object.keys(this.state.data ).length > 0 &&
            ( 
              <>
              <label>  name </label> <p>{this.state.data?.name}</p>
           
              <label>  nasa_jpl_url</label> <p>{this.state.data?.nasa_jpl_url}</p>
        
              <label>  is_potentially_hazardous_asteroid </label> <p>{this.state.data?.is_potentially_hazardous_asteroid.toString()}</p>
              
              </>
            ) }
            
            </div>
          );
        }
        ;
    }

 
export default App ;