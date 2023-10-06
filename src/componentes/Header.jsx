import styles from './Header.module.css'
import Nav from "./Nav";
function Header () {
    return (
        <header className={styles.header}>
            <Nav></Nav>
        </header>
    )
}

export default Header