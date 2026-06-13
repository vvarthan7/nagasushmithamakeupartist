import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold font-sackers text-center text-white drop-shadow-lg">
          <span className="text-black">NAGA</span>
          <span className="text-pink-400">SUSHMITHA</span>
        </h1>
        <h4 className="text-4xl font-bold font-sackers text-center text-black drop-shadow-lg pt-8">
          Bridal Makeup Artist
        </h4>
      </div>

      <Image
        src="/images/banner.webp"
        alt="Background Image"
        fill
        className="-z-10 object-cover opacity-80"
        priority
      />
    </div>
  );
};

export default Banner;
