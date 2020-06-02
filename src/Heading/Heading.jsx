import React from 'react';
import './heading.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button} from 'react-bootstrap';
import Form from '../Landing/Form/form';

class Heading extends React.Component{
    constructor(){
        super();

        this.state={
            Friends:[
                {
                    id:1,
                    name:"Manali",
                    email:"manalisharma2311@gmail.com",
                    imgurl:"/Images/1216.jpg",
                    height : "250px"
                },
                {
                    id:2,
                    name:"Rajsi",
                    email:"rajsiiyadav@gmail.com",
                    imgurl:"/Images/4854.jpg",
                    height : "250px"
                },
                {
                    id:3,
                    name:"Gulista",
                    email:"gullu@gmail.com",
                    imgurl:"/Images/10896.jpg",
                    height : "235px"
                },
                {
                    id:4,
                    name:"Sakshi",
                    email:"saksC@gmail.com",
                    imgurl:"/Images/6844.jpg",
                    height : "235px"
                },
                {
                    id:5,
                    name:"Janhvi",
                    email:"mudrisjanhvi@gmail.com",
                    imgurl:"/Images/417.jpg",
                    height : "235px"
                },
            ]
        }
    }
    render(){
        return(
            <div>
            <div className="top">
            <img src="/Images/leaf4.jpeg" alt="img" className="img-bird2" />
                <div className="main-heading">
                    <i><u>Friends are choosen family</u></i>
                    </div>
            <img src="/Images/leaf4.jpeg" alt="img" className="img-bird" />

                </div>
                {/* <div>
               <CardList Friends={this.state.Friends} />
               </div> */}
               <br/>
               <br/>
               <div className="form">
               <Form Friends={this.state.Friends} />
               </div>
               <br/>
               <br/>
            </div>
        )
    }
}
export default Heading;