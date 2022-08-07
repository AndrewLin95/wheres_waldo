import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div id="headerComponent">
            <Link to='/wheres_waldo/'>Find the Object!</Link>
            <div></div>
            <div>Whats left</div>
        </div>
    )
}

export default Header;
