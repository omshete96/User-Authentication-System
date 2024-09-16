// pages/api/login.js
import bcrypt from 'bcryptjs';
import db from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        try {
            const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
            const user = rows[0];

            if (user && await bcrypt.compare(password, user.password)) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error logging in' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
