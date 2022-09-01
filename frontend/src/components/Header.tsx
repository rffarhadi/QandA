import React from 'react';
import { UserIcon } from '../icon/Icons';
import styles from '../styling/Header.module.css'

export const Header = () => {
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    };
    return (
        <div className={styles.container}>
            <a href='./'>Q & A</a>
            <input
                type='text'
                placeholder='Search ...'
                onChange={handleSearchInputChange}
            />
            <a href='./signin'>
                <UserIcon />
                <span>Sign In</span>
            </a>
        </div>)
};