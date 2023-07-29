import { Inputs } from '../../types';
import EmployeeSearch from './EmployeeSearch/EmployeeSearch';
import styles from './EmployeesHeader.module.scss';

interface EmployeesHeaderProps {
  employeeCount: number | undefined;
  onSubmitCallback?: (val: Inputs) => void;
}

const EmployeesHeader = ({ employeeCount, onSubmitCallback }: EmployeesHeaderProps) => {
  const isPlural = employeeCount !== 1;

  return (
    <div className={styles.header__container}>
      {employeeCount ? (
        <div className={styles.header__title}>
          {employeeCount} {isPlural ? 'employees were found' : 'employee was found'}
        </div>
      ) : (
        <h1>No employees found</h1>
      )}
      <EmployeeSearch onSubmitCallback={onSubmitCallback} />
    </div>
  );
};

export default EmployeesHeader;
