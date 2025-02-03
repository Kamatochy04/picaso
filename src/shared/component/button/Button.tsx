import { ComponentProps, ComponentPropsWithRef, FC } from 'react';

import { ButtonVariants, buttonVariants } from './buttonVariant';

type ButtonProps = ComponentProps<'button'> &
  ComponentPropsWithRef<'button'> &
  ButtonVariants & {
    children?: React.ReactNode;
  };

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  children,
  color,
  ...props
}) => {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
};
