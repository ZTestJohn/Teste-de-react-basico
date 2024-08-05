// import styles from "./Home.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import noticias from "../../json/db.json";


function Home() {
  return (
    <>
      <Header />
      <Banner img="home.webp" />
      <Container>
        <h1>Principais notícias</h1>
        <div>
          {noticias.map(({ imagem_url, titulo, id }) => {
            return (
              <Card
                img={imagem_url}
                titulo={titulo + ' ' + id}
                key={id}
                id={id}
              />
            );
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

