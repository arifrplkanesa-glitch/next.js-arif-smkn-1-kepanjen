
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
  "Bermain game",
  "Mengedit foto/video",
  "Futsal",
  "Mendengarkan musik",
];

const rencana = [
  "Menuntaskan Kelas Industri UBIG",
  "Menuntaskan pendidikan SMK",
  "Melanjutkan kuliah ",
  "Magang/bekerja di perusahaan teknologi",
  "Menjadi Software Engineer",
  "Bekerja di perusahaan MICROSOFT",
  "menjadi kakak kakak IT green flag"
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.00",
    kegiatan: "Membaca ulang modul",
  },
  {
    hari: "Minggu",
    waktu: "10.00 - 15.00",
    kegiatan: "Mengerjakan tugas praktik",
  },
  {
    hari: "Minggu",
    waktu: "18.30 - 21.00",
    kegiatan: "Merekam video dan menulis laporan",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <Hero
        nama="Arif Dwi Putranda"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG"
      />

      <Kartu judul="Tentang Saya">
        <p className="leading-7 text-gray-600">
          Saya senang belajar melalui hal-hal yang saya sukai,
          mulai dari teknologi hingga dunia kreatif. Bagi saya,
          setiap proyek adalah kesempatan untuk mencoba,
          berkembang, dan menciptakan sesuatu yang baru.
        </p>
      </Kartu>

      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ol className="list-decimal space-y-1 pl-5 text-gray-600">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>

        <Kartu judul="Cita-cita">
          <ol className="list-decimal space-y-1 pl-5 text-gray-600">
            {rencana.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Keahlian">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </Kartu>

      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-left">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-4">Hari</th>
                <th className="px-4 py-4">Waktu</th>
                <th className="px-4 py-4">Kegiatan</th>
              </tr>
            </thead>

            <tbody>
              {jadwal.map((item) => (
                <tr
                  key={`${item.hari}-${item.waktu}`}
                  className="border-b border-gray-100 even:bg-gray-50"
                >
                  <td className="px-4 py-4">{item.hari}</td>
                  <td className="px-4 py-4">{item.waktu}</td>
                  <td className="px-4 py-4">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>

      <footer className="py-4 text-center text-sm text-gray-500">
        © 2026 Arif Dwi Putranda
      </footer>
    </main>
  );
}
