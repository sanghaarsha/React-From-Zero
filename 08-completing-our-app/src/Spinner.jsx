const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// setting default props
Spinner.defaultProps = {
    message: "Loading ...",
};

export default Spinner;
