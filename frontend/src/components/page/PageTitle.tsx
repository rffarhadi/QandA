import React from 'react';
import styles from '../../styling/PageTitle.module.css';

interface Props {
    children: React.ReactNode;
}
export function PageTitle({ children }: Props) {
    return (
        <h2 className={styles.container}>{children}</h2>
    )
};