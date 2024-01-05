import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { dateMask } from './Utility/mask';
import { formattedDate } from './Utility/formatter';

import {
  Container,
  ContainerPassword,
  ContainerRadio,
  ContainerSearch,
} from './style';

export const Input = ({
  placeholder,
  register,
  name,
  errors,
  maskInput,
  date,
  fillInput,
  isEmpty = true,
  ...rest
}) => {
  const [haveText, setHaveText] = useState(!isEmpty);
  const [isErrored, setIsErrored] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isEmptyValue, setIsEmptyValue] = useState(isEmpty);

  dateMask(inputValue);

  useEffect(() => {
    if (date && fillInput) {
      setInputValue(formattedDate(new Date()));
    }
  }, []);

  useEffect(() => {
    setIsErrored(!!errors[name]?.message);
  }, [errors[name]?.message]);

  return (
    <Container
      haveText={haveText}
      isErrored={isErrored}
      isEmpty={isEmptyValue && inputValue === ''}
    >
      <input
        value={inputValue}
        type="text"
        {...register(name, {
          onChange: (event) => {
            if (maskInput) {
              let maskResult = dateMask(event.target.value);
              setInputValue(maskResult);
            } else {
              setInputValue(event.target.value);
            }
            if (event.target.value === '') {
              setIsEmptyValue(true);
            }
            setHaveText(event.target.value.trim() !== '');
          },
        })}
        {...rest}
      />
      <p className="placeholder">{placeholder}</p>
      {isErrored && <p className="error">{errors[name]?.message}</p>}
    </Container>
  );
};

export const InputRadioContainer = ({ title, name, errors, children }) => {
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    setIsErrored(!!errors[name]?.message);
  }, [errors[name]?.message]);

  return (
    <ContainerRadio isErrored={isErrored}>
      <p className="title">{title}</p>
      <section className="options">{children}</section>
      {isErrored && <p className="error">{errors[name]?.message}</p>}
    </ContainerRadio>
  );
};

export const InputRadio = ({ register, name, label, sizeBigger }) => {
  return (
    <ContainerRadio className="options__option" sizeBigger={sizeBigger}>
      <input type="radio" id={label} value={label} {...register(name)} />
      <label htmlFor={label}>{label}</label>
    </ContainerRadio>
  );
};

export const InputPassword = ({ placeholder, register, name, errors }) => {
  const [haveText, setHaveText] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsErrored(!!errors[name]?.message);
  }, [errors[name]?.message]);

  return (
    <ContainerPassword haveText={haveText} isErrored={isErrored}>
      <input
        type={showPassword ? 'text' : 'password'}
        {...register(name, {
          onChange: (event) => setHaveText(event.target.value.trim() !== ''),
        })}
      />

      {showPassword ? (
        <FiEyeOff onClick={() => setShowPassword(!showPassword)} />
      ) : (
        <FiEye onClick={() => setShowPassword(!showPassword)} />
      )}

      <p className="placeholder">{placeholder}</p>
      {isErrored && <p className="error">{errors[name]?.message}</p>}
    </ContainerPassword>
  );
};

export const InputSearch = ({ ...rest }) => {
  return (
    <ContainerSearch>
      <input type="text" {...rest} />
    </ContainerSearch>
  );
};
