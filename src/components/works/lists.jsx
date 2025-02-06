'use client';
import styles from '../../styles/lists.module.scss';
import { useRef } from 'react';

export default function Lists({ projects, reversed }) {

  const firstImage = useRef(null);
  const secondImage = useRef(null);

  return (
    <div className={styles.double}>

      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <img
            src={projects[0].image}
            alt={"image"}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].title}</h3>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <img
            src={projects[1].image}
            alt={"image"}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].title}</h3>
        </div>
      </div>

    </div>
  )
}