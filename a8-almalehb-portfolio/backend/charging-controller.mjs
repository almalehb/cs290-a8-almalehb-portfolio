// Controllers for the Charging Collection

import 'dotenv/config';
import express from 'express';
import * as chargingSessions from './charging-model.mjs';
import nodemailer from 'nodemailer';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/chargingSessions', (req, res) => {
    chargingSessions.createChargingSession(
        req.body.date,
        req.body.durationInSeconds,
        req.body.address,
        req.body.kwh,
        req.body.pricePerKwh
    )
        .then(chargingSession => {
            res.status(201).json(chargingSession);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'There was an error in the request. Unable to create the charging entry.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/chargingSessions', (req, res) => {
    chargingSessions.retrieveChargingSessions()
        .then(chargingSession => {
            if (chargingSession !== null) {
                res.json(chargingSession);
            } else {
                res.status(404).json({ Error: 'There are no charging sessions available.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was an error in the request to retrieve charging sessions.' });
        });
});


// RETRIEVE by ID controller
app.get('/chargingSessions/:_id', (req, res) => {
    chargingSessions.retrieveChargingSessionByID(req.params._id)
        .then(chargingSession => {
            if (chargingSession !== null) {
                res.json(chargingSession);
            } else {
                res.status(404).json({ Error: 'The requested charging session does not exist.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was an error in the request to retrieve the charging session.' });
        });

});


// UPDATE controller ************************************
app.put('/chargingSessions/:_id', (req, res) => {
    chargingSessions.updateChargingSession(
        req.params._id,
        req.body.date,
        req.body.durationInSeconds,
        req.body.address,
        req.body.kwh,
        req.body.pricePerKwh
    )
        .then(chargingSession => {
            res.json(chargingSession);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'There was an error in the request to update the charging session.' });
        });
});


// DELETE Controller ******************************
app.delete('/chargingSessions/:_id', (req, res) => {
    chargingSessions.deleteChargingSessionById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Successfully deleted the charging session.' });
            } else {
                res.status(404).json({ Error: 'Unable to find the charging session to be deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'There was an error in the request to delete the charging session.' });
        });
});


app.use(express.urlencoded({ 
    extended: true
}));

app.use(express.static('public'));

let htmlStart = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Besher Al Maleh - Home</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <meta name="robots" content="noindex,noarchive, nofollow" />

    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"> 
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png"> 
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png"> 
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"> 
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"> 
    <link rel="manifest" href="site.webmanifest">
</head>

<body>
    <header>
        <img src="android-chrome-192x192.png" alt="Besher Al Maleh">
        <h1>Besher Al Maleh</h1>
        <p>Web development fundamentals, including HTML, CSS, and JavaScript.</p>
    </header>
    <nav id="pages">
        <a href="index.html">Home</a>
        <a href="contact.html">Contact Us</a>
        <a href="gallery.html">Gallery</a>
        <a href="order.html">Order</a>
    </nav>
    <main>
`

let htmlEnd = `
<footer>
        &copy; 2023 Besher Al Maleh
    </footer>
</body>

</html>
`

app.post("/formResults", (req, res) => { 
    const user = req.body.fullName;
    const email = req.body.email;
    const message = req.body.message;
    const rating = req.body.rating; 
    const mode = req.body.mode;
    const improvements = Array.isArray(req.body.improvements) ? req.body.improvements : [req.body.improvements];
    let improvementIntro = `And we have noted the following improvements that you suggested:`;
    const listItems = improvements.map(improvement => `<li><strong>${improvement}</strong></li>`).join('\n');
    let unorderedList = `<ul>\n${listItems}\n</ul>`;

    if (improvements.length == 1) { 
        if (improvements[0] === undefined) { 
            improvementIntro = ``; 
            unorderedList = `<p></p>`; 
        }  else { 
            improvementIntro = `And we have noted the following improvement that you suggested:`;
        }
    }

    res.send(`${htmlStart}
        <section> 
            <h2>Response</h2>
            <article>
                <h3>Hi there, <strong>${user}</strong></h3>
                <p>Your message was well-received. We greatly appreciate your feedback! Thank you for giving us a rating of <strong>${rating}</strong>. We understand that you prefer using <strong>${mode}</strong> while browsing online. ${improvementIntro}</p>
                    ${unorderedList}
                <p>We will get in touch with you at <strong>${email}</strong> if we have more questions.</p>
            </article>
        </section>
        ${htmlEnd}
    `)


    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        // Message object
        let emailMessage = {
            from: 'Besher Al Maleh <besher@oregonstate.edu>',
            to: `${user} <${email}>`,
            subject: 'Thank you for your feedback!',
            text: `Hi there, ${user}.\n 
            Your message was well-received. We greatly appreciate your feedback! Thank you for giving us a rating of ${rating}. We understand that you prefer using ${mode} while browsing online. ${improvementIntro} ${improvements}.
                \nWe will get in touch with you at ${email} if we have more questions.
                \nYour submitted feedback: ${message}`,
            html: `
                <h3>Hi there, <strong>${user}</strong></h3>
                <p>Your message was well-received. We greatly appreciate your feedback! Thank you for giving us a rating of <strong>${rating}</strong>. We understand that you prefer using <strong>${mode}</strong> while browsing online. ${improvementIntro}</p>
                    ${unorderedList}
                <p>We will get in touch with you at <strong>${email}</strong> if we have more questions.</p>
                <p>Your submitted feedback: ${message}</p>`
        };

        transporter.sendMail(emailMessage, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.emailMessage);
                return process.exit(1);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });


})

app.post("/orderResults", (req, res) => { 
    const user = req.body.fullName;
    const email = req.body.email;
    const address = req.body.address
    const instructions = req.body.instructions;
    const choice = CompareOrderData(req.body.product);
    const quantity = req.body.amount;
    const itemPrice = choice.price;
    const itemString = choice.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    const total = quantity * itemPrice; 
    const totalString = total.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});

    res.send(`${htmlStart}
        <section> 
            <h2>Success!</h2>
            <article>
                <h3>Hi there, <strong>${user}</strong></h3>
                <p>Your order has been well-received. We greatly appreciate your business! We will be delivering your order of <strong>${quantity}</strong> <strong>${choice.product}</strong> manufactured by the company <strong>${choice.company}</strong> for a total price of <strong>${totalString}</strong>. For reference, a single <strong>${choice.product}</strong> costs <strong>${itemString}</strong>.</p>
                <p>We will be delivering your order to the address that you provided at: <strong>${address}</strong></p>
                <p>Your special instructions have been noted: <strong>${instructions}</strong></p>
                <p>You will receive a confirmation email for this order at <strong>${email}</strong>.</p>
            </article>
        </section>
        ${htmlEnd}
    `)


    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        // Message object
        let emailMessage = {
            from: 'Besher Al Maleh <besher@oregonstate.edu>',
            to: `${user} <recipient@example.com>`,
            subject: 'Thank you for your feedback!',
            text: `Hi there, ${user}
            \nYour order has been well-received. We greatly appreciate your business! We will be delivering your order of ${quantity} ${choice.product} manufactured by the company ${choice.company} for a total price of ${totalString}. For reference, a single ${choice.product} costs ${itemString}.
            \nWe will be delivering your order to the address that you provided at: ${address}
            \mYour special instructions have been noted: ${instructions}
            \nYou will receive a confirmation email for this order at ${email}.`,
            html: `
            <h3>Hi there, <strong>${user}</strong></h3>
            <p>Your order has been well-received. We greatly appreciate your business! We will be delivering your order of <strong>${quantity}</strong> <strong>${choice.product}</strong> manufactured by the company <strong>${choice.company}</strong> for a total price of <strong>${totalString}</strong>. For reference, a single <strong>${choice.product}</strong> costs <strong>${itemString}</strong>.</p>
            <p>We will be delivering your order to the address that you provided at: <strong>${address}</strong></p>
            <p>Your special instructions have been noted: <strong>${instructions}</strong></p>
            <p>You will receive a confirmation email for this order at <strong>${email}</strong>.</p>`
        };

        transporter.sendMail(emailMessage, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.emailMessage);
                return process.exit(1);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });


})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
