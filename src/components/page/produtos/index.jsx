import styles from './styles.module.css'


const item = [
    {
        img: "queijoMinas.png",
        title: "Cheddar Fatiado - peso padrão",
        peso: "450 g"
    },
    {
        img: "montanhes-picolo.png",
        title: "Cheddar Fatiado - peso padrão",
        peso: "450 g"
    },
    {
        img: "montanhes.png",
        title: "Cheddar Fatiado - peso padrão",
        peso: "450 g"
    },
    {
        img: "provolone.png",
        title: "Cheddar Fatiado - peso padrão",
        peso: "450 g"
    },
    {
        img: "provolone-defumado.png",
        title: "Cheddar Fatiado - peso padrão",
        peso: "450 g"
    },
]



const Produtos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerText}>
                <div className={styles.wrapperText}>
                    <h1 className={styles.title}>Qualidade e sabores irresistíveis</h1>

                    <p className={styles.paragraph}>Uma extensa linha de queijos para atender os mais diversos paladares das regiões do Brasil.
                        Aqui você encontra desde a mussarela das famosas pizzas paulistanas e prato esférico (tão presente na vida dos cariocas),
                        até o queijo reino (do nordeste), os clássicos coalhos dos churrascos e praias e muito mais!
                        Todos produzidos com o sabor e a qualidade de quem tem mais de 30 anos de experiência no mercado.
                    </p>
                </div>

            </div>

            <div className={styles.wrapperContainer}>
                <h3>Conheça a linha de produtos Buritis</h3>




                <div className={styles.card}>
                    <div className={styles.wrapperTitleCard}>
                        <h3>Cheddar</h3>
                    </div>

                    <div className={styles.cardListItens}>

                        {item.map((itens, index) => (

                            <div key={index} className={styles.cardItem}>
                                <img width={200} src={itens.img} alt="" />

                                <h3>{itens.title}</h3>
                                <p>{itens.peso}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Produtos;