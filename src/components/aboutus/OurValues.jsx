import React from "react";
import {
  HandHeart,
  Handshake,
  Shapes,
} from "lucide-react";

const values = [
  {
    icon: HandHeart,
    title: (
      <>
        Unity with
        <br />
        Empathy
      </>
    ),
  },
  {
    icon: Handshake,
    title: (
      <>
        Action with
        <br />
        Accountability
      </>
    ),
  },
  {
    icon: Shapes,
    title: (
      <>
        Creativity with
        <br />
        Purpose
      </>
    ),
  },
];

const OurValues = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#24445c]
        px-5
        py-16
        text-white

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-12
        lg:py-10
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,#204b63_0%,#172d4c_45%,#466067_100%)]
        "
      />

      {/* Left glow */}
      <div
        className="
          absolute
          -left-40
          top-[-200px]
          h-[600px]
          w-[650px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      {/* Right glow */}
      <div
        className="
          absolute
          -right-40
          bottom-[-200px]
          h-[600px]
          w-[650px]
          rounded-full
          bg-slate-300/10
          blur-[120px]
        "
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-1/2
          top-[35%]
          h-[400px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1800px]
        "
      >
        {/* Heading */}
        <h2
          className="
            text-center
            text-[25px]
            font-sans
            leading-[1.05]
            tracking-[-1.5px]
            text-white

            sm:text-[45px]

            md:text-[52px]

            lg:text-[45px]

            xl:text-[58px]
          "
        >
          Our Values are the Ideas We Live by
        </h2>

        {/* ==================================================
            CARDS
        ================================================== */}

        <div
          className="
            mx-auto
            mt-16
            grid
            w-full
            grid-cols-1
            gap-7

            sm:mt-20
            sm:gap-8

            md:grid-cols-2

            lg:mt-24
            lg:grid-cols-3
            lg:gap-7

            xl:gap-8
          "
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title.props.children.join("")}
                className="
                  relative
                  flex
                  min-h-[300px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  px-8
                  py-12
                  text-center

                  sm:min-h-[320px]

                  md:min-h-[340px]

                  lg:min-h-[348px]
                  lg:px-10

                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* Card background */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[linear-gradient(135deg,rgba(66,119,137,0.72),rgba(30,60,82,0.72))]
                  "
                />

                {/* Card glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-[-100px]
                    h-[300px]
                    w-[350px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-300/10
                    blur-[80px]
                  "
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-[95px]
                      w-[95px]
                      items-center
                      justify-center

                      sm:h-[105px]
                      sm:w-[105px]
                    "
                  >
                    <Icon
                      className="
                        h-[75px]
                        w-[75px]
                        text-white

                        sm:h-[82px]
                        sm:w-[82px]
                      "
                      strokeWidth={1.15}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-8
                      text-[18px]
                      font-light
                      leading-tight
                      text-[#ffb394]

                      sm:text-[25px]

                      md:text-[25px]


                      xl:text-[30px]
                    "
                  >
                    {value.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;