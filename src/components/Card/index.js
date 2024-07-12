import styles from "./Card.module.css";

function Card ({ img, titulo}){
    return (
        <div className={styles.Card}>
            <img src={img} alt="Imagem da notícia"></img>
            <h2>{titulo}</h2>
        </div>
    );
};

export default Card;