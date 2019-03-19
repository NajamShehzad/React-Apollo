import React, { Component } from 'react';
import { graphql } from 'react-apollo';
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

class AddBook extends Component {

    render() {
        console.log(this.props.data)
        return (
            <div>
                Add Book Compoenet
            </div>
        )
    }
}


export default graphql(getAutherQuery)(AddBook);