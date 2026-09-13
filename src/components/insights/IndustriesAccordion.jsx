import React, { useState } from "react";
import {
  Code2,
  Wifi,
  Landmark,
  Atom,
  GraduationCap,
  Handshake,
  Lightbulb,
  Zap,
  Building2,
  ArrowLeftRight,
  Rocket,
  Factory,
  ChevronDown,
} from "lucide-react";

const industries = [
  {
    title: "IT & Engineering",
    icon: Code2,
    description:
      "We provide highly skilled IT and engineering professionals to support complex technology initiatives and engineering projects.",
  },
  {
    title: "Telecom",
    icon: Wifi,
    description:
      "Our telecom recruitment solutions connect organizations with experienced professionals across network, wireless, and communications technologies.",
  },
  {
    title: "Banking & Financial Services",
    icon: Landmark,
    description:
      "We help financial institutions find experienced professionals across banking, finance, risk, compliance, and technology.",
  },
  {
    title: "Life Sciences and Healthcare",
    icon: Atom,
    description:
      "We connect healthcare and life sciences organizations with specialized talent who can support critical operations and innovation.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Our recruitment services help educational organizations attract talented professionals across technology, administration, and academic operations.",
  },
  {
    title: "Non-Profit",
    icon: Handshake,
    description:
      "We help nonprofit organizations identify mission-driven professionals who can contribute to sustainable growth and meaningful outcomes.",
  },
  {
    title: "Digital & Creative",
    icon: Lightbulb,
    description:
      "We connect organizations with creative and digital professionals across design, marketing, content, technology, and digital transformation.",
  },
  {
    title: "Utilities and Energy",
    icon: Zap,
    description:
      "Our specialized recruitment solutions support energy and utility organizations with skilled technical and operational professionals.",
  },
  {
    title: "Government",
    icon: Building2,
    description:
      "We support government organizations with qualified professionals who understand the unique requirements of public-sector environments.",
  },
  {
    title: "Transportation & Logistics",
    icon: ArrowLeftRight,
    description:
      "We provide recruitment solutions for transportation and logistics organizations across operations, technology, engineering, and management.",
  },
  {
    title: "Startup Industry",
    icon: Rocket,
    description:
      "Startups trust Ignite3i for innovative, secure software solutions. With our IT outsourcing expertise, we enable rapid scaling of sophisticated systems. Leverage our Agile process and QA experience to bring your disruptive tech ideas to life swiftly and securely.",
  },
  {
    title: "Industrial Sector",
    icon: Factory,
    description:
      "We help industrial organizations build strong teams across manufacturing, engineering, operations, technology, and management.",
  },
];

const IndustriesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(10);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#101429]
        px-5
        py-16
        text-white

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

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
          bg-[radial-gradient(circle_at_40%_35%,rgba(16,74,105,0.18),transparent_30%),linear-gradient(110deg,#11152b_0%,#101429_100%)]
        "
      />

      {/* Background glow */}
      <div
        className="
          absolute
          left-[28%]
          top-[15%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-900/20
          blur-[120px]
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          gap-12

          md:gap-14

          lg:grid-cols-[200px_1fr]
          lg:gap-16

          xl:grid-cols-[400px_1fr]
          xl:gap-20
        "
      >
        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <div className="lg:pt-1">
          <h2
            className="
              text-[40px]
              font-normal
              leading-[1.2]
              text-white

              sm:text-[28px]

              md:text-[30px]

              lg:text-[56px]
            "
          >
            Industries We Serve
          </h2>

          <p
            className="
              mt-4
              max-w-[360px]
              text-[18px]
              lg:text-[22px] 
              font-light
              leading-[1.5]
              text-white

              sm:text-[13px]

            "
          >
            At Ignite<span className="text-red-500">3i</span> Inc., we specialize in delivering industry-specific
            software solutions that empower enterprises to drive innovation,
            enhance operational efficiency, and achieve business objectives.
            With our wealth of expertise in delivering tailored digital
            solutions to diverse midmarket industries, we understand the
            importance of addressing unique challenges and goals, ensuring a
            customized approach to each client engagement.
          </p>
        </div>

        {/* ==================================================
            ACCORDION
        ================================================== */}

        <div className="w-full max-w-[760px]">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={industry.title}
                className="
                  border-b
                  border-white/25
                "
              >
                {/* Accordion header */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    gap-5
                    px-1
                    py-4
                    text-left
                    transition-all
                    duration-300

                    sm:py-[17px]

                    md:py-[18px]

                    hover:bg-white/[0.02]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      text-white
                    "
                  >
                    <Icon
                      className="
                        h-[58px]
                        w-[58px]

                        sm:h-[58px]
                        sm:w-[58px]
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <span
                    className="
                      flex-1
                      text-[30px]
                      font-light
                      text-[#efb393]

                      sm:text-[25px]

                      md:text-[24px]
                    "
                  >
                    {industry.title}
                  </span>

                  {/* Arrow */}
                  <ChevronDown
                    className={`
                      h-10
                      w-10
                      shrink-0
                      text-white
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                    strokeWidth={1.8}
                  />
                </button>

                {/* Accordion content */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className="
                        max-w-[600px]
                        pb-5
                        pl-[56px]
                        pr-5
                        text-[20px]
                        font-light
                        leading-[1.55]
                        text-white

                        sm:text-[21px]

                        md:text-[18px]
                      "
                    >
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesAccordion;