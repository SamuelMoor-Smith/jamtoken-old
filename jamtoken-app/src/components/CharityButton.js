var React = require('react');

class CharityButton extends React.Component {
    render() {
        return (
            < button style={this.props.style}>{this.props.title}</button>
        );
    }
}

export default CharityButton;
