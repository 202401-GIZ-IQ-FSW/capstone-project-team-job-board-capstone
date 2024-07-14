import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await dbConnect();

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {  // simple comparison
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate token and respond
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.log('Error:', error);
        res.status(400).json({ message: error.message });
    }
}
