import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../../queries/queries';
import BookDetail from '../bookDetail/BookDetail';


class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,

        }
    }


    renderBooks = () => {
        let data = this.props.data;
        if (data.loading) {
            return <div>Loading...</div>
        } else {
            return (
                <ul id="book-list" >
                    {data.books.map(bookData => {
                        return (
                            <li onClick={(e) => this.setState({ selected: bookData._id })} key={bookData._id}>
                                {bookData.name}
                            </li>
                        )
                    })}
                </ul>
            )

        }
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                {this.renderBooks()}
                <BookDetail bookId={this.state.selected} />
            </div>
        )
    }
}


export default graphql(getBooksQuery)(BookList);