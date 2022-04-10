import nodemailer from "nodemailer";

export default (req, res) => {
  require("dotenv").config();
  const { name, email, msg } = req.body;
  console.log(name);
  console.log(email);
  console.log(msg);

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: email,
    to: process.env.MAIL,
    subject: `Contact form detail from ${name}`,
    text: msg,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });

  res.status(200).json(req.body);
};
