import Link from 'next/link'
import css from './index.module.scss'
import { Header } from 'component/header';
import {createRef, useEffect} from "react";

export default function About() {

  const fond = createRef();

  useEffect(() => {
      fond.current.classList.add(css.fond);
    }, []);

  return (
    <>
    <div className={css.about}>
      <div ref={fond}>
        <span>Alexis Flacher</span>
      </div>
      <Header title="About" subtitle="" lienAbout="/about"/>

      <div className={css.AboutContent}>
        <div className={css.content}>
          <div>
            <img alt="" src="../img/AlexisFlacher.jpg"/>
          </div>
          <div className={css.aboutText}>
            <p>Actuellement en troisième année du Bachelor Développeur Web de <a target="_blank" href="https://www.hetic.net/"  ><span></span>HETIC</a>  à Paris, je suis en alternance dans l'agence <a target="_blank" href="https://www.tbwa-paris.com/en"  ><span></span>TBWA\Paris</a> en tant que développeur front-end.</p>
            <i class="fab fa-github"></i> <a target="_blank" className={css.gitHub} href="https://github.com/AlexisF9"  >Mon GitHub</a>
            <p>Je sort d'un <a target="_blank" href="https://iut1.univ-grenoble-alpes.fr/iut1/mmi-formation-200348.kjsp"  ><span></span>DUT MMI</a> à Grenoble qui m'a permis d’acquérir une expertise globale sur les métiers du multimédia et de l’internet et de maîtriser des compétences techniques polyvalentes. Cette formation couvre tous les champs du digital. De la réalisation de sites internet à l’animation de communautés, de la création vidéo à la conception de contenus.</p>
            <i class="fas fa-download"></i> <a className={css.monCV} href="/AlexisFlacher CV.pdf"  >Telecharger mon CV</a>
          </div>
          
        </div>
      </div>
      
    </div>
      
    </>
  )
}

 
