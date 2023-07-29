import { Employee } from '../../types';
import styles from './EmployeeList.module.css';

interface EmployeeListProps {
  employees: Employee[] | undefined;
}

const EmployeeList = ({ employees }: EmployeeListProps) => {
  return (
    <section className={styles.employee_list}>
      {employees && JSON.stringify(employees, null, 2)}
    </section>
  );
};

export default EmployeeList;
