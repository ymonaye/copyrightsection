import React from 'react'
import styles from "./Styles/copyright.module.sass";

function Copyright(){
    return(
        <div className={styles.copydiv}>
            <div className={styles.copyrp}> © Copyright
            <span className={styles.copyryear}> 2019 </span>
            all rights resserved 
            </div>
        </div>
    )
}

export default Copyright;