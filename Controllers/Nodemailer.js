const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'ines.lahbib7@gmail.com', // generated ethereal user
    pass: 'umzn hapg exgp vlmj', // generated ethereal password
  },
});

const sendEmail = async (req, res) => { 
  const { email, subject, message } = req.body;
  console.log (email, subject, message);

  var mailOptions = {
    from: email,
    to:"ines.lahbib7@gmail.com",
    subject: subject,
   
    html:`<img src="https://images.caradisiac.com/images/2/5/1/3/202513/S0-le-classement-mondial-des-marques-automobiles-de-luxe-756694.jpg"/>
   <h1>${message}</h1> `
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).send({error});
    } else {
      res.status(200).send({msg:"email sent sucessfully"})
    }
  });
};

module.exports = { sendEmail };