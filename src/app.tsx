import React, {useEffect, useState} from 'react';
import './static/css/main.css';
import styles from './app.module.css';

const App = () => {

  useEffect(() => {

  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
          Наш прекрасный сайдбар
      </div>
        <div className={styles.main}>
            Сделай паузу, скушай Твикс!
        </div>
    </div>
  );
};

export default App;
