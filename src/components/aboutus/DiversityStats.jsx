import React from "react";
import {
  TrendingUp,
  BarChart3,
  UsersRound,
  Wallet,
  Banknote,
} from "lucide-react";

const stats = [
  {
    type: "small",
    color: "teal",
    content: (
      <>
        <p className="max-w-[250px] text-[15px] leading-[1.25] text-white/80 sm:text-[17px]">
          companies that have more
          <br />
          diverse management
          <br />
          teams have
        </p>

        <div className="mt-6 flex items-end justify-between gap-5">
          <div>
            <span className="text-[48px] font-light leading-none text-[#ff6b27] sm:text-[54px]">
              19%
            </span>

            <p className="mt-2 text-[20px] font-medium text-white sm:text-[23px]">
              higher revenue
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <TrendingUp
              className="h-12 w-12 text-cyan-400"
              strokeWidth={1.5}
            />

            <BarChart3
              className="h-12 w-12 text-lime-400"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </>
    ),
  },

  {
    type: "small",
    color: "brown",
    content: (
      <>
        <p className="max-w-[230px] text-[15px] leading-[1.3] text-white/80 sm:text-[17px]">
          Diverse pool of employees
          <br />
          plays a vital role for
        </p>

        <div className="mt-7 flex items-start gap-3">
          <span className="text-[50px] font-light leading-none text-lime-400 sm:text-[55px]">
            67%
          </span>

          <span className="pt-1 text-[19px] leading-[1.15] text-sky-400 sm:text-[22px]">
            of job
            <br />
            applicants
          </span>
        </div>

        <p className="mt-5 text-[16px] leading-[1.3] text-white/80 sm:text-[18px]">
          while evaluating
          <br />
          employment offers.
        </p>
      </>
    ),
  },

  {
    type: "small",
    color: "teal",
    content: (
      <>
        <p className="max-w-[250px] text-[15px] leading-[1.25] text-white/80 sm:text-[17px]">
          companies with 2-D
          <br />
          diversity are expected to
          <br />
          report that the firm's market
          <br />
          share grew by
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <span className="text-[48px] font-light leading-none text-lime-400 sm:text-[55px]">
              45%
            </span>

            <p className="mt-3 text-[16px] text-[#ff6b27] sm:text-[18px]">
              over the previous year.
            </p>
          </div>

          <UsersRound
            className="h-16 w-16 text-lime-400"
            strokeWidth={1.2}
          />
        </div>
      </>
    ),
  },

  {
    type: "large",
    color: "brown",
    content: (
      <>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="max-w-[470px] text-[15px] leading-[1.3] text-white/80 sm:text-[17px]">
              companies in the top quartile for racial
              <br className="hidden sm:block" />
              and ethnic diversity are
            </p>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-[48px] font-light leading-none text-lime-400 sm:text-[55px]">
                35%
              </span>

              <span className="text-[21px] leading-none text-lime-400 sm:text-[25px]">
                more likely
              </span>
            </div>

            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.3] text-cyan-400 sm:text-[17px]">
              to have financial returns that are above the national
              <br className="hidden sm:block" />
              medians for their industry.
            </p>
          </div>

          <UsersRound
            className="
              h-20
              w-20
              shrink-0
              text-cyan-400
              sm:h-24
              sm:w-24
            "
            strokeWidth={1.2}
          />
        </div>
      </>
    ),
  },

  {
    type: "large",
    color: "teal",
    content: (
      <>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="max-w-[450px] text-[15px] leading-[1.3] text-white/80 sm:text-[17px]">
              over a three-year period
              <br />
              the cash-flow is
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <span className="text-[48px] font-light leading-none text-[#ff6b27] sm:text-[55px]">
                2.3x
              </span>

              <span className="text-[21px] leading-[1.1] text-cyan-400 sm:text-[25px]">
                higher per
                <br />
                employee
              </span>
            </div>

            <p className="mt-5 text-[15px] text-white/80 sm:text-[17px]">
              for inclusive and managed companies.
            </p>
          </div>

          <div className="flex gap-4">
            <BarChart3
              className="
                h-20
                w-20
                text-cyan-400
                sm:h-24
                sm:w-24
              "
              strokeWidth={1.2}
            />

            <div className="flex flex-col gap-3">
              <Wallet
                className="h-10 w-10 text-lime-400"
                strokeWidth={1.4}
              />

              <Banknote
                className="h-10 w-10 text-[#ff6b27]"
                strokeWidth={1.4}
              />
            </div>
          </div>
        </div>
      </>
    ),
  },
];

const DiversityStats = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0c0f20]
        px-5
        pb-16
        pt-12
        text-white

        sm:px-8
        sm:pb-20
        sm:pt-14

        md:px-10
        md:pb-24
        md:pt-16

        lg:px-12
        lg:pb-24
        lg:pt-12
      "
    >
      {/* =====================================================
          SKYLINE BACKGROUND
      ====================================================== */}

      <div className="absolute inset-x-0 top-0 h-[185px] overflow-hidden">
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[155px]
            bg-[#11142a]
          "
        />

        {/* Buildings */}
        <div className="absolute bottom-0 left-[4%] h-[120px] w-[28px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[7%] h-[155px] w-[42px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[12%] h-[105px] w-[28px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[16%] h-[130px] w-[45px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[22%] h-[90px] w-[35px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[26%] h-[145px] w-[30px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[31%] h-[110px] w-[60px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[38%] h-[145px] w-[38px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[43%] h-[100px] w-[52px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[50%] h-[150px] w-[34px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[55%] h-[115px] w-[60px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[63%] h-[150px] w-[42px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[69%] h-[105px] w-[50px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[76%] h-[145px] w-[38px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[82%] h-[115px] w-[65px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[90%] h-[150px] w-[38px] bg-[#080b19]" />
        <div className="absolute bottom-0 left-[96%] h-[125px] w-[45px] bg-[#080b19]" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1300px]
          pt-4
          text-center

          sm:pt-5
        "
      >
        <h2
          className="
            mx-auto
            max-w-[1100px]
            text-[29px]
            font-light
            leading-[1.2]
            text-[#ffb394]

            sm:text-[34px]

            md:text-[39px]

            lg:text-[40px]
          "
        >
          We champion a culture that values and celebrates the uniqueness
          <br className="hidden md:block" />
          of every individual
        </h2>

        <p
          className="
            mt-8
            text-[14px]
            font-light
            text-white

            sm:text-[16px]

            md:text-[17px]
          "
        >
          Embracing Collaboration and Grow, Excellence Through Collaboration,
          Driven by Purpose, Impacting Change
        </p>
      </div>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-20
          grid
          w-full
          max-w-[1090px]
          grid-cols-1
          gap-0

          sm:mt-24

          md:grid-cols-2

          lg:grid-cols-6
        "
      >
        {stats.map((stat, index) => {
          const isLarge = stat.type === "large";

          return (
            <article
              key={index}
              className={`
                relative
                overflow-hidden
                px-10
                py-8
                transition-transform
                duration-300
                hover:-translate-y-1

                ${
                  isLarge
                    ? "min-h-[245px] lg:col-span-3"
                    : "min-h-[275px] lg:col-span-2"
                }

                ${
                  stat.color === "teal"
                    ? "bg-[linear-gradient(135deg,#315f65_0%,#172331_100%)]"
                    : "bg-[linear-gradient(135deg,#55483f_0%,#17151e_100%)]"
                }
              `}
            >
              {stat.content}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default DiversityStats;