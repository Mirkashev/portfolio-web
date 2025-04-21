import { type ElementType } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';

export type Heading = 'h1' | 'h2' | 'h3';
export type Paragraphs = 'p';
export type Captions = 'c';
export type TypographyType = Heading | Paragraphs | Captions;

interface Props {
  type?: TypographyType;
  semibold?: boolean;
}

const Typography = <T extends ElementType = 'p'>({
  type = 'p',
  className,
  as,
  semibold,
  ...props
}: PolymorphicProps<T, Props>) => {
  const Tag = as ?? 'p';
  return (
    <Tag className={clsx(className, styles[type], { [styles.semibold]: semibold })} {...props} />
  );
};

export default Typography;
