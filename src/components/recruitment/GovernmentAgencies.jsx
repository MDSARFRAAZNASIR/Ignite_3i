import React from "react";
import { Building2, Lightbulb , UserRound,  Crosshair,
  Globe2,} from "lucide-react";
import JobMarquee from "./JobMarquee";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";


export const GovernmentAgencies = () => {
  const features = [
    {
      icon: Building2,
      title: "Specialized Federal Government Focus",
      description:
        "We serve federal government contracting agencies, including prime and subcontractors.",
    },
    {
      icon: Lightbulb,
      title: "Proposal Support Services",
      description:
        "Offering candidate documentation, resumes, and LOIs for government proposal bidding.",
    },
     {
      icon: Building2,
      title: "Cleared Talent Recruitment",
      description:
        "Expertise in sourcing candidates with security clearances like Public Trust, Secret, Top Secret, TS/SCI, and Full Scope Polygraph roles.",
    },
    {
      icon: Lightbulb,
      title: "Extensive Expertise",
      description:
        "Supporting federal departments such as the DoD, DHS, DOJ, DOE, NSA, and VA with top-tier talent acquisition.",
    },
     {
      icon: Building2,
      title: "Streamlined Hiring Process",
      description:
        "Fast, accurate, and compliant hiring using advanced vetting systems.",
    },
   

  ];
  const featurespartner = [
    {
      icon: Crosshair,
      title: "Diversity-Focused Hiring",
      description:
        "Building inclusive teams with diverse talent pools.",
    },
    {
      icon: Lightbulb,
      title: "Client-Centric Solutions",
      description:
        "Customizing recruitment strategies to align with your goals.",
    },
    {
      icon: UserRound,
      title: "Recruitment for High-Demand Roles",
      description:
        "From technology to engineering, our expertise spans a wide array of high-demand industries.",
    },
    {
      icon: Globe2,
      title: "Global Workforce Expertise",
      description:
        "Addressing workforce challenges across multiple regions.",
    },
  ];

    const cards = [
    {
      icon: Building2,
      title: "Industry Expertise Across the U.S.",
      description:
        "Serving IT, Financial Services, and other sectors with tailored recruitment solutions.",
      bg: "bg-gradient-to-br from-[#62564f] via-[#403b42] to-[#24263a]",
    },
    {
      icon: UserRound,
      title: "Data-Driven Recruitment",
      description:
        "Leveraging advanced analytics to identify and hire top-performing candidates.",
      bg: "bg-gradient-to-br from-[#397077] via-[#2c4e5c] to-[#202c43]",
    },
    {
      icon: Building2,
      title: "Flexible recruitment Models.",
      description:
        "From direct placements to contingent recruitment, we cater to unique business needs.",
      bg: "bg-gradient-to-br from-[#397077] via-[#2c4e5c] to-[#202c43]",

    },
    {
      icon: UserRound,
      title: "Accelerated Hiring",
      description:
        "Minimize time-to-fill with access to pre-screened, highly qualified professionals.",
      bg: "bg-gradient-to-br from-[#62564f] via-[#403b42] to-[#24263a]",

    },
  ];

   const industries = [
    "IT and Technology",
    "Construction & Engineering",
    "Finance and Banking",
    "Federal Government Contracting Agencies",
    "Business & Management Consulting",
    "Engineering and Manufacturing",
    "Marketing and Communications",
    "Healthcare and Life Sciences",
    "Energy and Environment",
  ];

  

  return (
    <>
      <section
        className="
        relative
        flex
        min-h-[620px]
        w-full
        items-center
        overflow-hidden
        bg-[#151f2e]
        text-white

        md:min-h-[600px]
        lg:min-h-[680px]
      "
      >
        {/* Background */}
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_25%_45%,rgba(31,47,68,0.45),transparent_45%),linear-gradient(120deg,#172131_0%,#111a27_55%,#182335_100%)]
        "
        />

        {/* Right decoration */}
        <div
          className="
          absolute
          -right-[170px]
          -top-[180px]
          z-[1]
          h-[1050px]
          w-[260px]
          rotate-[8deg]
          border-l
          border-l-[rgba(116,142,174,0.3)]
          opacity-50

          md:-right-[120px]
          md:opacity-70

          lg:-right-[90px]
          lg:opacity-100
        "
        >
          <div
            className="
            absolute
            -left-[80px]
            top-[120px]
            h-[750px]
            w-[180px]
            bg-gradient-to-r
            from-transparent
            via-[rgba(67,91,120,0.08)]
            to-transparent
            blur-[15px]
          "
          />
        </div>

        {/* Content */}
        <div
          className="
          relative
          z-[2]
          mx-auto
          w-full
          max-w-[1600px]
          px-5

          sm:px-8
          md:px-[7%]
          lg:px-[8.2%]
        "
        >
          {/* Label */}
          <p
            className="
            mb-7
            text-[18px]
            font-normal
            leading-tight
            tracking-[-0.5px]

            sm:text-[20px]
            md:mb-[35px]
            md:text-[25px]

            lg:mb-[45px]
            lg:text-[32px]
          "
          >
            Netpace Recruitment Services
          </p>

          {/* Heading */}
          <h1
            className="
            max-w-[1500px]
            text-[43px]
            font-light
            leading-[1.12]
            tracking-[-2px]

            sm:text-[50px]
            md:text-[clamp(52px,7vw,78px)]
            md:tracking-[-3px]

            lg:text-[clamp(60px,5.8vw,112px)]
            lg:leading-[1.15]
            lg:tracking-[-4px]
          "
          >
            Comprehensive Recruitment
            <br />
            And Direct Hiring Solutions
          </h1>

          {/* Subtitle */}
          <p
            className="
            mt-6
            max-w-[1400px]
            text-[21px]
            font-light
            leading-[1.35]
            tracking-[-0.5px]

            sm:text-[23px]
            md:mt-6
            md:text-[30px]

            lg:mt-[25px]
            lg:text-[clamp(25px,2vw,48px)]
            lg:leading-[1.3]
            lg:tracking-[-1px]
          "
          >
            for Federal Agencies and Commercial Industries in the U.S.
          </p>
        </div>
      </section>
      <section
        className="
        relative
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#172231]
        px-5
        py-20
        text-white

        sm:px-8
        sm:py-24

        md:px-12
        md:py-28

        lg:min-h-[700px]
        lg:px-16
        lg:py-32

        xl:px-20
      "
      >
        {/* Background */}
        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(135deg,#1c2938_0%,#29404d_35%,#25384e_65%,#182333_100%)]
        "
        />

        {/* Background glow - left */}
        <div
          className="
          absolute
          -left-40
          -top-20
          h-[500px]
          w-[650px]
          rotate-[25deg]
          bg-[rgba(76,125,132,0.18)]
          blur-[70px]
        "
        />

        {/* Background glow - right */}
        <div
          className="
          absolute
          -right-40
          top-0
          h-[700px]
          w-[500px]
          rotate-[15deg]
          bg-[rgba(73,103,142,0.20)]
          blur-[60px]
        "
        />

        {/* Abstract diagonal shape */}
        <div
          className="
          absolute
          right-[10%]
          top-[-120px]
          h-[900px]
          w-[110px]
          rotate-[8deg]
          border-l
          border-[rgba(150,180,200,0.12)]
          bg-[rgba(100,130,160,0.04)]
        "
        />

        {/* Another abstract shape */}
        <div
          className="
          absolute
          left-[20%]
          bottom-[-250px]
          h-[500px]
          w-[500px]
          rotate-[45deg]
          bg-[rgba(60,90,110,0.12)]
          blur-[10px]
        "
        />

        {/* Main content */}
        <div
          className="
          relative
          z-10
          mx-auto
          flex
          min-h-[540px]
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-center
          text-center
        "
        >
          {/* First paragraph */}
          <p
            className="
            max-w-[1250px]
            text-[22px]
            font-light
            leading-[1.5]
            tracking-[-0.5px]

            sm:text-[25px]
            md:text-[29px]
            lg:text-[36px]
            lg:leading-[1.5]
            xl:text-[38px]
          "
          >
            Ignite<span className="text-red-500">3i</span> offers direct hiring services to both federal government
            agencies and commercial businesses throughout the U.S.
          </p>

          {/* Orange paragraph */}
          <p
            className="
            mt-8
            max-w-[1250px]
            text-[23px]
            font-light
            leading-[1.4]
            tracking-[-0.5px]
            text-[#ffb494]

            sm:mt-9
            sm:text-[27px]

            md:mt-10
            md:text-[31px]

            lg:mt-11
            lg:text-[37px]
            lg:leading-[1.3]

            xl:text-[38px]
          "
          >
            Our consultants are experts in direct hire, executive search, and
            specialized recruitment services so that organizations can attain
            the best professionals.
          </p>

          {/* Bottom paragraph */}
          <p
            className="
            mt-9
            max-w-[1050px]
            text-[18px]
            font-light
            leading-[1.7]
            tracking-[-0.2px]

            sm:mt-10
            sm:text-[20px]

            md:text-[22px]
            md:leading-[1.65]

            lg:mt-11
            lg:text-[25px]
            lg:leading-[1.55]

            xl:text-[26px]
          "
          >
            With a demonstrated history of performance in regulated and
            high-demand sectors, we apply data-driven insights to source and
            attract top talent, enabling organizations to construct powerful,
            future-facing teams.
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#0d1a3d] px-5 py-16 text-white sm:px-8 md:px-12 lg:px-12 lg:py-20">
        {/* Background gradient */}
        <div
          className="
          absolute inset-0
          bg-[linear-gradient(105deg,#173d58_0%,#102642_35%,#0d1a3d_70%,#0c1838_100%)]
        "
        />

        {/* Background glow */}
        <div
          className="
          absolute
          -left-40
          top-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-[rgba(49,104,130,0.15)]
          blur-[100px]
        "
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1800px]">
          {/* Section title */}
          <p
            className="
            text-[24px]
            font-light
            leading-tight
            tracking-[-0.5px]
            text-[#ffb394]

            sm:text-[28px]
            md:text-[32px]
            lg:text-[36px]
          "
          >
            Why Choose Ignite<span className="text-red-500">3i</span> Recruitment Services?
          </p>

          {/* Main heading */}
          <h2
            className="
            mt-8
            max-w-[900px]
            text-[48px]
            font-light
            leading-[1.15]
            tracking-[-2px]
            text-white

            sm:text-[45px]
            md:text-[50px]

            lg:mt-10
            lg:text-[55px]
            xl:text-[56px]
          "
          >
            Tailored Recruitment
            <br />
            Expertise for Government
            <br />
            Agencies
          </h2>

          {/* Feature cards */}
          <div
            className="
            mt-12
            grid
            grid-cols-1
            gap-8
            px-12

            md:mt-16
            md:grid-cols-2
            md:gap-10

            lg:mt-12
            lg:gap-0
          "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`
                  min-h-[320px]
                  px-8
                  py-10

                  sm:px-10
                  sm:py-12

                  lg:min-h-[322px]
                  lg:px-[35px]
                  lg:py-[20px]
                  hover:bg-[#203b50]

                `}
                >
                  {/* Icon */}
                  <div className="mb-7">
                    <Icon size={50} strokeWidth={1.4} className="text-white" />
                  </div>

                  {/* Card title */}
                  <h3
                    className="
                    max-w-[650px]
                    text-[25px]
                    font-light
                    leading-[1.3]
                    tracking-[-0.5px]
                    text-[#ffae8d]

                    sm:text-[20px]
                    md:text-[20px]
                    lg:text-[21px]
                  "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                    mt-4
                    max-w-[700px]
                    text-[19px]
                    font-light
                    leading-[1.55]
                    text-white

                    sm:text-[20px]
                    lg:text-[20px]
                  "
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0c1230]
        px-5
        py-20
        text-white

        sm:px-8
        sm:py-24

        md:px-10
        md:py-28

        lg:px-8
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Base gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_15%,rgba(70,35,100,0.32),transparent_35%),linear-gradient(135deg,#10142e_0%,#0d1230_50%,#11172f_100%)]
        "
      />

      {/* Purple glow - top left */}
      <div
        className="
          absolute
          -left-40
          -top-40
          h-[550px]
          w-[700px]
          rotate-[20deg]
          bg-purple-900/20
          blur-[100px]
        "
      />

      {/* Purple glow - center */}
      <div
        className="
          absolute
          left-[30%]
          top-[5%]
          h-[350px]
          w-[500px]
          bg-fuchsia-900/10
          blur-[100px]
        "
      />

      {/* =====================================================
          ABSTRACT NETWORK LINES
      ====================================================== */}

      <div
        className="
          absolute
          left-[-5%]
          top-[18%]
          h-[2px]
          w-[55%]
          rotate-[-10deg]
          bg-gradient-to-r
          from-transparent
          via-purple-500/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-[8%]
          top-[43%]
          h-[2px]
          w-[48%]
          rotate-[12deg]
          bg-gradient-to-r
          from-transparent
          via-indigo-400/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          right-[-5%]
          top-[35%]
          h-[2px]
          w-[55%]
          rotate-[-8deg]
          bg-gradient-to-r
          from-transparent
          via-purple-400/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-[25%]
          top-[10%]
          h-[500px]
          w-[2px]
          rotate-[25deg]
          bg-gradient-to-b
          from-transparent
          via-purple-500/10
          to-transparent
        "
      />

      <div
        className="
          absolute
          right-[25%]
          top-[5%]
          h-[550px]
          w-[2px]
          rotate-[-20deg]
          bg-gradient-to-b
          from-transparent
          via-indigo-400/10
          to-transparent
        "
      />

      {/* Network dots */}
      <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-purple-400/30" />
      <div className="absolute left-[31%] top-[34%] h-2 w-2 rounded-full bg-purple-400/20" />
      <div className="absolute left-[52%] top-[27%] h-2 w-2 rounded-full bg-indigo-400/20" />
      <div className="absolute right-[20%] top-[22%] h-2 w-2 rounded-full bg-purple-400/20" />
      <div className="absolute right-[35%] top-[42%] h-2 w-2 rounded-full bg-indigo-400/20" />

      {/* =====================================================
          MAIN CONTENT
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
        <h1
          className="
            mx-auto
            max-w-[1150px]
            text-center
            text-[42px]
            font-light
            leading-[1.2]
            tracking-[-1.5px]

            sm:text-[50px]
            sm:tracking-[-2px]

            md:text-[60px]

            lg:text-[64px]

            xl:text-[68px]
          "
        >
          End-to-End Recruitment Solutions for
          <br className="hidden sm:block" />
          <span> Commercial Sectors</span>
        </h1>

        {/* =================================================
            CARDS
        ================================================== */}

        <div
          className="
            mx-auto
            mt-20
            grid
            w-full
            max-w-[1710px]
            grid-cols-1
            gap-6

            sm:mt-24
            sm:gap-7

            md:mt-28
            md:grid-cols-2

            lg:mt-32
            lg:gap-12
          "
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`
                  ${card.bg}

                  relative
                  flex
                  min-h-[300px]
                  flex-col
                  items-center
                  justify-center
                  px-7
                  py-12
                  text-center

                  sm:min-h-[380px]
                  sm:px-10

                  md:min-h-[380px]

                  lg:min-h-[380px]
                  lg:px-16

                  xl:min-h-[380px]

                  transition-transform
                  duration-300
                  hover:-translate-y-1
                `}
              >
                {/* Subtle card overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-white/[0.03]
                    to-transparent
                  "
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div
                    className="
                      mb-7
                      flex
                      h-[82px]
                      w-[82px]
                      items-center
                      justify-center

                      sm:mb-8
                      sm:h-[90px]
                      sm:w-[90px]
                    "
                  >
                    <Icon
                      className="h-[50px] w-[50px] text-white sm:h-[65px] sm:w-[65px]"
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      max-w-[800px]
                      text-[27px]
                      font-light
                      leading-[1.25]
                      tracking-[-0.7px]

                      sm:text-[31px]

                      md:text-[30px]

                      lg:text-[25px]

                      xl:text-[25px]
                    "
                  >
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      max-w-[760px]
                      text-[18px]
                      font-light
                      leading-[1.45]
                      text-white

                      sm:mt-6
                      sm:text-[20px]

                      md:text-[19px]

                      lg:text-[21px]

                      xl:text-[22px]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#07183d]
        px-6
        py-16
        text-white

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-10
        lg:py-8

        xl:px-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,#15516b_0%,#0c3155_28%,#081b42_60%,#071637_100%)]
        "
      />

      {/* Left blue glow */}
      <div
        className="
          absolute
          -left-40
          -top-40
          h-[650px]
          w-[750px]
          rounded-full
          bg-cyan-900/20
          blur-[110px]
        "
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-[30%]
          top-[35%]
          h-[400px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[100px]
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
        {/* Main heading */}
        <h2
          className="
            max-w-[900px]
            text-[44px]
            font-light
            leading-[1.25]
            tracking-[-1.5px]

            sm:text-[52px]
            sm:tracking-[-2px]

            md:text-[60px]

            lg:text-[62px]

            xl:text-[64px]
          "
        >
          What Makes Netpace the Ideal
          <br className="hidden sm:block" />
          Recruitment Partner?
        </h2>

        {/* =================================================
            FEATURES
        ================================================== */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-y-16
            gap-x-12

            sm:mt-24
            sm:gap-y-20

            md:grid-cols-2
            md:gap-x-16
            md:gap-y-24

            lg:mt-24
            lg:gap-x-24
            lg:gap-y-28

            xl:mt-28
            xl:gap-x-32
          "
        >
          {featurespartner.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="
                  flex
                  items-start
                  gap-7

                  sm:gap-8

                  md:gap-8

                  lg:gap-9
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    shrink-0
                    items-start
                    justify-center
                    pt-1
                  "
                >
                  <Icon
                    className="
                      h-[48px]
                      w-[48px]
                      text-white

                      sm:h-[52px]
                      sm:w-[52px]

                      md:h-[55px]
                      md:w-[55px]
                    "
                    strokeWidth={1.25}
                  />
                </div>

                {/* Text */}
                <div>
                  {/* Feature title */}
                  <h3
                    className="
                      text-[26px]
                      font-light
                      leading-[1.25]
                      tracking-[-0.5px]
                      text-[#eeb681]

                      sm:text-[29px]

                      md:text-[30px]

                      lg:text-[32px]

                      xl:text-[34px]
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-[620px]
                      text-[19px]
                      font-light
                      leading-[1.45]
                      text-white

                      sm:text-[21px]

                      md:text-[22px]

                      lg:text-[24px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
     <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#202b3d]
        px-5
        py-16
        text-white

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-12
        lg:py-14
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,#202b3d_0%,#202b3d_60%,#1e293a_100%)]
        "
      />

      {/* Subtle blue glow */}
      <div
        className="
          absolute
          left-[30%]
          top-[-200px]
          h-[400px]
          w-[600px]
          rounded-full
          bg-cyan-900/10
          blur-[100px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        {/* Heading */}
        <h2
          className="
            text-center
            text-[38px]
            font-light
            leading-tight
            tracking-[-1px]
            text-[#67b5d5]

            sm:text-[44px]

            md:text-[50px]

            lg:text-[52px]
          "
        >
          Industries We Serve
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-5
            text-center
            text-[25px]
            font-light
            leading-[1.4]
            tracking-[-0.5px]
            text-white

            sm:text-[28px]

            md:text-[30px]

            lg:text-[34px]
          "
        >
          Ignite<span className="text-red-500">3i</span> specializes in recruiting for:
        </p>

        {/* Industry buttons */}
        <div
          className="
            mx-auto
            mt-16
            grid
            w-full
            max-w-[1150px]
            grid-cols-1
            gap-7

            sm:mt-20
            sm:grid-cols-2
            sm:gap-8

            lg:mt-20
            lg:grid-cols-6
            lg:gap-x-8
            lg:gap-y-8
          "
        >
          {industries.map((industry, index) => (
            <div
              key={industry}
              className={`
                flex
                min-h-[74px]
                items-center
                justify-center
                rounded-full
                border
                border-[#3787a5]
                px-6
                py-4
                text-center
                text-[18px]
                font-light
                leading-[1.3]
                text-white
                transition-all
                duration-300
                hover:bg-[#3787a5]/10
                hover:shadow-[0_0_20px_rgba(55,135,165,0.15)]

                sm:text-[19px]

                lg:min-h-[74px]
                lg:text-[20px]

                ${
                  index === 0
                    ? "lg:col-span-2"
                    : index === 1
                      ? "lg:col-span-2"
                      : index === 2
                        ? "lg:col-span-2"
                        : index === 3
                          ? "lg:col-span-3"
                          : index === 4
                            ? "lg:col-span-3"
                            : index === 5
                              ? "lg:col-span-3"
                              : index === 6
                                ? "lg:col-span-3"
                                : index === 7
                                  ? "lg:col-span-3"
                                  : "lg:col-span-3"
                }
              `}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>

    <JobMarquee/>
    <section
  className="
    relative
    min-h-[200px]
    w-full
    overflow-hidden
    bg-[#252c50]
    px-5
    py-12
    text-white
    sm:px-8
    sm:py-16
    md:px-10
    lg:px-12
  "
>
  {/* =====================================================
      BACKGROUND - Only two layers
  ====================================================== */}

  {/* Base background with gradient */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_50%_45%,rgba(55,81,116,0.25),transparent_45%),linear-gradient(120deg,#252b4b_0%,#1e2648_45%,#252b4b_100%)]
    "
  />

  {/* Single subtle glow overlay */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(ellipse_at_30%_20%,rgba(70,125,143,0.15),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(128,90,213,0.10),transparent_50%)]
    "
  />

  {/* =====================================================
      CONTENT CARD
  ====================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1285px]
      rounded-lg
      bg-[linear-gradient(135deg,rgba(70,125,143,0.75),rgba(55,79,111,0.72))]
      px-6
      py-10
      text-center
      sm:px-10
      sm:py-12
      md:px-12
      md:py-14
      lg:px-16
    "
  >
    {/* Main CTA heading */}
    <h1
      className="
        mx-auto
        max-w-[1200px]
        text-[32px]
        font-light
        leading-[1.25]
        tracking-[-1px]
        text-[#ffb494]
        sm:text-[39px]
        md:text-[45px]
        lg:text-[46px]
        xl:text-[48px]
      "
    >
      Let Ignite<span className="text-red-500">3i</span> Transform Your Talent Acquisition Strategy
    </h1>

    {/* Subtitle */}
    <p
      className="
        mt-4
        text-[23px]
        font-light
        leading-[1.35]
        sm:text-[27px]
        md:text-[30px]
        lg:text-[32px]
      "
    >
      Partner with Ignite<span className="text-red-500">3i</span> today and achieve workforce excellence.
    </p>

    {/* Description */}
    <p
      className="
        mx-auto
        mt-6
        max-w-[900px]
        text-[17px]
        font-light
        leading-[1.45]
        sm:text-[19px]
        md:mt-8
        md:text-[21px]
        lg:text-[23px]
      "
    >
      Whether you need cleared professionals for federal agencies or
      data-driven hiring for commercial sectors, we're here to ensure
      success.
    </p>
  </div>

  
</section>
<ContactUsPage/>

  <Footer />

    </>
  );
};
