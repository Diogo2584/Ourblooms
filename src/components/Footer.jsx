import foot from '../assets/footer_images/Image.png';
import foot1 from '../assets/footer_images/Image-1.png';
import foot2 from '../assets/footer_images/Image-2.png';
function Footer(){
    return(
        <>
        <footer>
        <picture>
            <source media="(min-width: 1200px)" srcSet={foot} />
            <source media="(min-width: 800px)" srcSet={foot1} />
            <img src={foot2} alt="Footer Image" />
        </picture>
        </footer>
        </>
    );
}
export default Footer;
