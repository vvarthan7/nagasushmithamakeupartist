import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mt-16 min-[1200px]:mt-0">
        <h1 className="text-5xl md:text-6xl min-[1200px]:text-8xl font-bold font-sackers text-center text-white drop-shadow-lg flex flex-col min-[1200px]:block gap-2">
          <span className="text-black">NAGA</span>
          <span className="text-pink-400 min-[1200px]:ml-6">SUSHMITHA</span>
        </h1>
        <h4 className="text-xl md:text-2xl min-[1200px]:text-4xl font-bold font-sackers text-center text-black drop-shadow-lg pt-4 min-[1200px]:pt-8">
          Bridal Makeup Artist
        </h4>
      </div>

      <Image
        src="/images/banner.webp"
        alt="Background Image"
        fill
        className="-z-10 object-cover object-top min-[1200px]:object-center opacity-80"
        priority
      />
    </div>
  );
};

export default Banner;
