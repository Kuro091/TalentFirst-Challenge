import { InputField } from '@/components/Form/InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './EmployeeSearch.module.scss';
import Button from '@/components/Elements/Button/Button';
import { Inputs } from '@/features/employees/types';

interface EmployeeSearchProps {
  onSubmitCallback?: (val: Inputs) => void;
}

const EmployeeSearch = ({ onSubmitCallback }: EmployeeSearchProps) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => onSubmitCallback && onSubmitCallback(data);

  return (
    <form className={styles.employee_search_container} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className={styles.search_input}
        placeholder='Search for a name...'
        registration={register('searchQuery')}
      />
      <Button type='submit' className={styles.submit_btn}>
        Search
      </Button>
      <Button onClick={() => reset()} className={styles.clear_btn}>
        Clear
      </Button>
    </form>
  );
};

export default EmployeeSearch;
