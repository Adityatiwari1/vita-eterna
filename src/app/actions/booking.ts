'use server';

import nodemailer from 'nodemailer';

export interface BookingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  treatment?: string;
  preferredDate?: string;
  preferredTime?: string;
  concern: string;
}

export async function submitConsultationBooking(data: BookingFormData) {
  try {
    if (!data.firstName || !data.phone || !data.email) {
      return {
        success: false,
        message: 'Please fill in all required fields (First Name, Phone, and Email).',
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'support@heallthmaxx.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // 1. Notification Email to the Clinic Team
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Consultation Request - Vita Eterna</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fdfcfb; margin: 0; padding: 24px; color: #2e445b; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(46, 68, 91, 0.08); border: 1px solid #f0ece4; }
          .header { background-color: #2e445b; padding: 36px 30px; text-align: center; color: #fdfcfb; }
          .logo-text { font-family: 'Georgia', serif; font-size: 32px; letter-spacing: 2px; color: #ffffff; margin: 0; font-style: italic; }
          .sub-brand { font-size: 11px; text-transform: uppercase; letter-spacing: 4px; color: #caa3b6; margin-top: 6px; }
          .content { padding: 36px 32px; background-color: #ffffff; }
          .badge { display: inline-block; background-color: #fdfcfb; color: #70583a; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; padding: 6px 14px; border-radius: 20px; margin-bottom: 20px; }
          h2 { color: #2e445b; font-size: 20px; margin-top: 0; margin-bottom: 16px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          td { padding: 12px 14px; font-size: 14px; border-bottom: 1px solid #f0ece4; }
          td.label { color: #70583a; font-weight: 600; width: 35%; background-color: #fdfcfb; }
          td.val { color: #2e445b; font-weight: 500; }
          .concern-box { background-color: #fdfcfb; border-left: 4px solid #caa3b6; padding: 16px; border-radius: 4px; margin-top: 20px; font-size: 14px; line-height: 1.6; color: #2e445b; }
          .footer { background-color: #fdfcfb; padding: 20px; text-align: center; font-size: 12px; color: #70583a; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo-text">Vita Eterna</h1>
            <div class="sub-brand">By Dr Rishi &bull; Luxury Medical Aesthetics</div>
          </div>
          <div class="content">
            <div class="badge">New Consultation Booking</div>
            <h2>New Patient Consultation Request</h2>
            <p style="font-size: 14px; color: #555; line-height: 1.5;">A new client has requested a consultation via the Vita Eterna website.</p>
            
            <table>
              <tr>
                <td class="label">Patient Name</td>
                <td class="val">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="val"><a href="tel:${data.phone}" style="color: #2e445b; text-decoration: none; font-weight: 600;">${data.phone}</a></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="val"><a href="mailto:${data.email}" style="color: #2e445b; text-decoration: none;">${data.email}</a></td>
              </tr>
              ${data.treatment ? `
              <tr>
                <td class="label">Interested In</td>
                <td class="val" style="color: #70583a; font-weight: 600;">${data.treatment}</td>
              </tr>` : ''}
              ${data.preferredDate ? `
              <tr>
                <td class="label">Preferred Date</td>
                <td class="val">${data.preferredDate}</td>
              </tr>` : ''}
              ${data.preferredTime ? `
              <tr>
                <td class="label">Preferred Time</td>
                <td class="val">${data.preferredTime}</td>
              </tr>` : ''}
              <tr>
                <td class="label">Requested At</td>
                <td class="val">${submissionTime}</td>
              </tr>
            </table>

            ${data.concern ? `
              <div style="margin-top: 24px;">
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #70583a; font-weight: 600;">Client Concern / Goals:</div>
                <div class="concern-box">${data.concern.replace(/\n/g, '<br/>')}</div>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            Vita Eterna Aesthetics &bull; Inside Healthmaxx Hospital, Kharar &bull; +91 95177 36935
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Client Confirmation Email
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Your Consultation Request - Vita Eterna</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fdfcfb; margin: 0; padding: 24px; color: #2e445b; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(46, 68, 91, 0.08); border: 1px solid #f0ece4; }
          .header { background-color: #2e445b; padding: 36px 30px; text-align: center; color: #fdfcfb; }
          .logo-text { font-family: 'Georgia', serif; font-size: 32px; letter-spacing: 2px; color: #ffffff; margin: 0; font-style: italic; }
          .sub-brand { font-size: 11px; text-transform: uppercase; letter-spacing: 4px; color: #caa3b6; margin-top: 6px; }
          .content { padding: 36px 32px; background-color: #ffffff; line-height: 1.6; }
          h2 { color: #2e445b; font-size: 22px; margin-top: 0; margin-bottom: 14px; }
          p { font-size: 14px; color: #4a5568; }
          .highlight-card { background-color: #fdfcfb; border: 1px solid #f0ece4; border-radius: 12px; padding: 20px; margin: 24px 0; }
          .btn { display: inline-block; background-color: #2e445b; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 16px; }
          .footer { background-color: #fdfcfb; padding: 20px; text-align: center; font-size: 12px; color: #70583a; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo-text">Vita Eterna</h1>
            <div class="sub-brand">By Dr Rishi &bull; Elegant Timeless Aesthetics</div>
          </div>
          <div class="content">
            <h2>Dear ${data.firstName},</h2>
            <p>Thank you for reaching out to Vita Eterna. We have received your consultation request.</p>
            <p>Dr Rishi and our clinical aesthetic team believe in a thoughtful, individualized approach to skin, wellness, and graceful ageing. Our team will review your notes and contact you shortly to confirm your scheduled appointment.</p>
            
            <div class="highlight-card">
              <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #70583a; margin-bottom: 8px;">Your Request Summary:</div>
              <div style="font-size: 14px; color: #2e445b;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</div>
              <div style="font-size: 14px; color: #2e445b; margin-top: 4px;"><strong>Contact Phone:</strong> ${data.phone}</div>
              ${data.treatment ? `<div style="font-size: 14px; color: #2e445b; margin-top: 4px;"><strong>Treatment Interest:</strong> ${data.treatment}</div>` : ''}
              ${data.preferredDate ? `<div style="font-size: 14px; color: #2e445b; margin-top: 4px;"><strong>Preferred Date:</strong> ${data.preferredDate}</div>` : ''}
            </div>

            <p style="font-size: 13px; color: #718096;">If you have any immediate questions or need to reschedule, you can reach us directly at <a href="tel:+919517736935" style="color: #2e445b; font-weight: 600;">+91 95177 36935</a>.</p>
          </div>
          <div class="footer">
            Vita Eterna Aesthetics &bull; Inside Healthmaxx Hospital, Sunny Commercial Complex, Kharar 140901
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin / clinic
    await transporter.sendMail({
      from: '"Vita Eterna Consultation" <support@heallthmaxx.com>',
      to: 'support@heallthmaxx.com',
      replyTo: data.email,
      subject: `New Consultation Request: ${data.firstName} ${data.lastName} - Vita Eterna`,
      html: adminHtml,
    });

    // Also send receipt to the client
    try {
      await transporter.sendMail({
        from: '"Vita Eterna" <support@heallthmaxx.com>',
        to: data.email,
        subject: 'Your Consultation Request with Dr Rishi | Vita Eterna',
        html: clientHtml,
      });
    } catch (clientErr) {
      console.warn('Could not send confirmation to client, but admin email was sent:', clientErr);
    }

    return {
      success: true,
      message: 'Your consultation request has been submitted successfully. Our team will contact you shortly.',
    };
  } catch (error: any) {
    console.error('Error submitting consultation booking:', error);
    return {
      success: false,
      message: error?.message || 'Failed to submit consultation request. Please try again or call us directly.',
    };
  }
}
