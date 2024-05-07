import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Load existing users from JSON file
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const rawData = fs.readFileSync(filePath);
    const users = JSON.parse(rawData);

    // Find user by username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}