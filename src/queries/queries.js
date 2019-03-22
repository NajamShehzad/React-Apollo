import { gql } from 'apollo-boost';

const getAutherQuery = gql`
{
  authors{
    name
    _id
    books{
      name
    }
  }
}
`


const getBookQuery = gql`
{
  books{
    name
    _id
  }
}

`

const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authorId:ID!){
    addBook(name:$name,genre:$genre,authorId:$authorId){
        name
        _id
    }
}

`


export { getAutherQuery, getBookQuery, addBookMutation };