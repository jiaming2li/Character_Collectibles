const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

async function testAuthentication() {
  try {
    console.log('Creating new test user...');
    
    // Create a new user
    const signupResponse = await axios.post(`${baseURL}/users/signup`, {
      name: 'Test Auth User',
      email: 'testauth@example.com',
      password: 'testpassword123'
    });
    
    console.log('User created successfully!');
    console.log('Token:', signupResponse.data.token);
    
    const token = signupResponse.data.token;
    const userId = signupResponse.data.userId;
    
    // Test the custom list creation
    console.log('\nTesting custom list creation...');
    
    const listResponse = await axios.post(
      `${baseURL}/users/${userId}/custom-lists`,
      {
        name: 'My Test List',
        plushId: '68b2ae4d561020f816f6b98d' // Using an existing plush ID from the API response
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Custom list created successfully!');
    console.log('Response:', listResponse.data);
    
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
      console.error('Status:', error.response.status);
    } else {
      console.error('Network error:', error.message);
    }
  }
}

testAuthentication();
