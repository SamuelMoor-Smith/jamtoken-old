import CharityImage from './CharityImage';
import CharityButton from './CharityButton';
import style from './Charity.module.css';

var React = require('react');

class Charity extends React.Component {
    render() {
        return (
            <div className = {style.Charity}>
                <h1 >{this.props.title}</h1>
                <CharityImage picture={this.props.picture}/>
                <p> {this.props.blurb}</p>
                {/* <CharityImage url={this.props.props.picture}></CharityImage> */}
                <CharityButton style={this.props.style} title={this.props.title}></CharityButton>
            </div>
        );
    }
}

export default Charity;
