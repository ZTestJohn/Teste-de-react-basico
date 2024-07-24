import styles from "./Article.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

function Article() {
  return (
    <>
      <Header />
        <Container>
            <section className={styles.NotFound}>
                  
            </section>
        </Container>
      <Footer />
    </>
  );
}
export default Article;
