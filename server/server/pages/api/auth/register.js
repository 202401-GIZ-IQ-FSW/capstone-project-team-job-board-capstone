import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await dbConnect();

    const { username, password, email, dateOfBirth, gender, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            username,
            password,  // store as plain text or use existing method for hashing
            email,
            dateOfBirth,
            gender,
            role,
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.log('Error:', error);
        res.status(400).json({ message: error.message });
    }
}
