import {gql} from '@apollo/client';

const GET_ME = gql` {
    me {
        _id
        email 
        username
    },
    
    savedBooks {
        bookId
        author
        description
        image
        title
        link
    }
}`;
