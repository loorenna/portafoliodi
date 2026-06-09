import './Proyect.css';
import proyecto1 from '../../assets/proyecto1.png';

export const Project = () => {
    return (
        <section id="portfolio" className="project">
            <h3 className="project__title">Proyectos</h3>
            <div className="project__cards">

                <div className="cards">
                    <img src={proyecto1} className="card__img" alt="Proyecto 1" /> 
                    <div className="card">
                        <h4 className="card__title">Aquí Nomás</h4>
                        <p className="card__description">
                            Guía de rutas de senderismo en los Andes ecuatorianos con
                            información técnica, galería y eventos de montaña.
                        </p>
                        <div className="card__buttons">
                            <a href="https://github.com/DrosherJC/Aqui-Nom-s" target="_blank" rel="noopener noreferrer" className="card__category">
                                Repositorio
                            </a>
                            <a href="https://drosherjc.github.io/Aqui-Nom-s/#" target="_blank" rel="noopener noreferrer" className="card__category">
                                Demo
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project