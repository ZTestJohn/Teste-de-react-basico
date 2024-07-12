import styles from "./Banner.module.css";

function Banner ({ img }){
    return (
        <div
        className={styles.banner}
        style={ { backgroundImage: `url('/images/${img}')` } }
        ></div>
    );
};
export default Banner;