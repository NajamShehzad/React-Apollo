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


const getBooksQuery = gql`
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


const getBookQuery = gql`
    query GetBook($_id:ID){
        book(_id:$_id){
            _id
            name
            genre
            author{
                _id
                name
                age
                books{
                    name
                    _id
                }
            }
        }
    }

`


export { getAutherQuery, getBooksQuery,getBookQuery, addBookMutation };