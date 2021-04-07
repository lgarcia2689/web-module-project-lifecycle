/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  
  state = {
    myCard:'',
    followers:[]
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/lgarcia2689')
            .then(res=>{
                this.setState({
                    myCard: res.data
                });
            })
            .catch(err=>{
                console.log(err);
            })
     axios.get('https://api.github.com/users/lgarcia2689/followers')
            .then(res=>{
              console.log(res.data)
                this.setState({
                  followers: res.data
                });
            })
            .catch(err=>{
                console.log(err);
            })        
  }

  render() {
    return(  
      <div className = "container">
        <div className="header">
      <p>My info : {this.state.myCard.name}</p>
      <img width= "80"src = {this.state.myCard.avatar_url}/>
      <p>Location: {this.state.myCard.location}</p>
      <p>Public Repos: {this.state.myCard.public_repos}</p>
      </div>

      <div className="header">
     
      </div>
   
      
        <div className = 'cards'>
        <h1>Followers: {this.state.myCard.followers}</h1>
                {
                    this.state.followers.map(follower => {
                        return (
                          <div className = "card">
                            <h3>Login : {follower.login}</h3>
                            <img src = {follower.avatar_url} width="50"/>
                            <p>Type: {follower.type}</p>
                          </div>
                        );
                    })
                }
           </div>







           <div className = "container">
             <form type="text">  
             <input></input>

             </form>
             <h1>Title</h1>
             <p>Lorem ipsum</p>
             <div className = "imageContainer">
               <img></img>
             </div>
           </div>
          


  </div>
    );
  } 
}
export default App;




