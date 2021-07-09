import defaultStyle from './defaultStyle';

const redBlurb = "The Red Charity is the red charity."
const redCharity = {
    title: "RED",
    blurb: redBlurb,
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Canadian_Red_Cross.svg/1200px-Canadian_Red_Cross.svg.png",
    style: {
        ...defaultStyle,
        backgroundColor: "#FF0000"
    }
}

export default redCharity;