import Link from 'next/link';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';
export default function Home() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1 className={styles.title}>Welcome to the <span>User Authentication System</span></h1>
                <p className={styles.subtitle}>
                    Secure and reliable authentication for your web applications.
                </p>
                <div className={styles.links}>
                    <Link href="/register" className={styles.btnPrimary}>
                        Register
                    </Link>
                    <Link href="/login" className={styles.btnPrimary}>
                        Login
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className={styles.features}>
                <h2 className={styles.featuresTitle}>Why Choose Us?</h2>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <h3>Secure</h3>
                        <p>Top-notch security with hashed passwords and encrypted data.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>Fast</h3>
                        <p>Lightning-fast registration and login processes.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>User-Friendly</h3>
                        <p>Simple and intuitive interface for everyone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
