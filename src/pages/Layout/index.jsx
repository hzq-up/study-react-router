import { Outlet, NavLink } from "react-router-dom";
import styles from './index.module.scss'

export default function Layout() {


  return (
    <div className={styles.container}>
      <div className={styles.siderBar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'/pageA'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                pageA
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/pageB'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                pageB
              </NavLink>
            </li>
            <li>
              <a href={`/contacts/2`}>错误页面</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
