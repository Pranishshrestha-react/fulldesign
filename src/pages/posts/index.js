import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
  } from 'reactstrap';

class Posts extends React.Component{
    
    state ={
        posts: [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
              },

        ]

    }



    render() {
        return <div className="container">
            {
                this.state.posts.map(post => {
                    return (
                        <Card className="mt-3">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">{post.title}</CardTitle>
                            <CardText>{post.body}</CardText>
                            <Button>Button</Button>
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