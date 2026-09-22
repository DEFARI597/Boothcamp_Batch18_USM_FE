import axios from 'axios';

export const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/users');
        return response.data;
    } catch (error) {
        console.error("Could not fetch users:", error);
        return [];
    }
};
