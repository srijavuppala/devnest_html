"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return "i loved it";
        }

        return e(
            "button", //  the element we want to render
            { onClick: () => this.setState({ liked: true }) }, // the function or event
            "Blaze" // the inner text
        );
    }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);