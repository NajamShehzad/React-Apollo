import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAutherQuery, addBookMutation, getBookQuery } from '../../queries/queries';


class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            genre: "",
            authorId: ""
        }
    }

    showlist = () => {
        let authorData = this.props.getAutherQuery;
        if (!authorData.loading) {
            return authorData.authors.map(authorData => {
                return (
                    <option value={authorData._id} key={authorData._id} >
                        {authorData.name}
                    </option>
                )
            })
        } else {
            return <option>Loading aurthors...</option>
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
        console.log(this.state);
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBookQuery }]
        });
    }




    render() {
        const { name, genre, authorId } = this.state;
        console.log(this.props)
        return (
            <div>
                <form id="add-form" onSubmit={this.onSubmit} >
                    <div className="field" >
                        <label>
                            Book Name:
                        </label>
                        <input onChange={this.onChange} name="name" value={name} type="text" />
                    </div>
                    <div className="field">
                        <label>
                            Genre:
                        </label>
                        <input onChange={this.onChange} name="genre" value={genre} type="text" />
                    </div>
                    <div className="field">
                        <label>
                            Author:
                        </label>
                        <select onChange={this.onChange} name="authorId" value={authorId} >
                            <option value="" >
                                Select Aurthor
                            </option>
                            {this.showlist()}
                        </select>
                    </div>
                    <div>
                        <button type="submit" >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default compose(
    graphql(getAutherQuery, { name: "getAutherQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);