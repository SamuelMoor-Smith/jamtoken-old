import CharityImage from './CharityImage';
import CharityButton from './CharityButton';

var React = require('react');

class Charity extends React.Component {
    render() {
        return (
            <div>
                {/* <CharityImage url={this.props.props.picture}></CharityImage> */}
                <CharityButton style={this.props.props.style} title={this.props.props.title}></CharityButton>
            </div>
        );
    }
}

export default Charity;