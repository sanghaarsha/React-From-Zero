import React from "react";
import ReactDOM from "react-dom";
import faker from "faker"; // for fake avatar image
import Comment from "./Comment";
import Wrapper from "./Wrapper";

// 3 Tenets of Component :
// Component Nesting : Component inside Component
// Component Reusability : Creating Reusable Components
// Component Configuration : configure component when created

const App = () => {
    return (
        <div className="ui container comments">
            {/* Component Nesting */}
            {/* This makes component fully reusable */}
            <Wrapper>
                <Comment
                    name="John"
                    time="Today at 6:00 PM"
                    text="Nice Blog!"
                    avatar={faker.image.avatar()}
                />
            </Wrapper>

            <Wrapper>
                <Comment
                    name="Mark"
                    time="Today at 5:00 PM"
                    text="Cool :)"
                    avatar={faker.image.avatar()}
                />
            </Wrapper>
            <Wrapper>
                <Comment
                    name="May"
                    time="Today at 4:00 PM"
                    text="Nice Read. ;)"
                    avatar={faker.image.avatar()}
                />
            </Wrapper>

            <Wrapper>
                <p>Are you fine?</p>
            </Wrapper>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
