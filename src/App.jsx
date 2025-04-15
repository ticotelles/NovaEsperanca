import Headerr from './components/header'
import './App.css'
import Carousel from './components/landing-apresentation/carrousel'
import Separator from './components/landing-apresentation/Separator'
import ImgMain from './components/landing-apresentation/imgMain'
import NumerosEmpresa from './components/landing-apresentation/numeros-empresa'
import ListaDeProdutos from './components/landing-apresentation/lista-de-produtos'
import Receita from './components/landing-apresentation/receita'
import Empresa from './components/landing-apresentation/empresa'
import Footer from './components/footer'
import Produtos from './components/page/produtos'
import QuemSomos from './components/page/quem-somos'


function App() {


  return (
    <>
      <Headerr />
      {/* <Produtos /> */}
      <QuemSomos />
      {/* <ImgMain />
      <NumerosEmpresa />
      <Empresa />
      <ListaDeProdutos />
      <Receita /> */}
      {/* <Carousel /> */}
      {/* <Separator /> */}
      <Footer />
    </>
  )
}

export default App
