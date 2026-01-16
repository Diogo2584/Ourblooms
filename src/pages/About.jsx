import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import lady from '../assets/AboutPage/lady.png';
import lady1 from '../assets/AboutPage/lady-1.png';
import lady2 from '../assets/AboutPage/lady-2.png';
import pic1a from '../assets/AboutPage/Image 01.png';
import pic1b from '../assets/AboutPage/Image 01-1.png';
import pic1c from '../assets/AboutPage/Image 01-2.png';
import pic2a from '../assets/AboutPage/Image 02.png';
import pic2b from '../assets/AboutPage/Image 02-1.png';
import pic2c from '../assets/AboutPage/Image 02-2.png';
import pic3a from '../assets/AboutPage/Image 03.png';
import pic3b from '../assets/AboutPage/Image 03-1.png';
import pic3c from '../assets/AboutPage/Image 03-2.png';
import pic4a from '../assets/AboutPage/Image breaker.png';
import pic4b from '../assets/AboutPage/Image breaker-1.png';
import pic4c from '../assets/AboutPage/Image breaker-2.png';

function About(){
    return(
        <>
        <div className={styles.head}>
        <p className="heading1"> ABOUT </p>
        </div>
        
        <div className={styles.container}>

        <div className={styles.cap}>
            <p className="caption1"> OUR STORY</p>
        </div>

        
            <div className={styles.AuthorInformation}>
                <picture>
                    <source media = "(min-width: 1200px)" srcSet= {lady} />
                    <source media = "(min-width: 800px)" srcSet= {lady1} />
                    <img src = {lady2} alt="Author Lady" className={styles.authorImage}/>
                </picture>
                <div className={styles.authorDetails}>
                    <p className="caption2"> Lily smith</p>
                    <p className="heading4"> Owner</p>
                </div>
            </div>
            <div className={styles.rightColumnContainer}>
            <p className="heading2"> Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth. </p>
            <div className={styles.imgContainer}>
                <picture>
                    <source media= "(min-width: 1200px)" srcSet={pic1a}/>
                    <source media= "(min-width: 800px)" srcSet={pic1b}/>
                    <img src={pic1c} alt="Our Blooms Image 1"/>
                </picture>
                <picture>
                    <source media= "(min-width: 1200px)" srcSet={pic2a}/>
                    <source media= "(min-width: 800px)" srcSet={pic2b}/>
                    <img src={pic2c} alt="Our Blooms Image 2"/>
                </picture>
                <picture>
                    <source media= "(min-width: 1200px)" srcSet={pic3a}/>
                    <source media= "(min-width: 800px)" srcSet={pic3b}/>
                    <img src={pic3c} alt="Our Blooms Image 3"/>
                </picture>
            </div>
            <div className={styles.Journey}>
            <p className="paragraph2">  Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil. </p>
            <p className="paragraph2"> Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.  </p>
            </div>
            <div className={styles.mission}>
            <picture>
                <source media= "(min-width: 1200px)" srcSet={pic4a}/>
                <source media= "(min-width: 800px)" srcSet={pic4b}/>
                <img src={pic4c} alt="Our Blooms Image Breaker"/>
            </picture>
            </div>
            <div className={styles.Journey}>
            <p className="paragraph2"> From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality. </p>
            <p className="paragraph2"> Discover how we can add a touch of natural beauty to your next event. </p>
            </div>
            <button className="button_danger">.BOOK A CONSULTATION</button> 
            
        </div>
        <Footer/>
        
        
        
        </div>

        
        </>
    );
}
export default About;