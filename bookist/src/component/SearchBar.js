import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          userInput:""
        }
      }

    render () {
      return (<div className='searchBar'>
        Hello 
      </div>
      );
    }
  }

  export default SearchBar;