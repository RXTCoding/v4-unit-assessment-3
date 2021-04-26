import React, {Component} from 'react';
import './App.css';
import Header from './component/Header';
import Shelf from './component/Shelf';
import SearchBar from './component/SearchBar';
import Booklist from './component/Booklist';
import Data from './react-starter/Data'
class App extends Component {
  constructor(){
    super()
    this.state = {
      books:[],
      shelf:[]
    }
  }

  // addToShelf(){
      
  // }

  // clearShelf(){

  // }

  // filterBooks(){

  // }

  // reset(){

  // }

  render () {
    return (
      <div className="App">

        <div className='topHalf'>
        <Header/>
        <SearchBar/>
        </div>

        <div className='bottomHalf'>
        <Shelf/>
        <Booklist/>
        </div>

      </div>
    );
  }
}

export default App;
