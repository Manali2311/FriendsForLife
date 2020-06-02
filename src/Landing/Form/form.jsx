import React from 'react';
import {InputGroup , FormControl , Button} from 'react-bootstrap';
import './form.css';
import CardList from '../Card/Card-list/card-list';

class Form extends React.Component{
  constructor(){
    super();

    this.state={
      name : "",
      last : "",
      email : "",
      image : null
    }
  }
  
  name = (e) =>{
    this.setState({
        name : e.target.value
    })
  }

  Last = (e) =>{
    this.setState({
        last : e.target.value
    })
  }

  email = (e) =>{
    this.setState({
        email : e.target.value
    })
  }

  show = () =>{
    const arr = this.props.Friends;
    arr.push({
      id : 6,
      name : this.state.name,
      email : this.state.email,
      imgurl: this.state.image,
      height : "235px"
    })

    this.setState({
      Friends : arr
    })
  }
  
  image = (e) =>{
this.setState({
  image : URL.createObjectURL(e.target.files[0])
})
  }

    render(){
    return(
      <>
      <br/>
      <br/>
        <div className="formm">
          <div className="head">
        <img src="/Images/leaf.jpeg" alt="img" className="imgg" />
        <div className="h2">Register Frndzz</div>
        <img src="/Images/leaf.jpeg" alt="img" className="imgg" />
        </div>
        <br/>
<InputGroup className="mb-3">
    <InputGroup.Prepend>
     <InputGroup.Text>First and last name</InputGroup.Text>
    </InputGroup.Prepend>
  <FormControl value={this.state.name} onChange={this.name} />
  <FormControl value={this.state.last} onChange={this.Last} />
</InputGroup>

<InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Email.."
      value={this.state.email}
      onChange={this.email}
    />
    </InputGroup>

    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Profile</InputGroup.Text>
    </InputGroup.Prepend>
    {/* <FormControl type="file" /> */}
    <FormControl
      type="file" className="file" accept=".png"
      onChange={this.image}
      />
    </InputGroup>
     
{/* <input type="file" class="custom-file-input" id="inputGroupFile04"/>
<label class="custom-file-label" for="inputGroupFile04">Choose file
</label> */}

     
  
  <Button className="butt" variant="btn btn-outline-dark" onClick={this.show}>Insert Frndz</Button>
        </div>
        <br/>
        <br/>
        <div className="fri">
      <CardList Friends={this.props.Friends} />
      </div>
        </>
    )
    }
}
export default Form;