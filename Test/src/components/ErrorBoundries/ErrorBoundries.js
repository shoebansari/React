import { Component } from "react"

class ErrorBoundries extends Component{
  constructor(){
    super()
    this.state = {hasError:false}
  }


  componentDidCatch(){
    this.setState({hasError:true})
  }

  render(){
    return (
      <div>
        {this.state.hasError?'Error':this.props.children}
      </div>
    )
  }
}


export default ErrorBoundries;