import styles from './Footer.module.css'
import Nav from "./Nav";
function Footer () {
    return (
        <div className={styles.foot}>
            <Nav header='none'></Nav>
            <div className={styles.down}>
                <p>all rigths reserved 2023</p>
            </div>
        </div>
    )
}

export default Footer