// Import the necessary modules
const express = require('express');
const Twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Twilio account SID and Auth Token (Replace these with your actual credentials)
const accountSid = 'ACef07dbf891f18e2886b6118e20a11619';  // Replace with your Twilio Account SID
const authToken = 'c040b2f4aaec58289c3fc290ac7be32a';  // Replace with your Twilio Auth Token

// Create a Twilio client using the SID and Auth Token
const client = new Twilio(accountSid, authToken);

// Endpoint to send an SMS
app.post('/send-otp', (req, res) => {
  const { email, number } = req.body; // Extract email and phone number from the request body
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

  // Send SMS using Twilio
  client.messages.create({
    body: `Your OTP is: ${otp}`,
    from: '+918307062117', // Replace with your Twilio phone number
    to: number
  })
  .then(message => {
    console.log('Message sent:', message.sid);
    res.status(200).json({ message: 'OTP sent successfully' }); // Include OTP for testing (remove in production)
  })
  .catch(error => {
    console.error('Error sending message:', error); // Logs any errors that occur
    res.status(500).send('Failed to send message');
  });
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
