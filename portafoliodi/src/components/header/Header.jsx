import { Main } from '../main/Main';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <nav className="navbar__container">
                <p className="navbar__logo">Alisson Quiguango</p>
                <ul className="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#portfolio">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <Main />
        </header>
    )
}

export default Header