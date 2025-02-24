const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact",async (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }
 
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
  // let mailOptions = {
  //   from: data.email,
  //   to: "sunethragamage369@gmail.com",
  //   subject: `message from ${data.name}`,
  //   html: `

  //           <h3>Informations<h3/>
  //           <ul>
  //           <li>Name: ${data.name}<li/>
  //           <li>Email: ${data.email}<li/>
  //           </ul>
  //           <h3>Message</h3>
  //           <p>${data.message}<p/>
  //           `,
  // };

  // smtpTransporter.sendMail(mailOptions, (error) => {
  //   console.log("Mail Options",mailOptions);
  //   try {
  //     if (error)
  //       return res.status(400).json({ msg: "Please Fill All The Fields!" });
  //     res.status(200).json({ msg: "Thank You For Contacting Ehizeex." });
  //   } catch (error) {
  //     if (error) return res.status(500).json({ msg: "There is server error" });
  //   }
  // });

  try {
    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: process.env.RECEIVER_EMAIL, // Your receiving email
      subject: "🚀 New Job Offer 🚀",
      text: data.message,
        html: `
            <h3>Job Informations 📝<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
    });
    res.status(200).json({ success: true, msg: "Thank You For Contacting Ireshan." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email sending failed!" });
    return res.status(400).json({ msg: "Please Fill All The Fields!" });
  }
});
module.exports = router;
