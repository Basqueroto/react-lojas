import styles from './Nav.module.css'
function Nav (props) {
    return (
        <div className={styles.navTodo}>
            <div className={styles.logo}>
                <p><b>Ultra Games</b></p>
            </div>
            <nav className={styles.nav}>
                <a href="">Início</a>
                <a href="">Produtos</a>
                <a href="">Contato</a>

                <div className={styles.icons} style={{display: props.header}}>
                    <a><img src="/carrinho.png" /></a>
                    <a><img src="/heart.png" /></a>
                </div>
            </nav>
        </div>
    )
}

export default Nav