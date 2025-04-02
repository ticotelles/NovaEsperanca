import styles from './styles.module.css';

const itens = [
    {
        img: "receita1.png",
        title: "Macarronese temperado com igredientes...",
        tempo: "02h00",
        porcao: "05 porções",
        link: ""

    },
    {
        img: "receita1.png",
        title: "Macarronese temperado com igredientes...",
        tempo: "02h00",
        porcao: "05 porções",
        link: ""

    },
    {
        img: "receita1.png",
        title: "Macarronese temperado com igredientes...",
        tempo: "02h00",
        porcao: "05 porções",
        link: ""

    },
    {
        img: "receita1.png",
        title: "Macarronese temperado com igredientes...",
        tempo: "02h00",
        porcao: "05 porções",
        link: ""

    }
]



const Receita = () => {
    return (
        <div className={styles.shapedividerscom9279}>
            <div className={styles.container}>
  
                <h1 className={styles.title}>Receitas</h1>

                <p className={styles.paragraph}>Descubra o sabor irresistível das melhores receitas com laticínios! Aqui, reunimos pratos que trazem todo
                    o frescor e a qualidade dos nossos produtos
                </p>

                <div className={styles.wrapperCard}>

                    {itens.map((item, index) => (

                        <div className={styles.card} key={index}>
                            <img style={{ borderRadius: '12px' }} src={item.img} alt="" />

                            <h2 className={styles.titleCard}>{item.title}</h2>
                            <div className={styles.wrapperCardIcon}>
                                <div className={styles.wrapperIcon}>
                                    <img width={25} height={25} src="tempo.png" alt="" />
                                    <span className={styles.spanCard}>{item.tempo}</span>
                                </div>
                                <div className={styles.wrapperIcon}>
                                    <img width={25} height={25} src="food.png" alt="" />
                                    <span className={styles.spanCard}>{item.porcao}</span>
                                </div>

                            </div>

                            <div style={{ display: "flex" }}>
                                <button className={styles.button}>Ver receita</button>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
};


export default Receita;