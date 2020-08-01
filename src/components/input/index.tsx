import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <label aria-label={name}>
        {Icon && <Icon size={20} />}
        <input
          type="text"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...props}
        />
      </label>
    </Container>
  );
};

export default Input;
