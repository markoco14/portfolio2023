import { NextApiRequest, NextApiResponse } from 'next';
import Mailgun from 'mailgun-js';

export default async function SendMail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  const mg = Mailgun({
    apiKey: process.env.MAILGUN_API_KEY as string,
    domain: process.env.MAILGUN_DOMAIN as string,
  });

  const data = {
    from: `${name} <${email}>`,
    to: 'mark.oconnor14@gmail.com', // replace with your Mailgun email
    subject: 'Hello from Next.js',
    text: `Hello Mark, ${name} from ${email} has sent you a message: ${message}`,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('ERROR', error);
      res.status(400).json('Message not sent.');
    } else {
      console.log(body);
      res.status(200).json('Message sent successfully.');
    }
  });
}