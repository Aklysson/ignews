import { SignINButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="img"></img>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Post</a>
                </nav>
                <SignINButton />
            </div>
        </header>
    )
}