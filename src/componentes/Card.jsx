import styles from './Card.module.css'
import VenderBtn from "./VenderBtn";
function Card (props) {
    return (
        <div className={styles.ret}>
            <div className={styles.img}>
                <img src={props.img}/>
            </div>
            <div className={styles.textos}>
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.subaixo}>
                    <p>R${props.preco}</p>
                    <VenderBtn title='Comprar'></VenderBtn>
                </div>
            </div>
        </div>
    )
}

export default Card