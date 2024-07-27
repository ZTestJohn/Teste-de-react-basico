import styles from "./ArticleText.module.css";

function ArticleText({ children }) {
    return <article className={styles.ArticleText}>
        {children}
    </article>;
}
export default ArticleText;
