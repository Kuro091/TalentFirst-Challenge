import { Link } from '@/components/Elements/Link';
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
        employees.map((employee) => (
          <Link to={`/user/${employee.id}`}>
            <EmployeeCard key={employee.id} employee={employee} />
          </Link>
        ))}
    </section>
  );
};

export default EmployeeList;
