import React from 'react';
import './App.css';
import CadastroPost from './components/CadastroPost';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    postsArray:[]
  }

  adicionarPost = (post) =>{
    this.setState({
      postsArray: [...this.state.postsArray, post]
    })
  }


  render() {
    console.log(this.state.postsArray)
    return (
      <div className={'app-container'}>        
        <CadastroPost adicionarPost={this.adicionarPost} />
        {this.state.postsArray.map((i, index)=><Post postInteiro={i}/>)}   
      </div>
    );
  }
}

export default App;
