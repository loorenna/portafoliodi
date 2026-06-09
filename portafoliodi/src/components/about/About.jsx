import './About.css';
import miImagen from '../../assets/mi-foto.png';

export const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">Sobre mí</h2>
                <p className="about__paragraph">
                    Soy Alisson Quiguango, estudiante de Desarrollo de software con pasión por aprender a construir
                    aplicaciones web modernas, accesibles y centradas en el usuario.
                    Estoy aprendiendo tecnologías como React, JavaScript y diseño UI/UX.
                </p>
                <p className="about__paragraph">
                    Me encuentro en constante aprendizaje, buscando siempre proyectos que me
                    desafíen a crecer tanto técnica como creativamente.
                </p>
                <a href="https://github.com/loorenna" target="_blank" rel="noopener noreferrer" className="btn btn__light">
                    Ver mi GitHub
                </a>
            </div>
            <figure className="about__figure">
                <img src={miImagen} className="about__picture" alt="Alisson Quiguango" />
            </figure>
        </section>
    )
}

export default About