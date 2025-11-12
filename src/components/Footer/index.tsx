import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica Pomodoro 🍅</a>
      <a href="">
        Chronos pomodoro &copy; {new Date().getFullYear()} - Feito por StaanB
      </a>
    </footer>
  );
}
