import React from 'react';
import axios from 'axios';

import {
    Card, Spinner, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const BASE_URL ="https://jsonplaceholder.typicode.com"

  class User extends React.Component{
  
      state ={
          users: [],
          isLoading :false
      }
  
      componentDidMount = () => {
          this.setState({
              ...this.state,
              isLoading:true
          })
  
          axios.get(`${BASE_URL}/users`)
          .then(response =>{
              this.setState({
                  users: response.data,
                  isLoading:false
              })
  
          })
  
      }
  
      render() {
        const user = this.state.users.find(user => user.id === parseInt(this.props.match.params.id))
        
          if(this.state.isLoading) return <Spinner style={{margin:"20% 0 0 50%"}} type="grow" color="danger" />

        return (
            <div className="container" style={{margin:"10% 0 0 10%"}}> 
                <Card>
                    <CardBody style={{margin:"auto"}}>
                    <CardTitle tag="h5" style={{textAlign:"center"}}>{ user.name }</CardTitle>
                    <CardSubtitle tag="h6" style={{textAlign:"center"}}className="mb-2 text-muted">{user.username}</CardSubtitle>
                    
                    <CardSubtitle tag="h6" style={{textAlign:"center"}}className="mb-2 text-muted">{user.email}</CardSubtitle>
                    <CardText style={{textAlign:"center"}}>{user.address}</CardText>
                    <Button style={{margin:"0 45% 0 35%"}}>BACK</Button>
                    </CardBody>
                </Card>
            </div>
            
            
        )

    }
}

export default User; 