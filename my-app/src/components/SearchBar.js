import React, { Component } from 'react'
import names from '../names'
import importedNames from '../names'

export default class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames
         
      }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filteredNames = importedNames.filter(name => {
            return name.toLocaleLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

  render() {
    return (
    
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input onChange={(event) => this.handleChange(event)} placeholder='search names'></input>
        </form>
        
        <div style={{margin: 'auto'}}>
            {this.state.names.map(name =>{
                return <p key={name}>{name}</p>
            })}
        </div>
        
    </div>
    )}
}
