import Button from '@/components/Elements/Button/Button';
import { Employee } from '../../types';
import { EmployeeCard } from '../EmployeeCard';
import styles from './EmployeeDetail.module.scss';
import { useNavigate } from 'react-router-dom';

interface EmployeeDetailProps {
  employee: Employee;
}

const EmployeeDetail = ({ employee }: EmployeeDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.employee_container}>
      <EmployeeCard employee={employee} />
      <Button onClick={() => navigate('/')}>Go back</Button>
    </div>
  );
};

export default EmployeeDetail;
