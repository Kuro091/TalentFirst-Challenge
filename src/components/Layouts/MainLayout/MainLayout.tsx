import Footer from './Footer';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.wrapper__content}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
