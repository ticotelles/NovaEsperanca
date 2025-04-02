import styles from './styles.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const imagens = [
    {
        title: "Queijo Parmesão",
        img: "img1.webp",
        borderColor: "#037abc"
    },
    {
        title: "Queijo Parmesão",
        img: "img2.webp",
        borderColor: "#037abc"
    },
    {
        title: "Queijo Parmesão",
        img: "img3.webp",
        borderColor: "#037abc"
    },
    {
        title: "Queijo Parmesão",
        img: "img4.webp",
        borderColor: "#037abc"
    },
    {
        title: "Queijo Parmesão",
        img: "img5.webp",
        borderColor: "#037abc"
    },


]




const ListaDeProdutos = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapperTitle}>
                <h1 className={styles.title}>Descubra o <span style={{color:"#037ABC"}}>Sabor Autêntico do Campo!</span> </h1>

                <p className={styles.paragraph}>Nossos laticínios são feitos com ingredientes selecionados e a tradição de quem entende do verdadeiro sabor.
                    Do queijo cremoso ao requeijão irresistível, cada produto é um convite para momentos especiais.
                    Experimente a qualidade que só quem ama o que faz pode oferecer!
                </p>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.teste}>

                    <Slider {...settings} >
                        {imagens.map((img, index) => (
                            <div key={index} >
                                <div className={styles.Carousel}>

                                    <img src={img.img} width={314} height={237} className={styles.img} />
                                    <h3>{img.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>

            <div className={styles.wrapperButton}>
                <button className={styles.button}>Saiba mais</button>
            </div>
        </div>
    )
};

export default ListaDeProdutos;