import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import { IMailOptions } from '../../types';

export const sendMail = async (
  optionsMail: IMailOptions
): Promise<SMTPTransport.SentMessageInfo | Error> => {
  const source = readFileSync(
    `./src/resources/${optionsMail.html.path}`,
    'utf-8'
  ).toString();
  const template = Handlebars.compile(source);
  const htmlToSend = template(optionsMail.html.replacements);

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: optionsMail.from || process.env.MAIL_FROM_ADDRESS,
    to: optionsMail.to,
    subject: optionsMail.subject,
    html: htmlToSend,
  };

  try {
    const info = await transport.sendMail(mailOptions);
    return info;
  } catch (error: unknown) {
    return new Error(error as string);
  }
};
