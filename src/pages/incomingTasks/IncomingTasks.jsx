import Footer from "./components/footer/Footer";
import MainContainer from "./components/mainContainer/MainContainer";
import styles from './incomingTasks.module.css'

export default function IncomingTasks() {
    return (
        <main className={styles.main}>
            <MainContainer />
            <Footer />
        </main>
    )
}