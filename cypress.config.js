const { defineConfig } = require("cypress");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  pool: true,
  host: "smtp.m1.websupport.sk",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "info@webspital.sk",
    pass: "He2Yov/ydz",
  },
});

// const sendAnEmail = (message) => {
//   console.log("kokot");
//   console.log(message);
//   const nodemailer = require("nodemailer");

//   const client = nodemailer.createTransport({
//     pool: true,
//     host: "smtp.m1.websupport.sk",
//     port: 465,
//     secure: true, // use TLS
//     auth: {
//       user: "info@webspital.sk",
//       pass: "He2Yov/ydz",
//     },
//   });

//   const email = {
//     from: "info@webspital.sk",
//     to: "lenka.dunajova@gmail.com",
//     subject: "Hello",
//     text: message,
//     html: "<b>Hello world</b>",
//   };
//   const kokot = client.sendMail(email, function (err, info) {
//     return err ? err.message : "Message sent: " + info.response;
//   });
// };

module.exports = defineConfig({
  projectId: "7j4nob",
  e2e: {
    setupNodeEvents(on, config) {
      // console.log(config);
      require("cypress-email-results")(on, config, {
        email: "lenka.dunajova@gmail.com",
        from: "info@webspital.sk",
        // pass your transport object
        transport,
      });
    },
  },
});
