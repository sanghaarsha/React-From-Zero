import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail />
                <VideoList />
            </div>
        );
    }
}

export default App;
