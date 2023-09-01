// import styles from './Button.module.css'
// const Button = ({children}) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         <div className={styles.right} />
//         <div className={styles.center} />
//         <div className={styles.left} />
//       </div>
//       <div className={styles.middle}>
//         <div className={styles.right} />
//         <div className={styles.center}>{children}</div>
//         <div className={styles.left} />
//       </div>
//       <div className={styles.bottom}>
//         <div className={styles.right} />
//         <div className={styles.center} />
//         <div className={styles.left} />
//       </div>
//     </div>
//   )
// }

// export { Button }

import styles from './Button.module.css'
const Button = ({children}) => {
  return (
    <div className={styles.sliced}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export { Button }