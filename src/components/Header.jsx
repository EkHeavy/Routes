import { NavLink } from "react-router-dom";


function Header({ siteName }) {
    return (
        <header className="site-header">
            <div className="site-header-inner">
                <NavLink className="brand" to="/" aria-label={`${siteName}: главная`}>
                    <span className="brand-mark" aria-hidden="true">⌁</span>
                    <span>{siteName}</span>
                </NavLink>

                <nav className="site-nav" aria-label="Основная навигация">
                    <NavLink to="/" end>Главная</NavLink>
                    <NavLink to="/routes">Маршруты</NavLink>
                    <NavLink to="/add-route">Добавить маршрут</NavLink>
                </nav>
            </div>
        </header>
    );
}


export default Header;
