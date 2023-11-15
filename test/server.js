const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Add this line


const app = express();
const PORT = process.env.PORT || 20;


app.use(cors()); // Add this line
app.use(bodyParser.json());

app.post('/submit-comment', (req, res) => {
    const { name, comment } = req.body;

    // Setup nodemailer to send emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ayhembouker.info@gmail.com',
            pass: 'bananajoetn7',
        },
    });

    const mailOptions = {
        from: 'ayhembouker.info@gmail.com',
        to: 'ayhembouker.info@gmail.com', // Send to your email address
        subject: 'New Comment on Your Website',
        text: `Name: ${name}\nComment: ${comment}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true });
        }
    });
});


// ... rest of the code ...

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'C:\Users\lenovo\Desktop\webdev\first web site work\source\index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
