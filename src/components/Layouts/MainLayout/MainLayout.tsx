import Footer from './Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
