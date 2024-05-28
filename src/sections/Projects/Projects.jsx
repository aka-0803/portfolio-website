import styles from './ProjectsStyles.module.css';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import Social from '../../assets/social.jpg';
import Magnifier from "../../assets/magnifier.jpg";
import Asteroid from '../../assets/asteroid.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Social}
          link="https://github.com/aka-0803/social-media-app"
          h3="Connect"
          p="Social media app"
        />
        <ProjectCard
          src={Magnifier}
          link="https://github.com/aka-0803/Image-classification-using-CNN"
          h3="Image classification"
          p="Image classification using CNN"
        />
        <ProjectCard
          src={Asteroid}
          link="https://retro-asteroid-game-js.netlify.app/"
          h3="Asteroids Shooter"
          p="Retro Game"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/aka-0803/Fitness_exercise_app"
          h3="Golds Gym"
          p="Fitness App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/aka-0803/Fitness_exercise_app"
          h3="Akash.com"
          p="Portfolio Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/aka-0803/Fitness_exercise_app"
          h3="Golds Gym"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;