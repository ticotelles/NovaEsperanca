import styles from './styles.module.css';

const valores = [
    {
        title: 'Missão',
        description: "Produzir produtos de qualidade, buscando processos eficientes para proporcionar preço justo. Respeitando nossos colaboradores, clientes, fornecedores, sociedade e meio ambiente. Procurando inovar para atender necessidades de nossos clientes."
    },
    {
        title: 'Visão',
        description: "Trabalhamos com dedicação e total atenção a nossos clientes, a fim de nos tornarmos um dos maiores fabricantes de queijo especiais e tradicionais, mantendo a qualidade e inovação."
    },
    {
        title: 'Valores',
        description: "Respeito ao colaborador, cliente e fornecedor. Responsabilidade Social e ambiental, trabalhar a inovação para atender as necessidades desse mercado, com foco continuo na qualidade, sempre alinhada a um preço justo, garantindo assim a melhor eficiência de nossos processos na produção."
    },
    {
        title: 'Preocupação',
        description: "Além da preocupação com a qualidade de nossos produtos, o Laticínios Vale dos Buritis busca garantir a preservação do Meio Ambiente. Para isso construímos uma Estação de Tratamento de Efluentes, responsável por tratar todos os resíduos industriais e apenas, após a finalização desse processo, o resíduo liquido é lançado no meio ambiente, com a certeza de não causara prejuízos ou degradação."
    },
]

const QuemSomos = () => {
    return (
        <div className={styles.container}>
            <div>
                <img width={800} src="banner-quemsomos.png" alt="" />
            </div>

            <div>
                <p className={styles.paragraph}>O Laticínio Vale dos Buritis, iniciou suas atividades em 5 de fevereiro de 1984 com o intuito de oferecer ao
                    consumidor produtos inovadores e de alta qualidade. Em 2009 os produtos da conceituada marca Supremo também
                    passaram a ser produzidos no Laticínios Vale dos Buritis.
                    O Laticínio Vale dos Buritis localiza-se no noroeste de Minas Gerais e atualmente produz aproximadamente 120.000 litros de leite/dia,
                    com mais de 400 produtores parceiros de toda região. São mais de duas décadas de historia, produzindo e comercializando 40 produtos para
                    todas as regiões do Brasil.
                </p>
            </div>


            <div className={styles.wrapperminiImg}>

                <div className={styles.cardMiniImg}>
                    <img width={245} height={199} src="img-quemSomos1.png" alt="" />
                    <p className={styles.paragraphMiniImg}>Linha de queijos com mais de 100 produtos</p>
                </div>
                <div className={styles.cardMiniImg}>
                    <img width={150} height={200} src="milkColor.png" alt="" />
                    <p className={styles.paragraphMiniImg}>Produção de mais de 150.000 litros de leite por dia</p>
                </div>
                <div className={styles.cardMiniImg}>
                    <img width={202} height={150} src="hands.png" alt="" />
                    <p className={styles.paragraphMiniImg}>Parceria com mais de 200 produtores</p>
                </div>
                <div className={styles.cardMiniImg}>
                    <img width={191} height={205} src="brasil.png" alt="" />
                    <p className={styles.paragraphMiniImg}>Distribuição em todo território nacional</p>
                </div>
                <div className={styles.cardMiniImg}>
                    <img width={155} height={167} src="like.png" alt="" />
                    <p className={styles.paragraphMiniImg}>Qualidade e segurança em cada produto</p>
                </div>
            </div>

            <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>
                <div className={styles.wrapper}>
                    {/* <div className={styles.waveEmpresa}>
                    </div> */}
                    <img width={370} src="img1-quemsomos.png" alt="" style={{ borderRadius: '12px' }} />

                    <div className={styles.wrapperText}>
                        <img width={500} src="experiencia.png" alt="" />

                        <h1 className={styles.title}>Nossa produção</h1>
                        <p>Atualmente possuímos duas unidades que atendem quase todo território brasileiro, localizadas em Buritis,
                            Minas Gerais e outra em Monte Belo, também em Minas.<br />
                            Nossa fábrica em Buritis é responsável pela fabricação de mais de 40 produtos que compõem nossas marcas.
                            Já a fábrica de Monte Belo produz 1 produto.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.wrapperImgDivider} >
                <div style={{ width: "100%", backgroundColor: '#007a28', height: 200 }}></div>

                <div className={styles.imgDivider}>
                    <img width={'100%'} height={'100%'} src="design.png" alt="" />
                </div>
                <div className={styles.imgCarinho}>
                    <img src="muito-carinho.png" alt="" />
                </div>
            </div>

            <div className={styles.wrapperContainerValores}>


                <div className={styles.wrapperTextValores}>

                    <h1>Qualidade, respeito e dedicação</h1>

                    <div className={styles.cardValores}>

                        <h3 className={styles.titleValores}>Missão</h3>
                        <p className={styles.paragraphValores}>
                            Produzir produtos de qualidade, buscando processos eficientes para proporcionar preço justo. Respeitando nossos colaboradores,
                            clientes, fornecedores, sociedade e meio ambiente. Procurando inovar para atender necessidades de nossos clientes.
                        </p>
                    </div>

                </div>

                <img src="quemSomosImg.png" alt="" />

            </div>



        </div>
    )
};

export default QuemSomos;