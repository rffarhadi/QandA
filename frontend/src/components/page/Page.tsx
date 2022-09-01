import React from 'react';
import { PageTitle } from './PageTitle';
import styles from '../../styling/Page.module.css';


interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page = ({ title, children }: Props) => (
    <div className={styles.container}>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  );