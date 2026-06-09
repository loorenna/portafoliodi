import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__content">
                <h3 className="contact__title">Contáctame</h3>
                <p className="contact__description">
                    ¿Tienes algún proyecto en mente o quieres colaborar? ¡Escríbeme!
                </p>
                <div className="contact__links">
                    <a href="https://w.app/alilorena" target="_blank" rel="noopener noreferrer" className="contact__btn">
                        <span>💬</span> WhatsApp
                    </a>
                    <a href="https://www.facebook.com/UwU.A.19.8" target="_blank" rel="noopener noreferrer" className="contact__btn">
                        <span>📘</span> Facebook
                    </a>
                    <a href="https://www.instagram.com/_.a_l_i_s_s._/" target="_blank" rel="noopener noreferrer" className="contact__btn">
                        <span>📸</span> Instagram
                    </a>
                </div>
                <p className="contact__copy">Derechos reservados © Alisson Quiguango 2025</p>
            </div>
        </section>
    )
}

export default Contact