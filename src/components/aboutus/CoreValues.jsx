import React from "react";
const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "Fostering a culture of transparency and ethical practices",
    },
    {
      title: "Innovation",
      description: "Pioneering tech solutions that redefine possibilities",
    },
    {
      title: "Dedication",
      description: "Empowering success through consistent excellence",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#172b48]
        px-6
        py-16
        sm:px-8
        sm:py-20
        md:px-12
        md:py-24
        lg:px-16
        lg:py-28
        xl:px-20
      "
    >
      {/* Background gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(105deg,#193b58_0%,#192a49_45%,#263d58_100%)]
        "
      />

      {/* Left glow */}
      <div
        className="
          absolute
          -bottom-32
          -left-20
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
          right-[-100px]
          top-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-slate-300/10
          blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">

        {/* Heading */}
        <h2
          className="
            text-center
            text-[42px]
            font-light
            leading-tight
            tracking-[-1px]
            text-white

            sm:text-[48px]

            md:text-[54px]

            lg:text-[58px]

            xl:text-[60px]
          "
        >
          Core Values
        </h2>

        {/* Values */}
        <div
          className="
            mt-16
            grid
            grid-cols-1

            sm:mt-20

            md:mt-24

            lg:grid-cols-3
          "
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                px-0
                py-8

                sm:px-8

                md:px-10
                md:py-10

                lg:px-10
                lg:py-0

                ${
                  index !== 0
                    ? "lg:border-l lg:border-white/40"
                    : ""
                }
              `}
            >
              <h3
                className="
                  text-[34px]
                  font-light
                  leading-tight
                  text-[#f4bd8d]

                  sm:text-[36px]

                  md:text-[38px]

                  lg:text-[40px]
                "
              >
                {value.title}
              </h3>

              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-[19px]
                  font-light
                  leading-[1.2]
                  text-white

                  sm:text-[20px]

                  md:text-[21px]

                  lg:text-[22px]
                "
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;