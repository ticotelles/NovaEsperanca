import styles from './styles.module.css';

const ImgMain = () => {
    return (
        <div className={styles.container}>
            
                <img className={styles.imgmain} src="teste.png" width={'100%'} alt="" />
            
            <div className={styles.wrapperParagraph}>
                <p className={styles.paragraph}>No nosso laticínio, cada produto é feito com carinho e tradição, trazendo o melhor do campo para a sua mesa.
                    Do leite fresco e puro aos queijos artesanais, oferecemos uma variedade irresistível para todos os gostos.
                </p>
            </div>
         
        </div>
    )
};

export default ImgMain;