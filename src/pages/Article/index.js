// import styles from "./Article.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ArticleStructure from "../../components/ArticleStructure";

function Article() {
  return (
    <>
      <Header />
        <Container>
          <ArticleStructure>
          <h1>Olá mundo</h1>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          </ArticleStructure>
        </Container>
      <Footer />
    </>
  );
}
export default Article;
