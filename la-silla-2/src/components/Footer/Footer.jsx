import "./Footer.css"

export const Footer = () => {
  return <footer className="Footer">
    <div className="Footer-content">
      <a href='/'><img className="Footer-logo" src="/imgs/logo.png" alt="Logo" title="Logo" /></a>
      <a href="/Privacidad" title="Ver Privacidad y Condiciones" className="Footer-link"><p>PRIVACIDAD Y CONDICIONES</p></a>
      <p className="Footer-text">© 2026 - Todos los derechos reservados</p>
    </div>
  </footer>;
};
