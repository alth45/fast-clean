## Cara dapetin SMTP_PASS (App Password Gmail):
# Buka ``` https://myaccount.google.com/apppasswords ```

Aktivasi 2-Step Verification dulu kalau belum
Setelah itu, di halaman App Passwords:
Select app → ```pilih Mail```
Select device → ```pilih Windows Computer (atau Other)```
Klik Generate
Google bakal kasih password 16 karakter (ada spasinya). Copy itu ke ```SMTP_PASS```
Cara test apakah sudah berfungsi:
Simpan file ```.env.local```
Restart server development: npm run dev
Isi form di halaman /pesan/[slug] dan submit
Cek email kamu di ```EMAIL_TO``` — harusnya masuk dalam beberapa detik
Kalau mau pake selain Gmail (Outlook, Yahoo, dll), tinggal ganti SMTP_HOST dan SMTP_PORT-nya — kodenya sudah support.