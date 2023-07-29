import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

import styles from './InputField.module.css';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder?: string;
  inputClassName?: string;
};

export const InputField = (props: InputFieldProps) => {
  const {
    type = 'text',
    label,
    className,
    registration,
    error,
    placeholder,
    inputClassName,
  } = props;
  return (
    <FieldWrapper label={label} error={error} className={className}>
      <input
        placeholder={placeholder}
        type={type}
        className={`${styles.input_field} ${inputClassName}`}
        {...registration}
      />
    </FieldWrapper>
  );
};
