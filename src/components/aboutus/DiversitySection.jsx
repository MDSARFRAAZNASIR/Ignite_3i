import React from "react";

const DiversitySection = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[620px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#111927]
        px-5
        py-16
        text-white

        sm:min-h-[650px]
        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:min-h-[680px]
        lg:px-12
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Base background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,#121a27_0%,#182234_45%,#1d293d_100%)]
        "
      />

      {/* Large geometric shape - left */}
      <div
        className="
          absolute
          -left-[15%]
          -top-[20%]
          h-[850px]
          w-[520px]
          rotate-[-25deg]
          bg-[#1d2a3e]/50
        "
      />

      {/* Large geometric shape - center */}
      <div
        className="
          absolute
          left-[30%]
          -top-[25%]
          h-[900px]
          w-[420px]
          rotate-[-8deg]
          bg-[#25334a]/50
        "
      />

      {/* Large geometric shape - right */}
      <div
        className="
          absolute
          right-[-8%]
          -top-[20%]
          h-[900px]
          w-[470px]
          rotate-[20deg]
          bg-[#253247]/60
        "
      />

      {/* Dark center overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(10,17,29,0.2)_70%)]
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
          text-center
        "
      >
        {/* Top statement */}
        <p
          className="
            mx-auto
            max-w-[1700px]
            text-[20px]
            font-light
            leading-[1.35]
            tracking-[-0.5px]
            text-[#ffb494]

            sm:text-[25px]

            md:text-[30px]

            lg:text-[32px]

            xl:text-[34px]
          "
        >
          Diversity today goes beyond race and gender, which is why at Netpace
          we continually strive to create a thriving diverse and all-inclusive
          environment.
        </p>

        {/* Main heading */}
        <h2
          className="
            mt-12
            text-[40px]
            font-light
            leading-[1.2]
            tracking-[-1.5px]
            text-white

            sm:mt-14
            sm:text-[47px]

            md:mt-16
            md:text-[54px]

            lg:mt-16
            lg:text-[58px]

            xl:text-[60px]
          "
        >
          Embracing Diversity Is Our Key Strength
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-12
            max-w-[1700px]
            text-[18px]
            font-light
            leading-[1.2]
            tracking-[-0.3px]
            text-white

            sm:mt-12
            sm:text-[18px]

            md:mt-12
            md:text-[20px]

            lg:text-[18px]

            xl:text-[22px]
          "
        >
          We recognize that diversity is not only our strength but also our
          competitive advantage. We prioritize cultivating a workforce rich in
          various perspectives, ethnicities, cultures, and experiences. By
          embracing diversity, We foster an environment where differing
          viewpoints contribute to our collective success.
        </p>
      </div>
    </section>
  );
};

export default DiversitySection;