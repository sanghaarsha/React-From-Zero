import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = (event) => {
        event.preventDefault();
        // using passed props in class based components
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment ">
                <form className="ui form" onSubmit={this.onFormSubmit}>
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

// what is 'this' :(

// 'this' in class :
// 'this' is a reference back to the class itself
// in our case 'this' inside SearchBar references to instance of  SearchBar itself
// we can then get direct access to state, render and onFormSubmit properties of SearchBar

// 'this' in function :
//  in onFormSubmit 'this' is determined differently
//  it is redefined and value of 'this' becomes 'undefined'
//  we can solve this issue by :

//  1. Define the constructor, bind the function, over-write the existing one. e.g:
// constructor(props){
// super(props);
// this.someMethod = this.someMethod.bind(this)
//}

//  2. Using Arrow Funcion. e.g:
// someMethod = () => {some task...}
// arrow functions automatically bind values
