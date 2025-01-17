// pages/register.js
import { useState } from 'react';
import styles from '../styles/Auth.module.css';
import '../styles/globals.css';
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await res.json();
        setMessage(result.message || result.error);

        if (res.ok) {
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className={styles['auth-container']}>
            <form onSubmit={handleSubmit} className={styles['auth-form']}>
                <h1>Create an Account</h1>
                <p>Join us by creating a new account.</p>
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                    className={styles['input-field']}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className={styles['input-field']}
                />
                <button type="submit" className={styles['submit-button']}>Register</button>
                {message && <p className={styles['message']}>{message}</p>}
                <p className={styles['footer-text']}>Already have an account? <a href="/login">Login here</a></p>
            </form>
        </div>
    );
}
