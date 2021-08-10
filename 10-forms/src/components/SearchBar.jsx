import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    render() {
        return (
            <div className="ui segment ">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

// controlled vs uncontrolled components

// controlled [WE ARE IN CONTROL] :
// setting value for a component using current state
// we can get the value of input at any instant of time ... without interacting with browser's DOM!

// uncontrolled [GIVING CONTROL TO BROWSER DOM] :
// letting browser DOM handle change (which might cause some problems)
// to find the current value of input, we must reach the DOM, find the value and pull it (phew a lot of tasks!)
