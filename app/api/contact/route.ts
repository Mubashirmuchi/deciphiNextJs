

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service are required" },
        { status: 400 }
      );
    }



    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });

    // Email to you (notification)
    const notificationEmail = {
      from: process.env.EMAIL_USER,
      to: "mubashirfreston@gmail.com",
      subject: `Contact Form: ${name} - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email,
    };

    // Auto-reply email to customer
    const autoReplyEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Inquiry - We'll Be In Touch Soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; text-align: center;">Thank You for Contacting Us!</h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out to us regarding <strong>${service}</strong>. We have received your message and appreciate your interest in our cybersecurity services.</p>
            <p><strong>Our team will contact you within 24-48 hours</strong> to discuss your requirements and how we can help secure your business.</p>
          </div>
          
          <div style="border-left: 4px solid #10b981; padding-left: 16px; margin: 20px 0;">
            <p style="font-size: 14px; color: #6b7280;">
              <strong>Your Message Summary:</strong><br>
              Service: ${service}<br>
              Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 30px;">
            <p style="color: #6b7280;">
              Best regards,<br>
              <strong>Your Cybersecurity Team</strong><br>
              Email: mubashirfreston@gmail.com
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 12px; color: #9ca3af;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(autoReplyEmail),
    ]);

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
