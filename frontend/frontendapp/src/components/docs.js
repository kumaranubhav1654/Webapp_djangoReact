import React, { Component} from 'react';

class Docs extends Component {

  state = {
    docs: []
  }

  loadDocs = () => {
    fetch('http://127.0.0.1:8000/api/docs/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.props.token}`
      },
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.setState({docs: data})
      }
    )
    .catch( error => console.error(error))
  }

  render() {
    return (
      <div>
        <h1>Docs</h1>
        { this.state.docs.map( docs => {
          return <h3 key={docs.id}>{docs.title}</h3>
        })}
        <button onClick={this.loadDocs}>Load Docs</button>
      </div>
    );
  }
}

export default Docs;
