import { MainLayout } from '@/components/Layouts';
import styles from './NotFound.module.scss';
import Button from '@/components/Elements/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={styles.not_found_container}>
        <h2>Error 404</h2>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Go back
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
