import styles from './Carder.module.css'
import Card from "./Card";
function Carder (props) {
    return (
        <div className={styles.todo}>
            <div className={styles.title}>
                <p>{props.title}</p>
            </div>
            <div className={styles.rolar}>
                <Card title='Counter Strike 2' preco='75,00' img='cs2.webp'></Card>
                <Card title='Dead Cells' preco='30,00' img='cell.jpg'></Card>
                <Card title='EA sports FC 24' preco='300,00' img='fc.webp'></Card>
                <Card title='Minecraft' preco='30,00' img='/mine.png'></Card>
            </div>
        </div>
    )
}

export default Carder