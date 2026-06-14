const Services = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h3 className="text-4xl min-[1200px]:text-6xl font-bold font-sackers text-center mb-10 min-[1200px]:mb-16 text-black drop-shadow-lg">
        Services
      </h3>
      <div className="flex justify-center gap-10 px-4">
        <div className="w-full max-w-[375px]">
          <h4 className="font-semibold text-2xl text-center mb-5">
            Bridal Makeup
          </h4>
          <p className="leading-8">
            If you can&apos;t come to the studio on your wedding day, let me be
            there at the venue & make your day hassle-free, covering all types
            of wedding looks from pre-wedding to all looks from morning to
            evening in the engagement & the wedding. The bride will be pampered,
            relaxed & ready for the big day from tip to toe.
          </p>
        </div>
        <div className="w-full max-w-[375px]">
          <h4 className="font-semibold text-2xl text-center mb-5">Fashion</h4>
          <p className="leading-8">
            Makeup for fashion is usually set to on-trends, concepts, creative
            shoot, fashion shows, modelling, portfolio shoots, prom, etc. Come
            sit with me and have a cup of coffee, My team and I will plan it out
            for you as long as you promise not to mess with your mascara
          </p>
        </div>
        <div className="w-full max-w-[375px]">
          <h4 className="font-semibold text-2xl text-center mb-5">Party</h4>
          <p className="leading-8">
            It&apos;s a glam world and you have level up to look glam everytime
            for Socialite parties, charity events, private events, award
            ceremonies or your birthday party, I will make you blush, glossy and
            polish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
