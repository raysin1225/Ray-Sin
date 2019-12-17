import React from 'react';
import Post from './Post';
import './style.css';

class PostList extends React.Component {

    // setup
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

        componentDidMount(){
           
            fetch("https://cdn.oneshop.cloud/lesson5_api_3.json",
            {
                method:"GET"
            }
            )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    posts : data
                });
            })
            .catch((error) => {
                console.log(error);
            });

        }
    // renderingggit add .
    render(){
        return (
            <div>
                <div className="nav">Postssssss</div>
                <div className="post-list">
                    {this.state.posts.map((a) => {
                        return (
                            <Post 
                                title={a.post.content.title} 
                                description={a.post.content.description}
                                thumbnail={a.post.image.thumbnail}
                                likes={a.post.likes}
                                date={a.post.date}
                            /> 
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default PostList;

