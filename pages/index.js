import ContainerNavbar from "../components/navbar/navbar";
import Counter from "../components/counter/counter";

export default function Home() {
  return (
    <>
      <ContainerNavbar />
      <div className="container__header">
        <img src="../img/header_bg.png" alt="header_background" />
        <div className="container__title">
          <h1>LA MEJOR AVENTURA <br /> DE NUESTRAS VIDAS</h1>
        </div>
        <div className="container__layout_counter">
          <div className="layout_counter">
            <h3>La Siguiente Aventura Ya Esta Aqui</h3>
            <Counter/>
          </div>
        </div>
      </div>
    </>
  )
}
