import React, { useState } from 'react';
import styles from './dropdown.module.scss';
import { ArrowIcon } from '@/shared/icons/ArrowIcon';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  options: Option[];
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<CustomSelectProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div>
      <label>{label}</label>
      <div className={styles.custom_select}>
        <div className={styles.select_box} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.selected_value}>
            {selectedOption ? selectedOption.label : ''}
          </div>
          <div className={`${styles.options} ${isOpen ? styles.open : ''}`}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles.option}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};
