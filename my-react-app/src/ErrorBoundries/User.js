import { Component } from "react";

class User extends Component {
  render() {
    if (false) {  //pass true to run this
      throw new Error('Custom error.');
    } else {
      return (
        <div>
          <h1>User component</h1>
        </div>
      );
    }
  }
}

export default User;
