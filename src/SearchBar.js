import React from "react";
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    onSubmitForm = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    render() {
           return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type='text' onChange={(event) => this.setState({ term: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;