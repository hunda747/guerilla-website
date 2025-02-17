import Project from './project/project';
import styles from './style.module.scss';

import event2 from '../../assets/images/showcaserol1.png';
import event3 from '../../assets/images/showcasesafari1.png';
import safariEvent from '../../assets/images/gorilla11.png';
import safariEventOnCar from '../../assets/images/gorilla8.png';
import maltaGroupEvent from '../../assets/images/gorilla26.jpg';
import cocacolaEvent from '../../assets/images/gorilla3.png';

export default function Projects() {

  const projects = [
    {
      title1: "Safaricom",
      title2: "PR Event",
      src: event2
    },
    {
      title1: "Roll Detergent",
      title2: "Volume Uplifting",
      src: event3
    },
    {
      title1: "Coca-Cola",
      title2: "Billion Reasons To Believe",
      src: safariEvent
    },
    {
      title1: "Habesha Brewery",
      title2: "Brand Activation",
      src: maltaGroupEvent
    },
    {
      title1: "East Africa Tigers Brands",
      title2: "Consumer Tent Activation",
      src: safariEventOnCar
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p>Featured Work</p>
        {
          projects.map(project => {
            return <Project project={project} />
          })
        }
      </div>
    </main>
  )
}