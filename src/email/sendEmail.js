// submitForm.js

import { createTransport } from "nodemailer";

export async function handler(event, context) {
  const data = JSON.parse(event.body);

  // Your Gmail credentials
  //   const transporter = createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "your-email@gmail.com",
  //       pass: "your-gmail-password",
  //     },
  //   });

  // Email content
  const mailOptions = {
    from: data.email,
    to: "minkhant88887@gmail.com",
    subject: data.subject,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
  };

  // Send email
  await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully" }),
  };
}
