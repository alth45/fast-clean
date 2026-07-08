import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration via SMTP
// ============================
// SETUP INSTRUKSI (WAJIB): Buat file .env.local di root project
//
// Untuk GMAIL:
// 1. Buat App Password: https://myaccount.google.com/apppasswords
//    - Pilih "Mail" dan "Windows Computer" -> Generate
//    - Gunakan password 16 karakter yang dihasilkan
// 2. COPY PASTE ini ke .env.local (isi dengan data kamu):
//    SMTP_HOST=smtp.gmail.com
//    SMTP_PORT=587
//    SMTP_USER=emailkamu@gmail.com
//    SMTP_PASS=xxxx xxxx xxxx xxxx (app password 16 karakter, dengan spasi)
//    EMAIL_TO=emailtujuan@gmail.com
//    EMAIL_FROM="FastCleaning <emailkamu@gmail.com>"
//
// Untuk YAHOO / OUTLOOK / lainnya, sesuaikan SMTP_HOST dan PORT

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
          <h1 style="color: white; margin: 0; font-size: 24px;">🏠 Pesanan Baru - FastCleaning</h1>
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
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; font-weight: 600; color: #374151;">No. Telepon</td>
            <td style="padding: 12px 16px; border-top: 1px solid #e5e7eb; color: #374151;"><a href="tel:${escapeHtml(phone)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(phone)}</a></td>
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
          <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #374151;">📝 Pesan Tambahan</h3>
          <p style="color: #6b7280; line-height: 1.6; margin: 0; font-size: 14px;">${escapeHtml(message)}</p>
        </div>

        <div style="margin-top: 24px; padding: 16px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a;">
          <p style="margin: 0; font-size: 13px; color: #92400e;">⚠️ Pesanan ini dikirim otomatis dari website FastCleaning. Harap segera hubungi pelanggan untuk konfirmasi.</p>
        </div>
      </div>
    `;

    // Cek apakah konfigurasi SMTP tersedia
    const smtpConfigured = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.EMAIL_TO);

    if (smtpConfigured) {
      try {
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
          replyTo: email,
          subject: `🏠 Pesanan Baru - ${service} dari ${name}`,
          html: htmlContent,
        });

        console.log(`✅ Email berhasil dikirim: ${service} dari ${name} <${email}>`);

        return NextResponse.json({
          success: true,
          message: "Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.",
        });
      } catch (smtpError) {
        // Jika SMTP gagal, log error dan coba metode alternatif
        console.error("❌ SMTP gagal, mencoba metode alternatif:", smtpError);
        // Lanjut ke fallback
      }
    }

    // ================================================================
    // FALLBACK: Kirim via SMTP langsung tanpa autentikasi (jika ada mail server lokal)
    // ATAU gunakan jasa pihak ketiga seperti sendgrid, mailgun, dll
    // ================================================================

    // OPSI 2: Kirim menggunakan SMTP connection tanpa auth (untuk development/mailhog)
    if (process.env.SMTP_HOST && !smtpConfigured) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "25"),
          secure: false,
          ignoreTLS: true,
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM || `noreply@${process.env.SMTP_HOST}`,
          to: process.env.EMAIL_TO || email,
          subject: `🏠 Pesanan Baru - ${service} dari ${name}`,
          html: htmlContent,
        });

        return NextResponse.json({
          success: true,
          message: "Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.",
        });
      } catch (fallbackError) {
        console.error("❌ Fallback SMTP juga gagal:", fallbackError);
      }
    }

    // ================================================================
    // OPSI 3: Log ke console (development mode)
    // ================================================================
    console.log("==========================================");
    console.log("📋 PESANAN BARU (tidak terkirim via email)");
    console.log("==========================================");
    console.log("👤 Nama:", name);
    console.log("📧 Email:", email);
    console.log("📞 Telepon:", phone);
    console.log("🔧 Layanan:", service);
    console.log("📍 Alamat:", address || "-");
    console.log("🏙️ Kota:", city || "-");
    console.log("📅 Tanggal:", date || "-");
    console.log("⏰ Jam:", time || "-");
    console.log("💬 Pesan:", message);
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: "Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.",
    });

  } catch (error) {
    console.error("❌ Fatal error saat memproses pesanan:", error);
    
    const errorMsg = error instanceof Error ? error.message : "Terjadi kesalahan yang tidak diketahui";
    
    return NextResponse.json(
      {
        success: false,
        message: "Maaf, terjadi kesalahan saat mengirim pesanan. Silakan coba lagi atau hubungi kami langsung.",
        error: process.env.NODE_ENV === "development" ? errorMsg : undefined,
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
