import React from 'react';
import axios from 'axios';
import {
    Card, Spinner, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
  } from 'reactstrap';
 

const BASE_URL = "https://jsonplaceholder.typicode.com"

class Albums extends React.Component{
    
    state ={
        albums : [],
        isLoading : false

    }

    componentDidMount = () => {
        this.setState({
            ...this.state,
            isLoading:true
        })

        axios.get(`${BASE_URL}/albums`).then(response =>{
            this.setState({
                albums: response.data,
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
                this.state.albums.map(album => {
                    return (
                        <Card key={album.id} className="mt-3">
                            <CardBody>
                            <CardTitle tag="h5">{album.title}</CardTitle>
                            <CardText>{album.body}</CardText>
                            
                            </CardBody>
                            <CardFooter>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Created By {album.userId}</CardSubtitle>
                            </CardFooter>
                        </Card>
                    )
                }

                )
            }
        </div>
    }


}

export default Albums;