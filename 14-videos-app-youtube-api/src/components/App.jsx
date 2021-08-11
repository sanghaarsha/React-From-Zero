import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        try {
            const response = await youtube.get("/search", {
                params: {
                    q: term,
                },
            });

            this.setState({ videos: response.data.items });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
