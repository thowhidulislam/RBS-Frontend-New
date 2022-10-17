import NavBar from '../../pages/Home/Navbar/NavBar';
import bannerCommon from '../../public/BannerCommon.png';
import styles from './AboutBanner.module.css';

const AboutBanner = () => {
    return (
        <div className=''
            style={{
                backgroundImage: `url(${bannerCommon.src})`,
                height:"300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            
                
        }}
        >
            <NavBar /> 
            <div className=' d-flex justify-content-center align-items-center text-white text-center py-5 '>
                <h1 className={`${styles.bannerText} bannerText`}>About us</h1>
            </div>
        </div>
    );
};

export default AboutBanner;