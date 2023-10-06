import styles from './VenderBtn.module.css'
function VenderBtn (props) {
    return (
        <button className={styles.btn}>{props.title}</button>
    )
}

export default VenderBtn
