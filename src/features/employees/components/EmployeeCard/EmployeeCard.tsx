import { Card } from '@/components/Elements/Card';
import { Employee } from '../../types';
import { API_URL } from '@/config';
import styles from './EmployeeCard.module.scss';
import { GiSuitcase } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const fullName = `${employee.first_name} ${employee.last_name}`;
  const profilePicture = `${API_URL}/${employee.profile_picture_url}`;

  const additionalInfo = [
    {
      info: employee.employment?.title || 'No role',
      icon: <GiSuitcase size={25} />,
    },
    {
      info: employee.email || 'No email',
      icon: <MdEmail size={25} />,
    },
    {
      info: employee.phone_number || 'No phone number',
      icon: <AiFillPhone size={25} />,
    },
  ];

  return (
    <Card
      renderHeader={() => <h2>{fullName}</h2>}
      renderBody={() => (
        <>
          <div className={styles.employment_title_wrapper}>
            {additionalInfo.map((data) => (
              <div className={styles.employment_title_wrapper__section}>
                <div className={styles.employment_title_wrapper__icon}>{data.icon}</div>
                <p>{data.info}</p>
              </div>
            ))}
          </div>
        </>
      )}
      renderImg={() => <img src={profilePicture}></img>}
    />
  );
};

export default EmployeeCard;
