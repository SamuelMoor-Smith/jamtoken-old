import defaultStyle from './defaultStyle';

const greenBlurb = "The Green Charity is the green charity."
const greenCharity = {
    title: "GREEN",
    blurb: greenBlurb,
    picture: "http://www.liderdeproyecto.com/articulos/imagenes/green_project_management_2.jpg",
    backgroundColor: "#FF0000",
    style: {
        ...defaultStyle,
        backgroundColor: "#00FF00"
    }
}

export default greenCharity;