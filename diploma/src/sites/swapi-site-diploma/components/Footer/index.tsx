// import { FaCodepen, FaLinkedin, FaGithub, FaJediOrder } from 'react-icons/fa'
import './styles.css'

export const Footer = () => {
  return <footer>
    <div className="fonte-api">
      <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer">
          {/* <FaJediOrder /> */}
          <p>Star Wars API </p>
      </a>
    </div>

    <div className="criador">
      <span>Developed by Andrii Bartish</span>
      <span><strong>Node.js back-end developer</strong></span>
    </div>

    <div className="redes-sociais">
        <a href="https://codepen.io/Abner_Silva" target="_blank"
            rel="noopener noreferrer">
            {/* <FaCodepen /> */}
        </a>
        <a href="https://www.linkedin.com/in/abner-pereira-silva-8715a326/" target="_blank"
            rel="noopener noreferrer">
            {/* <FaLinkedin /> */}
        </a>
        <a href="https://github.com/AbnerPS" target="_blank"
            rel="noopener noreferrer">
            {/* <FaGithub /> */}
        </a>
    </div>
</footer> 
}