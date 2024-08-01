import styles from "./Article.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ArticleStructure from "../../components/ArticleStructure";
import { useParams } from "react-router-dom";
import articleInformation from "./articleInformation";
import NotFound from "../NotFound";

function Article() {
  const params = useParams()
  const result = articleInformation(params.id)
  if(!result) { return <NotFound /> }

  return (
    <>
      <Header />
      <Container>
        <article className={styles.article}>
          <div className={styles.articleContent}>
            <h1>{result.titulo}</h1>
            <ArticleStructure>
              <h1>Olá mundo</h1>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem{" "}
              </p>
            </ArticleStructure>
          </div>
          <div className={styles.UserInfoAndComments}>

          </div>
        </article>
      </Container>
      <Footer />
    </>
  );
}
export default Article;
