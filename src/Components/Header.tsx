import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div id="headerComponent">
            <Link id='gameTitle' to='/wheres_waldo/' style={{textDecoration: 'none'}}>Find the Object!</Link>
            <div></div>
            <div>Whats left</div>
        </div>
    )
}

export default Header;
