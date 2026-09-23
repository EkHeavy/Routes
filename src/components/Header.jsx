import {Link} from 'react-router-dom';


function Header({ siteName }) {
    return (
        <header>
            <h1>{siteName}</h1>
            <nav>
                <Link to="/" style={{ textDecoration: "none" }}> Главная </Link>
                <Link to="/routes" style={{textDecoration: "none"}}> Маршруты </Link>
                <Link to="/add-route" style={{textDecoration: "none"}} >Добавить маршрут</Link>
            </nav>
        </header>
    )
}

export default Header;