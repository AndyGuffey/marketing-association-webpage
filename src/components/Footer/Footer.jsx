import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.company}>
          <h3 className={styles.companyName}>Marketing Association NZ</h3>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Marketing Association NZ. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
