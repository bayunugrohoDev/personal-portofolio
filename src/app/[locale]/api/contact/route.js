import secret from "@/config/secret";
import nodemailer from "nodemailer";
export async function POST(request) {
  const { name, email, message } = await request.json();

  // Create a transporter object using SMTP
  console.log('secret',secret)
  const transporter = nodemailer.createTransport({
    host: secret.email_host,
    service: secret.email_service, //comment this line if you use custom server/domain
    port: secret.email_port,
    secure: true,
    auth: {
      user: secret.email_user, // your Gmail email address
      pass: secret.email_pass, // your Gmail password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: "bayunugroho963@gmail.com",
    subject: `Contact form submission Bayungroho.dev contact`,
    text: message,
    html: `<p>You have a new contact form submission</p><br>
             <p><strong>Name: </strong> ${name}</p><br>
             <p><strong>Email: </strong> ${email}</p><br>
             <p><strong>Message: </strong> ${message}</p><br>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response({ message: "Email sent successfully!" });
  } catch (error) {
    console.log("error", error);
    return new Response(
      { message: "Error sending email" + error },
      {
        status: 500,
      }
    );
  }
}
