import defaultStyle from './defaultStyle';

const blueBlurb = "The Blue Charity is the blue charity."
const blueCharity = {
    title: "BLUE",
    blurb: blueBlurb,
    picture: "https://www.un.org/ruleoflaw/wp-content/uploads/2015/04/uniceflogo.png",
    backgroundColor: "#FF0000",
    style: {
        ...defaultStyle,
        backgroundColor: "#0000FF"
    }
}

export default blueCharity;