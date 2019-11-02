import React, { Component} from 'react';

import PostItem from './PostItem';

import avatarVinci from '../assets/avatarVinci.png';

class PostList extends Component {
    state = {
        posts: [
            {
                id:1,
                author: {
                    name: 'Leonardo da Vinci',
                    avatar: 'https://i.pravatar.cc/150?img=1'
                },
                date: "01 Mai 2019",
                content: "Alguém quer comprar patentes?",
                comments: [
                    {
                        id:1,
                        author: {
                            name: "Thomas",
                            avatar: 'https://i.pravatar.cc/150?img=1'
                        },
                        content: "Tem WhatsApp?"
                    }
                ]
            },
            {
                id:2,
                author: {
                    name: 'Collor',
                    avatar: 'https://i.pravatar.cc/150?img=1'
                },
                date: "02 Mai 2019",
                content: "Alguém quer comprar uma Ferrari?",
                comments: [
                    {
                        id:1,
                        author: {
                            name: "Eike",
                            avatar: 'https://i.pravatar.cc/150?img=1'
                        },
                        content: "Qual modelo? Qual cor?"
                    }
                ]
            },
        ]
    };
    
    render() {
        const { posts } = this.state;
    
        return (
          <div className="postlist">
            {posts.map(post => (
              <PostItem key={post.id} {...post} />
            ))}
          </div>
        );
      }
    }
    
    export default PostList;