var React = require('react');

const imageStyle = {
    flex: 1,
    height: "100px",
    width: "150px",
    resizeMode: 'contain'
}

class CharityImage extends React.Component {
    render() {
        return (
          <img style={imageStyle} src={this.props.picture} alt="no picture" />
        )
    }
}

export default CharityImage;
