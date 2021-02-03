import React from 'react';
import axios from 'axios';
import {
    Card, Spinner, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

const BASE_URL ="https://jsonplaceholder.typicode.com"

class Users extends React.Component{

    state ={
        users: [],
        isLoading :false
    }

    componentDidMount = () => {
        this.setState({
            ...this.state,
            isLoading:true
        })

        axios.get(`${BASE_URL}/users`).then(response =>{
            this.setState({
                users: response.data,
                isLoading:false
            })

        })

    }

    render() {
        if(this.state.isLoading) return <Spinner style={{margin:"20% 0 0 50%"}} type="grow" color="danger" />
        return <div className="container">
            {
                this.state.users.map(user => {
                    return(
                        <Card key={user.id} className="mt-3">
                            <CardBody>
                            <CardTitle tag="h5">{user.username}</CardTitle>
                            <CardText>{user.address.street}</CardText>
                            <Button color="warning" style={{margin: "0 0 0 85%"}}><Link to={`/users/${user.id}`}>View Detail</Link></Button>
                            </CardBody>
                            
                            <CardFooter>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Created By {user.id}</CardSubtitle>
                            </CardFooter>
                        </Card>
                    )
                }

                )
            }
        </div>

    }



}


export default Users;