import banner from '../../../images/banner-2.jpg'
import './Banner.css'

const Banner = () => {

    return (
        <div className='banner-style col-sm-12 col-md-12 col-lg-12'>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;