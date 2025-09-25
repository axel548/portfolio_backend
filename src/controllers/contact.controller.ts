// For a real application, you would use a service like Nodemailer or SendGrid to send an email.
const handleContactRequest = (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact request received:', { name, email, message });
    // Here you would add your email sending logic.
    res.json({ msg: 'Message received. Thank you for contacting me!' });
};

module.exports = { handleContactRequest };
