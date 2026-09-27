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

export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`http://localhost:3000/api/users/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error("Could not update user:", error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Could not delete user:", error);
        throw error;
    }
};
