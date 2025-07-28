const jwt = require('jsonwebtoken');

const users = [
  { id: 1, email: 'test@example.com', password: 'password123' } // mock user
];

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || 'your_secret_key',
    { expiresIn: '1h' }
  );

  res.json({ token });
};

module.exports = { login };