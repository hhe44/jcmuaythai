import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState } from "react";

export default function Home() {

  const [showMenu, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle(!showMenu);
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Jersey City Muay Thai</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navbar}>
        <div className={`${styles.burger}  ${showMenu ? styles.burgerToggle : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logoWrap}>
          <img src="/logos/jcmuaythai-logo.png" />
        </div>

      </div>
      <ul className={`${styles.navMenu} ${showMenu ? styles.displayMenu : ""}`}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#trainers">TRAINERS</a></li>
        <li><a href="#gallery">GALLERY</a></li>
        <li><a href="#info">INFO</a></li>
      </ul>

      <div id="home" className={`${styles.section} ${styles.home}`}>
        <div className={styles.imgWrap}>
          <img src="/images/hero.png" />
        </div>
      </div>

      <div className={`${styles.section} ${styles.mission}`}>
        <h3>HERE AT JERSEY CITY MUAY THAI WE...</h3>
        <h3>HERE'S WHAT WE GOT</h3>
        <h1>FIGHT.<br />TRAIN.<br />IMPROVE.<br /></h1>
        <div className={styles.services}>
          <div>
            <p>PULIC CLASSES</p>
            <img src="https://via.placeholder.com/150" />
          </div>
          <div>
            <p>PRIVATE LESSONS</p>
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
      </div>

      <div id="trainers" className={styles.trainersLink}></div>
      <div className={`${styles.section} ${styles.trainers}`}>
        <h1>MEET THE TRAINERS</h1>
        <div className={styles.profile}>
          <div className={styles.imgWrap}><img src="https://via.placeholder.com/150" /></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in imperdiet urna, nec tincidunt turpis.
            Ut dignissim neque dui, eget sodales ante elementum sed. Mauris congue dolor quis est efficitur tincidunt.
            Nam ut ipsum sed neque lacinia faucibus. Sed in laoreet turpis. Ut sit amet arcu nibh. Sed quis urna eu
            ipsum porttitor aliquet sed eget nisi.</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.imgWrap}><img src="https://via.placeholder.com/150" /></div>
          <p>Nulla porttitor orci scelerisque sollicitudin tempor. Nullam porttitor enim magna, id viverra tellus
            malesuada vitae. Nullam sit amet ultrices sapien. Sed condimentum, ligula at rhoncus aliquam, mi justo
            tristique lectus, a fringilla nisl lacus sit amet augue. Etiam sed dolor sit amet ante bibendum
            condimentum ac ac quam.</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.imgWrap}><img src="https://via.placeholder.com/150" /></div>
          <p>Curabitur hendrerit vel velit sodales auctor. Suspendisse vitae ornare dui. Curabitur vel felis
            consectetur leo pretium blandit quis eget odio. Aliquam elementum tellus ipsum. Aliquam tempor,
            sapien id tincidunt rhoncus, enim arcu fringilla nisi, quis dapibus augue massa nec mauris.</p>
        </div>
      </div>

      <div id="gallery" className={styles.galleryLink}></div>
      <div className={`${styles.section} ${styles.gallery}`}>
        <h1>GALLERY</h1>
        <div className={styles.photos}>
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
        </div>
      </div>

      <div id="info" className={`${styles.section} ${styles.info}`}>
        <h1>INFO</h1>
        <div className={styles.infoBlock}>
          <h3>PRICING</h3>
          <p>Insert PRICING Info here</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>SCHEDULE</h3>
          <p>Insert SCHEDULE Info here</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>ADDRESS</h3>
          <p>Insert ADDRESS here</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>CONTACT</h3>
          <p>Insert CONTACT here</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <a href="https://www.instagram.com/jersey_city_muay_thai/" target="_blank"><img src="/logos/ig.png" /></a>
        <a href="https://www.youtube.com/channel/UCYqy69O7dCJGyMrDTDsyR4g" target="_blank"><img src="/logos/yt.png" /></a>
      </footer>

    </div>
  )
}
