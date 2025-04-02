import styles from './styles.module.css';

const Empresa = () => {
    return (
        <div className={styles.shapedividerscom3944}>


            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.wrapperText}>

                        <h2 className={styles.title}>Nossa empresa</h2>

                        <p className={styles.paragraph}>O Laticínios Nova Esperança nasceu em uma fazenda mineira, na cidade de Porteirinha. Hoje, já são 10 anos de mercado,
                            sempre oferecendo produtos lácteos de qualidade, nutritivos e muito saborosos, fabricados com rigoroso controle de matéria-prima e produção.

                        </p>
                    </div>

                    <div className={styles.wrapperImg}>
                        <img className={styles.img} src="truck.jpg" alt="" />
                    </div>
                </div>

                <div>
                    <button className={styles.button}>Saiba mais</button>
                </div>

            </div>
        </div>
    )
};

export default Empresa;