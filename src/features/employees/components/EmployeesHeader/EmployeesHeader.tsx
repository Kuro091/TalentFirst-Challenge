import { Employee } from '../../types';
import styles from './EmployeesHeader.module.css';

interface EmployeesHeaderProps {
  employees: Employee[] | undefined;
}

const EmployeesHeader = ({}: EmployeesHeaderProps) => {
  return <div className={styles.header__container}>EmployeesHeader</div>;
};

export default EmployeesHeader;
