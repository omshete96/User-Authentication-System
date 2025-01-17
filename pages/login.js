// pages/login.js
import { useState } from 'react';
import styles from '../styles/Auth.module.css';
import '../styles/globals.css';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // New state for message type

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await res.json();
        
        // Set message and message type based on response
        if (res.ok) {
            setMessage(result.message);
            setMessageType('success'); // Set message type to success
            setUsername('');
            setPassword('');
        } else {
            setMessage(result.error);
            setMessageType('error'); // Set message type to error
        }
    };

    return (
        <div className={styles['auth-container']}>
            <form onSubmit={handleSubmit} className={styles['auth-form']}>
                <h1>Welcome Back!</h1>
                <p>Please log in to your account.</p>
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
                <button type="submit" className={styles['submit-button']}>Login</button>
                {message && (
                    <p className={messageType === 'success' ? styles['success-message'] : styles['error-message']}>
                        {message}
                    </p>
                )}
                <p className={styles['footer-text']}>Don't have an account? <a href="/register">Register here</a></p>
            </form>
        </div>
    );
}
