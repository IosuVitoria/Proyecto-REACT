import './contacto.css';
import imageD from './photos/Daniela.jpg';
import imageI from './photos/Iosu.jpg';
import githubLogo from './photos/github.png';
import linkedinLogo from './photos/linkedin.png';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-item">
        <h2>Daniela López</h2>
        <div className="image-wrapper">
          <img src={imageD} alt="imagen Daniela" />
          <div className="info-wrapper">
            <h3>Programadora Full Stack developer</h3>
            <p>.......</p>
            <div className="link-wrapper">
              <img src={githubLogo} alt="GitHub Logo" />
              <a href="https://github.com/danulopez">https://github.com/danulopez</a>
            </div>
            <div className="link-wrapper">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
              <a href="https://www.linkedin.com/in/daniela-ester-l%C3%B3pez-9b05a95b/">https://www.linkedin.com/in/daniela-ester-l%C3%B3pez-9b05a95b/</a>
            </div>
          </div>
        </div>
      </div>

      <div className="contacto-item">
        <h2>Iosu Gómez</h2>
        <div className="image-wrapper">
          <img src={imageI} alt="imagen Iosu" />
          <div className="info-wrapper">
            <h3>Programador Full Stack developer</h3>
            <h4>
              Licenciado en Biología realicé un máster con temática bioinformática usando Python (librería biopython).
            </h4>
            <h4>
              Años más tarde decidí tomar un bootcamp en UpgradeHub donde empezar a formarme en lo que quería hacer
            </h4>
            <h4>Más información en mi portfolio, en mi Github y mi Linkedin.</h4>
            <div className="link-wrapper">
              <img src={githubLogo} alt="GitHub Logo" />
              <a href="https://github.com/IosuVitoria">https://github.com/IosuVitoria</a>
            </div>
            <div className="link-wrapper">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
              <a href="https://www.linkedin.com/in/iosu-gomez-biologo-analista/">https://www.linkedin.com/in/iosu-gomez-biologo-analista/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
