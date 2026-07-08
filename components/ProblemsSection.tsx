"use client";

import { Home, Trash2, Wind, Clock, Bug, Sparkles } from "lucide-react";

const problems = [
  {
    icon: Home,
    title: "Lingkungan Tidak Nyaman",
    description:
      "Rumah atau kantor yang kotor dan berantakan membuat Anda tidak betah. Debu berserakan, lantai licin, dan bau tak sedap mengganggu kenyamanan keluarga maupun karyawan.",
  },
  {
    icon: Trash2,
    title: "Taman Penuh Sampah",
    description:
      "Sampah menumpuk di halaman atau taman membuat pemandangan tidak sedap. Selain itu, bisa menjadi sarang nyamuk, lalat, dan hama lainnya yang mengancam kesehatan.",
  },
  {
    icon: Wind,
    title: "Kesehatan Terganggu",
    description:
      "Udara kotor akibat debu, jamur, dan bakteri memicu alergi, asma, serta gangguan pernapasan lainnya. Lingkungan bersih adalah investasi utama untuk kesehatan.",
  },
  {
    icon: Clock,
    title: "Waktu Terbatas",
    description:
      "Kesibukan bekerja dan urusan sehari-hari membuat Anda tidak sempat membersihkan rumah secara menyeluruh. Biarkan tim profesional kami yang mengurus kebersihan Anda.",
  },
  {
    icon: Bug,
    title: "Hama & Serangga",
    description:
      "Kecoa, semut, tikus, dan serangga lain mudah datang jika lingkungan kotor. FastCleaning membantu menjaga kebersihan agar hama tidak betah tinggal.",
  },
  {
    icon: Sparkles,
    title: "Kesan Profesional Hilang",
    description:
      "Kantor atau tempat usaha yang kotor menurunkan kredibilitas di mata klien dan mitra bisnis. Kesan pertama yang bersih dan rapi sangat penting untuk bisnis Anda.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="masalah" className="bg-gray-50 dark:bg-gray-900/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Masalah yang Sering Terjadi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Apakah Anda mengalami salah satu dari masalah ini? FastCleaning hadir
            sebagai solusi kebersihan profesional untuk Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/30 transition-all hover:shadow-lg dark:border dark:border-gray-700"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-colors group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;