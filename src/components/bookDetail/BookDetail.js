import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../../queries/queries';


class BookDetails extends Component {

    displayBookDetails = () => {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <p>
                        {book.name}
                    </p>
                    <p>
                        {book.genre}
                    </p>
                    <p>
                        {book.author.name}
                    </p>
                    <p>
                        All Books By This Aurthor
                    </p>
                    <ul className="other-books" >
                        {book.author.books.map(bookDetail => {
                            return <li key={bookDetail._id}>{bookDetail.name}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return null
        }
    }


    render() {
        console.log(this.props);
        return (
            <div id="book-details">
                <p>
                    Book Deatils Here...
                </p>
                {this.displayBookDetails()}
            </div>
        )
    }
}


export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                _id: props.bookId
            }
        }
    }
}
)(BookDetails);