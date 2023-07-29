import { Employee } from '../../types';
import { EmployeeCard } from '../EmployeeCard';
import styles from './EmployeeList.module.scss';

interface EmployeeListProps {
  employees: Employee[] | undefined;
}

const EmployeeList = ({ employees }: EmployeeListProps) => {
  return (
    <section className={styles.employee_list}>
      {employees &&
        employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} />)}
    </section>
  );
};

export default EmployeeList;
