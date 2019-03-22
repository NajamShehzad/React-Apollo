import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../../queries/queries';


class BookList extends Component {

    renderBooks = () => {
        let data = this.props.data;
        if (data.loading) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {data.books.map(bookData => {
                        return (
                            <li key={bookData._id}>
                                {bookData.name}
                            </li>
                        )
                    })}
                </ul>
            )

        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.renderBooks()}
            </div>
        )
    }
}


export default graphql(getBookQuery)(BookList);