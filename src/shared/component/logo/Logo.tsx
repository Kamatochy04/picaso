import { FC } from 'react';

import { LogoVariants, logoVarinat } from './logoVariant';

type LogoTypeProps = LogoVariants & {
  className?: string;
};

export const Logo: FC<LogoTypeProps> = ({ className, size }) => {
  return <div className={logoVarinat({ size, className })}>SYS</div>;
};
