import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const apiClient = {
  async getStatus() {
    try {
      const response = await axios.get(`${API_BASE_URL}/api`);
      return response.data;
    } catch (error) {
      console.error('Error fetching status:', error);
      throw error;
    }
  },

  async getSkills() {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/skills`);
      return response.data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  },

  async submitContact(name: string, email: string, message: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, {
        name,
        email,
        message,
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
};
