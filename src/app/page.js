import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard"

const skills = [
  { nama: "HTML", level: "Menengah"},
  { nama: "CSS", level: "Menengah"},
  { nama: "Git dan GitHub", level: "Dasar"},
  { nama: "Desain poster canva", level: "Mahir"},
  { nama: "JavaScript", level: "Dasar"},
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5x1 px-4 py-10">
      <Hero 
       nama="Arif Dwi Putranda"
       tagline="Siswa kelas X SMK, calon Junior
       Web Developer di Kelas industri UBIG" />

      <section>
        <h2 className="mb-4 text-2x1 font-bold text-utama"></h2>
        <div className="grid gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama}
          level={skill.level} />
        ))}
        </div>
      </section>
    </main>
  );
}