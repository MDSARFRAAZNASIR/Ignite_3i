import React from "react";

const CultureOfInclusivity = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#1d3653]
        px-5
        py-16
        text-white

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-12
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,#1d3b5c_0%,#18294a_48%,#40515b_100%)]
        "
      />

      {/* Blue glow */}
      <div
        className="
          absolute
          -left-40
          top-[-200px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-600/10
          blur-[120px]
        "
      />

      {/* Right gray glow */}
      <div
        className="
          absolute
          -right-40
          bottom-[-200px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-slate-300/10
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
          grid
          w-full
          max-w-[1800px]
          grid-cols-1
          items-center
          gap-12

          md:gap-16

          lg:grid-cols-2
          lg:gap-16

          xl:gap-24
        "
      >
        {/* ==================================================
            LEFT - IMAGE
        ================================================== */}

        <div
          className="
            flex
            w-full
            items-center
            justify-center

            lg:justify-start
          "
        >
          <div
            className="
              w-full
              max-w-[700px]

              lg:max-w-[720px]
            "
          >
            {/* 
              Replace this image path with your actual
              inclusivity illustration.
            */}
            <img
              src="/images/inclusivity.png"
              alt="Culture of inclusivity"
              className="
                mx-auto
                h-auto
                w-full
                object-contain

                lg:mx-0
              "
            />
          </div>
        </div>

        {/* ==================================================
            RIGHT - CONTENT
        ================================================== */}

        <div
          className="
            w-full
            max-w-[850px]
          "
        >
          {/* Heading */}
          <h2
            className="
              text-[42px]
              font-light
              leading-[1.15]
              tracking-[-1.5px]
              text-white

              sm:text-[48px]

              md:text-[54px]

              lg:text-[58px]

              xl:text-[64px]
            "
          >
            A Culture of Inclusivity
          </h2>

          {/* First paragraph */}
          <p
            className="
              mt-10
              text-[19px]
              font-light
              leading-[1.5]
              text-white

              sm:text-[21px]

              md:text-[23px]

              lg:text-[24px]

              xl:text-[25px]
            "
          >
            Gender-diverse companies statistically produce better results; not
            only in terms of financial performance but value creation. One of
            the most important lessons we have learned is that recruiting,
            retaining and developing a diverse and inclusive workforce should
            be a priority from day one. We also know that it’s an on-going
            process and that there is much more still to do.
          </p>

          {/* Second paragraph */}
          <p
            className="
              mt-8
              text-[19px]
              font-light
              leading-[1.5]
              text-white

              sm:text-[21px]

              md:text-[23px]

              lg:text-[24px]

              xl:text-[25px]
            "
          >
            Inclusion is woven into our organizational fabric. We strive to
            create a welcoming atmosphere where everyone feels respected,
            valued, and empowered to bring their authentic selves to work. Our
            inclusive culture promotes open dialogue, collaboration, and mutual
            respect among all team members.
          </p>
        </div>
      </div>
   
    </section>
  );
};

export default CultureOfInclusivity;