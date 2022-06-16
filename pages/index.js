import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {

  function whatIs() {
    const percent1 = document.getElementById('percent1').value;
    const percent1outof = document.getElementById('percent1outof').value;

    if (percent1outof === '' || percent1 === '') {
      alert('Please fill in all fields');
      return false;
    }
    const answer = (percent1 * percent1outof) / 100;
    const answer1 = document.getElementById('answer1');
    answer1.innerHTML = answer.toFixed(2);
  }

  function isWhat() {
    const percent2 = document.getElementById('percent2').value;
    const percent2outof = document.getElementById('percent2outof').value;

    if (percent2outof === '' || percent2 === '') {
      alert('Please fill in all fields');
      return false;
    }

    const answer = (percent2outof * 100) / percent2;
    const answer2 = document.getElementById('answer2');
    answer2.innerHTML = answer.toFixed(2);
  }

  function inCreateOrDecrease() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (from === '' || to === '') {
      alert('Please fill in all fields');
      return false;
    }

    // calculate the percentage increase or decrease
    const answer = (to - from) / from * 100;
    const answer3 = document.getElementById('answer3');
    answer3.innerHTML = answer.toFixed(2);


  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Percentage Calculator</title>
        <meta name="description" content="light weight and simple percentage calculator , it will save you from the headaches" />
        <link rel="icon" href="/favicon.png" />

      </Head>


      <main className={styles.main}>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5980220274659554"
          crossorigin="anonymous" />
        <h1 className={styles.title}>Percentage Calculator</h1>
        <p className={styles.description}>Percentage is a free online tool , that will save your day</p>

        <div className={styles.grid}>
          {/* what is x% in x|amount  */}

          <div className={styles.card}>
            <div className={styles.question}>
              <span>What is </span><input id='percent1' className={styles.input} />% of <input id='percent1outof' className={styles.input} /> ?
            </div>

            <div className={styles.answer}>
              {/* calculate button */}
              <button className={styles.button} onClick={() => whatIs()} >Calculate</button>
              {/* answer box */}
              <div id='answer1' className={styles.answerBox}>
              </div>&nbsp;&nbsp;&nbsp;
            </div>

          </div>
          <div className={styles.card}>
            <div className={styles.question}>
              <input id='percent2outof' className={styles.input} />is what percent of <input id='percent2' className={styles.input} /> ?
            </div>

            <div className={styles.answer}>
              {/* calculate button */}
              <button onClick={() => isWhat()} className={styles.button}>Calculate</button>
              {/* answer box */}
              <div id='answer2' className={styles.answerBox}>
              </div>&nbsp;%
            </div>

          </div>
          <p>what is the percentage increate/decrease?</p>
          <div className={styles.card}>
            <div className={styles.question}>
              <span>From </span>
              <input id='from' className={styles.input} /> to <input id='to' className={styles.input} /> ?
            </div>

            <div className={styles.answer}>
              {/* calculate button */}
              <button onClick={() => inCreateOrDecrease()} className={styles.button}>Calculate</button>
              {/* answer box */}
              <div id='answer3' className={styles.answerBox}>
              </div>&nbsp;%
            </div>

          </div>

        </div>

        <footer>
          <code>
            <a href="#" className={styles.footer}>
              <p>Made by Yacen Elabe </p>
            </a>
          </code>

        </footer>
      </main>



    </div>
  )
}
