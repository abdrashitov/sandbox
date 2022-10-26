import React, {useEffect, useState} from 'react';
import './static/css/main.css';
import styles from './app.module.css';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/sandbox/static/sample.pdf';
    }, 2000)https://api.github.com/repos/:abdrashitov/:sandbox/dispatches
  }, [])

  return (
    <div className={styles.wrapper}>
      Страница для тестирования
    </div>
  );
};

export default App;
