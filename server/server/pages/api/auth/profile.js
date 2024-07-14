import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await dbConnect();

    const { userId } = req.query;

    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.log('Error:', error);
        res.status(400).json({ message: error.message });
    }
}
