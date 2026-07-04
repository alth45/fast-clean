"use client";

import { useState } from "react";
import { 
  Send, Loader2, CheckCircle, AlertCircle, Phone, 
  Mail, MapPin, Calendar, Clock, User, Building2, 
  ChevronDown, ClipboardEdit
} from "lucide-react";

interface BookingFormProps {
  initialService?: string;
}

const serviceList = [
  { value: "Pembersihan Pasca Renovasi", label: "Pembersihan Pasca Renovasi" },
  { value: "Deep Clean", label: "Deep Clean" },
  { value: "Pembersihan Kontrak Bulanan", label: "Pembersihan Kontrak Bulanan" },
  { value: "Laundry Karpet & Sofa", label: "Laundry Karpet & Sofa" },
  { value: "Pembersihan Kamar Mandi & Dapur", label: "Pembersihan Kamar Mandi & Dapur" },
  { value: "Pembersihan Taman & Halaman", label: "Pembersihan Taman & Halaman" },
  { value: "Lainnya", label: "Lainnya" },
];

const BookingForm = ({ initialService = "" }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService,
    address: "",
    city: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          address: "",
          city: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Gagal terhubung ke server. Silakan coba lagi.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-sm">
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
          <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-50"></div>
          <CheckCircle className="relative z-10 h-12 w-12 text-green-600" />
        </div>
        <h3 className="mb-3 text-3xl font-bold text-gray-900">Pesanan Terkirim!</h3>
        <p className="mb-8 max-w-md text-base leading-relaxed text-gray-600">
          Terima kasih telah mempercayakan kebersihan Anda kepada kami. Tim FastCleaning akan segera menghubungi Anda melalui WhatsApp atau telepon dalam 1x24 jam untuk konfirmasi.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="rounded-full bg-blue-50 px-8 py-3.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
        >
          Kirim Pesanan Baru
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {status === "error" && (
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="font-medium">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Informasi Pribadi */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Informasi Pribadi</h3>
              <p className="text-sm text-gray-500">Data diri untuk keperluan kontak</p>
            </div>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
                />
                <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contoh@email.com"
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
                />
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                No. Telepon / WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08xx-xxxx-xxxx"
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
                />
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Detail Layanan */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Detail Layanan</h3>
              <p className="text-sm text-gray-500">Lokasi dan waktu pengerjaan</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
              Pilih Layanan <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="peer w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm text-gray-900 transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
              >
                <option value="" disabled>Pilih layanan yang diinginkan</option>
                {serviceList.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ClipboardEdit className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                Alamat Lengkap
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Jl. Contoh No. 123, RT/RW, Patokan..."
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
                />
                <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
            
            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">
                Kota
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Jakarta, Bogor, dll."
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
                />
                <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
            
            {/* Ruang kosong untuk menyeimbangkan grid jika diperlukan, tapi kita biarkan mengalir ke baris berikutnya */}
            
            <div>
              <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-700">
                Tanggal Pelaksanaan
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none [&::-webkit-calendar-picker-indicator]:opacity-50"
                />
                <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
            
            <div>
              <label htmlFor="time" className="mb-2 block text-sm font-medium text-gray-700">
                Jam Pelaksanaan
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none [&::-webkit-calendar-picker-indicator]:opacity-50"
                />
                <Clock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Pesan Tambahan */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Catatan Tambahan</h3>
              <p className="text-sm text-gray-500">Permintaan khusus (opsional)</p>
            </div>
          </div>

          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Jelaskan detail kebutuhan Anda, misalnya: luas area yang akan dibersihkan, kondisi khusus, atau permintaan spesifik lainnya..."
            className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        {/* Tombol Submit & Footer */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-blue-600/20"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Memproses Pesanan...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span>Kirim Permintaan Layanan</span>
              </>
            )}
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Dengan mengirim form ini, Anda menyetujui bahwa data Anda akan digunakan untuk memproses pesanan. Tim <span className="font-medium text-gray-900">FastCleaning</span> akan segera menghubungi Anda.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;