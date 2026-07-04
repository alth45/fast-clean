import { NextRequest, NextResponse } from "next/server";

// Email configuration via SMTP
// For Gmail: use App Password (https://myaccount.google.com/apppasswords)
// Set these in your .env.local file:
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=your-email@gmail.com
// SMTP_PASS=your-app-password
// EMAIL_TO=recipient@example.com
// EMAIL_FROM=FastCleaning <noreply@fastcleaning.com>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, address, city, date, time, message } = body;

    // Validasi field wajib
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Mohon lengkapi semua field wajib" },
        { status: 400 }
      );
    }

    // Format email HTML
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">  Pesanan Baru - FastCleaning</h1>
          <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px;">Ada pesanan layanan kebersihan baru dari website</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <tr style="background: #f3f4f6;">
            <th style="padding: 12px 16px; text-align: left; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; width: 35%;">Field</th>
            <th style="padding: 12px 16px; text-align: left; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Detail</th>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Nama</td>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email</td>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">No. Telepon</td>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Layanan</td>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb;"><span style="background: #dbeafe; color: #1d4ed8; padding: 2px 10px; border-radius: 999px; font-size: 13px; font-weight: 500;">${escapeHtml(service)}</span></td>
          </tr>
          ${address ? `<tr><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Alamat</td><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(address)}</td></tr>` : ""}
          ${city ? `<tr><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Kota</td><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(city)}</td></tr>` : ""}
          ${date ? `<tr><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Tanggal</td><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(date)}</td></tr>` : ""}
          ${time ? `<tr><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Jam</td><td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;">${escapeHtml(time)}</td></tr>` : ""}
        </table>

        <div style="background: white; border-radius: 12px; padding: 20px; margin-top: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #374151;">Pesan Tambahan</h3>
          <p style="color: #6b7280; line-height: 1.6; margin: 0; font-size: 14px;">${escapeHtml(message)}</p>
        </div>

        <div style="margin-top: 24px; padding: 16px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a;">
          <p style="margin: 0; font-size: 13px; color: #92400e;">  Pesanan ini dikirim otomatis dari website FastCleaning. Harap segera hubungi pelanggan untuk konfirmasi.</p>
        </div>
      </div>
    `;

    // Coba kirim email via SMTP jika env tersedia
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.EMAIL_TO
    ) {
      const nodemailer = require("nodemailer");

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        subject: `  Pesanan Baru - ${service} dari ${name}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: "Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.",
      });
    } else {
      // Fallback: log ke console (development mode)
      console.log("=== PESANAN BARU ===");
      console.log("Nama:", name);
      console.log("Email:", email);
      console.log("Telepon:", phone);
      console.log("Layanan:", service);
      console.log("Alamat:", address);
      console.log("Kota:", city);
      console.log("Tanggal:", date);
      console.log("Jam:", time);
      console.log("Pesan:", message);
      console.log("====================");

      // Dalam development, tetap return sukses
      return NextResponse.json({
        success: true,
        message: "Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.",
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Maaf, terjadi kesalahan saat mengirim pesanan. Silakan coba lagi atau hubungi kami langsung.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
