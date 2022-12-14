import ContainerNavbar from "../components/navbar/navbar";


export default function Home() {
  return (
    <>
      <ContainerNavbar/>
      <div className="container-header">
        <img src="../img/header_bg.png" alt="header_background"/>
        <div className="container-title">
          <h1>LA MEJOR AVENTURA <br/> DE NUESTRAS VIDAS</h1>
        </div>
      </div>
    </>
  )
}
