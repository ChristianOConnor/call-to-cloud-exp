import React from "react"
import { Button } from "react-bootstrap"

class Middle extends React.Component {
  handleClick() {
		console.log("this is:", this)
	}
  
  // this talks with /pages/api/google
  async imCallingAnAPI() {
    const result = await fetch("/api/google")
    console.log({ result })
  }

  render() {
    return (
      <div className="col-md-12 text-center">
        <Button variant="primary" onClick={this.imCallingAnAPI}>
          Click me
        </Button>
      </div>
    )
  }
}

export default Middle
