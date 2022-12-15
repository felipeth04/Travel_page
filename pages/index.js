import ContainerNavbar from "../components/navbar/navbar";
import Counter from "../components/Counter/counter";
import { Grid } from "@nextui-org/react";
import { Card1, Card2, Card3, Card4, Card5 } from '../components/cards/containerCard';

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
            <Counter />
          </div>
        </div>
      </div>

      <section className="container__memories_cards">
        <h2>MEMORIAS</h2>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card1 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card2 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card3 />
          </Grid>
          <Grid xs={12} sm={5}>
            <Card4 />
          </Grid>
          <Grid xs={12} sm={7}>
            <Card5 />
          </Grid>
        </Grid.Container>
      </section>
    </>
  )
}
