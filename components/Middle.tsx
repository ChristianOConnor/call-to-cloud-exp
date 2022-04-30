import React from 'react';
import { Button } from 'react-bootstrap';

class Middle extends React.Component {
    handleClick() {
        console.log('this is:', this);
      }
    // This syntax ensures `this` is bound within handleClick.  // Warning: this is *experimental* syntax.  handleClick = () => {    console.log('this is:', this);  }

    async fetchNonce() {
        const response = await fetch("http://localhost:<PORT NUMBER HERE>/path/to/endpoint")
        console.log(response.status)
        const data = await response.json()
        console.log(data)
    }

    render() {
      return (
        <div className="col-md-12 text-center">
            <Button variant='primary' onClick={this.fetchNonce}>
                Click me
            </Button>
        </div>
      );
    }
  }

export default Middle;