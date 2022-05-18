const Footer = ({currenDateYear, author}) => {
  return (  
    <footer className="footer">
     <h2> 🦄Copyright &copy; {currenDateYear} {author}. Todos los derechos reservados.🦄</h2>
    </footer>
  );
}
export default Footer;