import styles from "./ArticleStructure.module.css";
import ArticleText from "../ArticleText";

function ArticleStructure({ children }) {
    return (
        <section className={styles.ArticleStructure}>
            <ArticleText>{children}</ArticleText>
            <div className={styles.comments}>
                
            </div>
        </section>
    );
}
export default ArticleStructure;
