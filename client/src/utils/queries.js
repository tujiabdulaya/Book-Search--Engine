import { gql } from "@apollo/client";

export const GET_ME = gql`
{
    Me{
        _id:
        username:
        email:
        savedBooks {
            bookId
            author
            descrertion
            image
            title
                   
        }
    }
}


`;
