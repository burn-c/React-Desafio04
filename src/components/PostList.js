import React, { Component} from 'react';

import PostItem from './PostItem';

import avatarVinci from '../assets/avatarVinci.png';
import avatarThomas from '../assets/avatarThomas.png';
import avatarEike from '../assets/avatarEike.png';
import avatarCollor from '../assets/avatarCollor.png';

class PostList extends Component {
    state = {
        posts: [
            {
                id:1,
                author: {
                    name: 'Leonardo da Vinci',
                    avatar: avatarVinci
                },
                date: "01 Mai 2019",
                content: "Alguém quer comprar patentes?",
                comments: [
                    {
                        id:1,
                        author: {
                            name: "Thomas",
                            avatar: avatarThomas
                        },
                        content: "Tem WhatsApp?"
                    }
                ]
            },
            {
                id:2,
                author: {
                    name: 'Collor',
                    avatar: avatarCollor
                },
                date: "02 Mai 2019",
                content: "Alguém quer comprar uma Ferrari?",
                comments: [
                    {
                        id:1,
                        author: {
                            name: "Eike",
                            avatar: avatarEike
                        },
                        content: "Qual modelo? Qual cor?"
                    },
                    {
                        id:2,
                        author: {
                            name: "Eike",
                            avatar: avatarEike
                        },
                        content: "Qual forma de pagamento?"
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