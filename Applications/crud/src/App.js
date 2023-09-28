import React from 'react'

import {Container, Row, Form, FormGroup, FormControl, FormLabel, Button, Alert, Table} from 'react-bootstrap'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name:'',
      location:'',
      showAlert:false,
      alertMsg:'',
      alertType:'success',
      records:[],
      update:false,
    }
  }

  componentWillMount(){
    this.fetchAllRecords();
  }
 
  handleChange=(evt)=>{
    console.log('evt',evt);
    this.setState({
      [evt.target.name]:evt.target.value,
    })
  }

  addrecord=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var body = JSON.stringify({name:this.state.name,location:this.state.location})
    console.log('body',body);
    
    fetch("http://localhost:8000/api/create",{
      method:"POST",
      headers:myHeaders,
      body:body
    }).then((response)=>response.json()).then((result)=>{
      console.log('result123123', result);    
      this.setState({name:'',location:'',showAlert:true,alertMsg:result.respose,alertType:'success'})
    })
  }

  //Fetch ALL Records
  fetchAllRecords=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    
    fetch("http://localhost:8000/api/view",{
      method:"GET",
      headers:myHeaders,
    }).then((response)=>response.json()).then((result)=>{
      console.log('sdfsdfsdf', result);    
      this.setState({records:result.response})
    })
  }


  //Fetch record By id
  editRecord=(id)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    
    fetch("http://localhost:8000/api/view/"+ id ,{
      method:"GET",
      headers:myHeaders,
    }).then((response)=>response.json()).then((result)=>{
      console.log('recordsBY id', result);    
      this.setState({update:true, id:id, name:result.response[0].name, location:result.response[0].location});
    })
  }

   //Update Records
   updateRecord=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    
    var body = JSON.stringify({id:this.state.id, name:this.state.name, location: this.state.location})
    console.log('body123', body);
    
    fetch("http://localhost:8000/api/update" ,{
      method:"POST",
      headers:myHeaders,
      body:body,
    }).then((response)=>response.json()).then((result)=>{
      console.log('recordsBY id', result);    
      this.setState({update:false, id:'', name:'', location:'', alertType:'success', alertMsg:result.response, showAlert:true});
      this.fetchAllRecords();
    })
  }

   //DELETE record By id
   deleteRecord=(id)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    
    fetch("http://localhost:8000/api/delete/"+ id ,{
      method:"DELETE",
      headers:myHeaders,
    }).then((response)=>response.json()).then((result)=>{
      console.log('recordsBY id', result);    
      this.setState({showAlert:true, alertMsg:result.response, alertType:'danger'});
      this.fetchAllRecords();
    })
  }

  render(){
  return (
    <div className="App">
     <Container>
       {this.state.showAlert===true?
       <Alert variant={this.state.alertType} onClose={()=>{this.setState({showAlert:false})}} dismissible>
         <Alert.Heading>{this.state.alertMsg}</Alert.Heading>
       </Alert>:null}
       <Row>
         <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.records.map((record)=>{
                    return (
                      <tr>
                        <td>{record.id}</td>
                        <td>{record.name}</td>
                        <td>{record.location}</td>
                        <td>
                          <Button variant="info" onClick={()=>this.editRecord(record.id)}>Edit</Button>
                        </td>
                        <td>
                          <Button variant="danger" onClick={()=>this.deleteRecord(record.id)}>Delete</Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
         </Table>
       </Row>
       <Row>
         <Form>
           <FormGroup>
             <FormLabel>Enter the Name</FormLabel>
             <FormControl type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter Name"></FormControl>
           </FormGroup>
           <FormGroup>
             <FormLabel>Enter the Location</FormLabel>
             <FormControl type="text" name="location" onChange={this.handleChange} placeholder="Enter Location" value={this.state.location}></FormControl>
           </FormGroup>
           <br/>
          {this.state.update?<Button onClick={this.updateRecord}>Update</Button>:<Button onClick={this.addrecord}>Save</Button>}
         </Form>
       </Row>
     </Container>
    </div>
  );
  }
}

export default App;
