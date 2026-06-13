import Image from "next/image";

const About = () => {
  return (
    <section className="container items-center justify-around py-10">
      <h2 className="text-6xl font-bold font-sackers text-center mb-16 text-black drop-shadow-lg">
        About Me<span className="text-green-500">.</span>
      </h2>
      <div className="flex items-start justify-around gap-10">
        <div className="basis-1/2 leading-8">
          <p>
            From a humble beginning in 2014, Sushmitha has grown to be a
            professional makeup artist who has always believed in the magic of
            brushes. She says,{" "}
            <span className="font-bold">
              “Everyone has their own spark and glam. Makeup is a magic potion
              that enhances the glam while keeping your natural charm intact.”
            </span>{" "}
            <p className="mt-4">
              After a lot of brainstorming, with her family support and love,
              she chose to get trained under one of the bollywood makeup
              artists, Gouri Kapoor. From there on, she was unstoppable and
              continued to make her brush game strong with experts all around
              the world. Based in Bangalore, she has a team who has been
              servicing thousands of clients every year from around the globe.
            </p>
            <p className="mt-4">
              Attention to detail, distinctive creativity, experience in the
              industry and the knowledge and passion for Beauty and Cosmetics,
              whether it be your Wedding, Photo shoot, Formal or next Special
              Occasion, Sushmitha will enhance and draw out the best version of
              your natural complexion and features!
            </p>
            <p className="mt-4">
              It takes a professional-eye to truly provide the look you've
              envisioned. That's why she spends a lot of time with her clients
              to understand their ideas and feel. After all, the art of shaping
              stunning and exquisite look for someone doesn't happen in a jiff.
            </p>
          </p>
        </div>
        <div
          className="flex-shrink-0"
          style={{
            width: "460px",
            height: "550px",
            clipPath:
              "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/nagasushmitha.webp"
            alt="nagasushmitha"
            width={460}
            height={460}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
