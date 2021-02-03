import React from 'react';
import axios from 'axios';
import {
    Card, Spinner, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
  } from 'reactstrap';
 

const BASE_URL = "https://jsonplaceholder.typicode.com"

class Posts extends React.Component{
    
    state ={
        posts: [],
        isLoading : false

    }

    componentDidMount = () => {
        this.setState({
            ...this.state,
            isLoading:true
        })

        axios.get(`${BASE_URL}/posts`).then(response =>{
            this.setState({
                posts: response.data,
                isLoading:false
            })
            }).catch(error => {
                this.setState({
                    ...this.state,
                    isLoading: false
                })
            })
        }

      
    render() {
        if(this.state.isLoading) return <Spinner style={{margin:"20% 0 0 50%"}} type="grow" color="danger" />
        return <div className="container">
            {
                this.state.posts.map(post => {
                    return (
                        <Card key={post.id} className="mt-3">
                            <CardBody>
                            <CardTitle tag="h5">{post.title}</CardTitle>
                            <CardText>{post.body}</CardText>
                            
                            </CardBody>
                            <CardFooter>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Created By {post.userId}</CardSubtitle>
                            </CardFooter>
                        </Card>
                    )
                }

                )
            }
        </div>
    }


}

export default Posts;