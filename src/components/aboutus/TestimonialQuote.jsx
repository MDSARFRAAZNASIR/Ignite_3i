import React from "react";

const TestimonialQuote = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[520px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#101329]
        px-5
        py-20
        text-white

        sm:min-h-[560px]
        sm:px-8
        sm:py-24

        md:min-h-[600px]
        md:px-10
        md:py-28

        lg:min-h-[620px]
        lg:px-12
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(120deg,#11142b_0%,#101329_50%,#11152d_100%)]
        "
      />

      {/* Subtle glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-900/5
          blur-[100px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1750px]
          flex-col
          items-center
          text-center
        "
      >
        {/* Quote mark */}
        <div
          className="
            select-none
            font-serif
            text-[100px]
            font-bold
            leading-[0.6]
            tracking-[-12px]
            text-[#ffc39f]

            sm:text-[115px]

            md:text-[130px]

            lg:text-[145px]
          "
        >
          “
        </div>

        {/* Quote */}
        <blockquote
          className="
            mt-12
            max-w-[1650px]
            text-[34px]
            font-light
            leading-[1.18]
            tracking-[-1.5px]
            text-[#ffc09e]

            sm:mt-14
            sm:text-[40px]

            md:mt-16
            md:text-[47px]
            md:leading-[1.15]

            lg:mt-16
            lg:text-[53px]

            xl:text-[56px]
          "
        >
          Hiring diverse talent isn’t enough — it’s the workplace experience
          that shapes whether people remain and thrive
        </blockquote>

        {/* Attribution */}
        <p
          className="
            mt-12
            text-[20px]
            font-light
            leading-none
            text-white

            sm:mt-14
            sm:text-[22px]

            md:mt-16
            md:text-[25px]

            lg:mt-16
            lg:text-[27px]
          "
        >
          – McKinsey
        </p>
      </div>
    </section>
  );
};

export default TestimonialQuote;