import React from "react"


class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: []
        }
    }

    onChange(e) {
        this.setState({searchText: e.target.value});
    }

    getResults() {
        calltodb(searchText).then(e => {
            this.setState({searchResults: e.value})
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}

export default Button
