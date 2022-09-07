import React from 'react';

import styles from './PostFormModal.module.scss'

export default function PostFormModal({children, visible, setVisible}) {

  return (
    <div className={`${styles.formModal} ${visible ? styles.active : ''}`} onClick={() => setVisible(false)}>
        <div className={styles.formModalContent} onClick={event => event.stopPropagation()}>
                {children}
        </div>
    </div>
  )
}
