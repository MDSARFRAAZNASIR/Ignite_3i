import React from "react";
import map from "../images/map.jpg";

const AboutIgn = () => {
  const stats = [
    {
      number: "20",
      label: (
        <>
          Years of continual
          <br />
          excellence
        </>
      ),
    },
    {
      number: "100",
      label: (
        <>
          Active Clients across
          <br />
          the globe
        </>
      ),
    },
    {
      number: "5",
      label: (
        <>
          Countries with our
          <br />
          presence and clientele
        </>
      ),
    },
    {
      number: "30",
      label: <>Industries we serve</>,
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#103f52]
        px-6
        py-10

        sm:px-8
        sm:py-14

        md:px-12
        md:py-16

        lg:px-16
        lg:py-20

        xl:px-20
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(120deg,#123d50_0%,#12394e_45%,#0d3b4b_100%)]
        "
      />

      {/* Map */}
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="absolute
          right-[-5%]
          top-0
          h-[600px]
          w-[65%]
          bg-contain
          bg-right-top
          bg-no-repeat
          opacity-30

          md:h-[650px]
          md:w-[62%]
          md:opacity-35

          lg:h-[720px]
          lg:w-[60%]
          lg:opacity-40"
      ></div>

      {/* Dark overlay over map */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,#123d50_5%,rgba(18,61,80,0.85)_35%,rgba(18,61,80,0.15)_75%,rgba(18,61,80,0.2))]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1800px]
        "
      >
        {/* =========================
            ABOUT US CONTENT
        ========================== */}

        <div
          className="
            max-w-[850px]
            pt-0

            md:pt-2

            lg:pt-0
          "
        >
          {/* Small heading */}
          <h4
            className="
              text-[26px]
              font-medium
              leading-tight
              text-white

              sm:text-[28px]

              md:text-[30px]

              lg:text-[31px]
            "
          >
            ABOUT US
          </h4>

          {/* Main heading */}
          <h1
            className="
              mt-8
              max-w-[850px]
              text-[40px]
              font-light
              leading-[1.15]
              tracking-[-1.5px]
              text-white

              sm:text-[44px]

              md:text-[45px]

              lg:text-[50px]

              xl:text-[51px]
            "
          >
            Advocating talent, diversity
            <br className="hidden sm:block" /> and inclusivity
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[800px]
              text-[18px]
              font-light
              leading-[1.4]
              text-white

              sm:text-[19px]

              md:text-[20px]

              lg:text-[21px]
            "
          >
            As a top-tier and trusted provider of workforce solutions globally
            and in the United States; we help equip our partners with a swift,
            scalable resource acquisition strategy that helps them build the
            team of their dreams.
          </p>
        </div>

        {/* =========================
            STATISTICS
        ========================== */}

        <div
          className="
            mt-16
            border
            border-white/40
            bg-[#082f43]/45
            backdrop-blur-[2px]

            sm:mt-20

            md:mt-24

            lg:mt-28
          "
        >
          <div
            className="
              grid
              grid-cols-1

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.number}
                className={`
                  flex
                  min-h-[190px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-10
                  text-center

                  sm:min-h-[210px]

                  lg:min-h-[225px]
                  lg:py-8

                  ${
                    index !== 0
                      ? "border-t border-white/40 sm:border-l sm:border-t-0 lg:border-t-0"
                      : ""
                  }

                  ${index === 2 ? "lg:border-l" : ""}
                `}
              >
                {/* Number */}
                <div
                  className="
                    text-[52px]
                    font-normal
                    leading-none
                    text-white

                    sm:text-[56px]

                    md:text-[60px]

                    lg:text-[62px]
                  "
                >
                  {stat.number}
                  <span className="text-[#ff3038]">+</span>
                </div>

                {/* Label */}
                <div
                  className="
                    mt-8
                    text-[18px]
                    font-normal
                    leading-[1.45]
                    text-white

                    sm:text-[19px]

                    md:text-[20px]

                    lg:text-[21px]
                  "
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIgn;
