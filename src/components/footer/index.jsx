import styles from './styles.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <img width={200} src="logo-novaEsperanca.png" alt="" />
            </div >
            <div className={styles.divider}></div>

            <div className={styles.wrapperLinks}>
                <div>
                    <h3>Navege pelo site</h3>
                </div>
                <a className={styles.link} href="">Inicio</a>
                <a className={styles.link} href="">Quem somos</a>
                <a className={styles.link} href="">Produtos</a>
                <a className={styles.link} href="">Contato</a>
            </div>

            <div className={styles.divider}></div>
            <div className={styles.WrapperMainContato}>
                <h3>Contatos</h3>

                <div style={{}}>
                    <div className={styles.wrapperContato}>
                        <img width={30} src="whats.png" alt="" />
                        <p>(38) 9 9931-6049</p>
                    </div>
                    <div className={styles.wrapperContato}>
                        <img width={30} src="insta.png" alt="" />
                        <p>@laticinionovaesperanca</p>
                    </div>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.wrapperEndereco}>
                <h3>Endereço</h3>

                <p className={styles.endereco}>Rua das Indústrias, 180 <br /> Porteirinha, Minas Gerais,  Brasil <br /> 39520000</p>

            </div>

        </div>
    )
};

export default Footer;