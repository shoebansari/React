
function User(props) {
  const renderComponent=()=>{
      throw new Error('This is Error')
  }
  return (
    <div className="App">
      {props.error==='Error'? renderComponent():<h1>USER COMPONENT</h1>}
    </div>
  );
}

export default User;
