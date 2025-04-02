import styles from './styles.module.css';
import CountUp from 'react-countup';


const status = [
    { img: "queijo1.png", label: "Linha de queijos com mais de 50 produtos", value: 50, },
    { img: "leite.png", label: "Produção de mais de 80.000 litros de leite por dia", value: 80000, suffix: "+" },
    { img: "compromisso1.png", label: "Parceria com mais de 200 produtores", value: 200, suffix: "+" },

];

const NumerosEmpresa = () => {
    return (
        <div className={styles.container}>

            <div className={styles.wrapperParagraph}>
                <h2 className={styles.title}>Nossos números</h2>
                <h3 className={styles.paragraph}>Fazem parte da nossa história</h3>
            </div>


            <div style={{ display: "flex", justifyContent: "center", padding: "50px 0", textAlign: "center" }}>
                {status.map((stat, index) => (
                    <div key={index} style={{ padding: "20px", }}>
                        <img width={170} height={150} src={stat.img} alt="" />


                        <h2 style={{ fontSize: "50px", fontWeight: "bold", color:'rgb(107, 107, 107)' }}>
                            <CountUp start={0} end={stat.value} duration={2} separator="," suffix={stat.suffix} />
                        </h2>
                        <p style={{ fontSize: "16px", color: "#3A241A", fontWeight: '600' }}>{stat.label}</p>

                    </div>
                ))}

            </div>

            <button className={styles.button}>Saiba mais</button>
        </div>
    )
};

export default NumerosEmpresa;