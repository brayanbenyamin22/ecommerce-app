import React from 'react';
import styles from "./Layout.module.css";

interface layoutProps {
    children: React.ReactNode
}
export default function layout ({children}:layoutProps) {
    return(
        <div className={styles.layout}>
            {children}
        </div>
    );
}