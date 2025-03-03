'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactFormSubmission(formData: FormData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const countryCode = formData.get("countryCode");
  const phone = formData.get("phone");
  const businessEnquiry = formData.get("businessEnquiry");

  const { data, error } = await resend.emails.send({
    from: `Advantisec Website <onboarding@resend.dev>`,
    to: process.env.EMAIL_TO as string,
    subject: "New Contact Form Submission",
    html: `
      <h1 style="font-size: 24px; color: #333">New Contact Form Submission</h1>
      <p style="margin-bottom: 10px;">First Name: ${firstName}</p>
      <p style="margin-bottom: 10px;">Last Name: ${lastName}</p>
      <p style="margin-bottom: 10px;">Email: ${email}</p>
      <p style="margin-bottom: 10px;">Phone: ${countryCode} ${phone}</p>
      <p style="margin-bottom: 10px;">Business Enquiry: ${businessEnquiry === 'on' ? 'Yes' : 'No'}</p>
    `
  })

  if (error) {
    return { error };
  }

  return { data };
}


export async function quoteFormSubmission(formData: FormData) {
  const companyName = formData.get('companyName')
  const companyEmail = formData.get('companyEmail')
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const corporateEmail = formData.get('corporateEmail')
  const position = formData.get('position')
  const countryCode = formData.get('countryCode')
  const phone = formData.get('phone')

  const { data, error } = await resend.emails.send({
    from: "Advantisec Website <onboarding@resend.dev>",
    to: process.env.EMAIL_TO as string,
    subject: "New Quote Form Submission",
    html: `
      <h1 style="font-size: 24px; color: #333">New Contact Form Submission</h1>
      <p style="margin-bottom: 10px;">First Name: ${firstName}</p>
      <p style="margin-bottom: 10px;">Last Name: ${lastName}</p>
      <p style="margin-bottom: 10px;">Company Name: ${companyName}</p>
      <p style="margin-bottom: 10px;">Company Email: ${companyEmail}</p>
      <p style="margin-bottom: 10px;">Corporate Email: ${corporateEmail}</p>
      <p style="margin-bottom: 10px;">Position: ${position}</p>
      <p style="margin-bottom: 10px;">Phone: ${countryCode} ${phone}</p>
    `
  })

  if (error) {
    return { error };
  }

  return { data };
}