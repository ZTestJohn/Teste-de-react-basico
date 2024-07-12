import styles from "./Container.module.css";

function Container ({ children }){
    return (
        <section className={styles.Container}>
            {children}
        </section>
    );
};

export default Container;