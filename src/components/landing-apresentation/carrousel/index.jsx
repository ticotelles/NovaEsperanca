import styles from './styles.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
]


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <Slider {...settings}>
                {imagens.map((img, index) => (
                    <div key={index} className={styles.Carousel}>
                        <img src={img} width={1754} height={'650'} />
                    </div>
                ))}
            </Slider>

        </div>
    )
};

export default Carousel;