import Image from "next/image";

export default function Hero({ nama, tagline}) {
  return (
    <section className="flex flex-col items-center gap-6 text-center
    md:flex-row md:text-left">
          <Image
            src="/profil.jpeg"
            alt={ 'Foto Profil $ {nama}' }
            width={183}
            height={305}
            loading="eager"
            className="rounded-full border-4 border-aksen"
            />
            <div>
              <h1 className="text-3x1 font-bold text-utama
              md:text-5x1-">Halo, saya {nama}!</h1>
              <p className="mt-3 text-lg text-gray-700">{tagline}</p>
            </div>
          </section>
  );
}