import styles from './styles.module.css'


const item = [
    {
        produtoTipo: "Queijo",
        listaProduto: [
            {
                img: "produtos/queijoMinas.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/montanhes-picolo.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/montanhes.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone-defumado.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone-defumado.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },

        ]
    },
    {
        produtoTipo: "Iogurte",
        listaProduto: [
            {
                img: "produtos/queijoMinas.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/montanhes-picolo.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/montanhes.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            
        ]
    },
    {
        produtoTipo: "Requeijão",
        listaProduto: [
            {
                img: "produtos/queijoMinas.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/montanhes-picolo.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/montanhes.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
            {
                img: "produtos/provolone-defumado.png",
                title: "Cheddar Fatiado peso padrão",
                peso: "450 g"
            },
           

        ]
    },
]

const productType = [
    {

    }
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
                <h3>Conheça a linha de produtos do Laticínio Nova Esperança</h3>


                {item.map((itens, index) => (

                    <div key={index} className={styles.card}>
                        <div className={styles.wrapperTitleCard}>
                            <h3>{itens.produtoTipo}</h3>
                        </div>

                        <div className={styles.cardListItens}>

                            {itens.listaProduto.map((produtos, idx) => (

                                <div key={idx} className={styles.cardItem}>
                                    <img width={200} height={200} src={produtos.img} alt="" />

                                    <h3 className={styles.titleCard}>{produtos.title}</h3>
                                    <p>{produtos.peso}</p>
                                </div>
                            ))} 

                        </div>

                    </div>
                ))}


            </div>
        </div>
    )
};

export default Produtos;