import menuItems from './MenuItems';

var React = require('react');

class NavBar extends React.Component {
    render() {
        return (
            <nav className="Navbar">
                <h1 className="CompanyName">Diversifi</h1>
                <ul>
                    {menuItems.map((menuItem, index) => {
                        return (
                            <li key={index}>
                                <a className="MenuItem">
                                    {menuItem.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;