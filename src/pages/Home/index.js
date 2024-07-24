import styles from "./Home.module.css";
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
          {noticias.map((noticia) => {
            return (
              <Card
                img={noticia.imagem_url}
                titulo={noticia.titulo}
                key={noticia.key}
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

