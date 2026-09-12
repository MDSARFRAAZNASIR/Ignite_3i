import React from "react";

const Ignite3iVision = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#123f50]
        px-5
        py-16
        text-white

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-14
        lg:py-24

        xl:px-20
        xl:py-28
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(105deg,#123b50_0%,#172d48_38%,#164a56_72%,#173b4b_100%)]
        "
      />

      {/* Left glow */}
      <div
        className="
          absolute
          left-[-200px]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-900/20
          blur-[120px]
        "
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-[45%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Right glow */}
      <div
        className="
          absolute
          right-[-200px]
          bottom-[-200px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-slate-300/10
          blur-[120px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1800px]
          grid-cols-1
          gap-12

          md:gap-16

          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20

          xl:grid-cols-[0.75fr_1.25fr]
          xl:gap-24
        "
      >
        {/* ==================================================
            LEFT - HEADING
        ================================================== */}

        <div className="flex items-start">
          <h2
            className="
              max-w-[650px]
              text-[20px]
              font-light
              leading-[1.08]
              tracking-[-1.8px]
              text-white

              sm:text-[40px]

              md:text-[37px]

              lg:text-[px29]

              xl:text-[40px]
            "
          >
            Ignite<span className="text-red-500">3i</span>’s Vision
            for a Diverse and
            Inclusive Future
          </h2>
        </div>

        {/* ==================================================
            RIGHT - CONTENT
        ================================================== */}

        <div
          className="
            max-w-[1000px]
          "
        >
          {/* First paragraph */}
          <p
            className="
              text-[18px]
              font-light
              leading-[1.2]
              text-white

              sm:text-[18px]

              md:text-[20px]

              lg:text-[21px]

              xl:text-[22px]
            "
          >
            The Netpace commitment for diversity and inclusion extends beyond
            the workplace. We envision making a positive impact on the
            communities we serve by actively engaging in initiatives that
            promote equality, support underrepresented groups, and contribute
            to a more inclusive society.
          </p>

          {/* Second paragraph */}
          <p
            className="
              mt-8
              text-[18px]
              font-light
              leading-[1.2]
              text-white

              sm:text-[18px]

              md:text-[19px]

              lg:text-[20px]

              xl:text-[21px]
            "
          >
            At Netpace, diversity and inclusion are the cornerstones of our
            success. We are dedicated to cultivating an inclusive environment
            where every individual can flourish, innovate, and reach their full
            potential. Be part of our journey as we champion diversity and
            inclusion, making a meaningful difference in the workplace and
            beyond
          </p>

          {/* Button */}
          <div className="mt-12 sm:mt-14 md:mt-16">
            <button
              type="button"
              className="
                min-w-[280px]
                border
                border-white
                px-8
                py-4

                text-[18px]
                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-white
                hover:text-[#123b50]

                sm:min-w-[320px]
                sm:text-[20px]

                md:min-w-[320px]
                md:py-5
              "
            >
              Careers at Ignite<span className="text-red-500">3i</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ignite3iVision;