import React from "react";

const rows = [
  {
    direction: "left",
    items: [
      "Civil Engineers",
      "Project Engineers",
      "Project Managers",
      "Cybersecurity",
      "Technology",
      "Construction Superintendent",
      "Systems Engineer/Admins",
    ],
  },
  {
    direction: "right",
    items: [
      "Systems Engineer/Admins",
      "ISSO/ISSE",
      "Software Engineers /Developers",
      "Full Stack Developer",
      "Data Engineers/Analysts /Scientists",
      "Network Engineer",
    ],
  },
  {
    direction: "left",
    items: [
      "Financial Controller/Analyst",
      "Tax Consultants",
      "Accounting Clerk/Managers/Director",
      "AP/AR specialist",
      "Business Development Manager (Consulting)",
      "Client Relationship Manager",
      "Business Analyst",
    ],
  },
];

const JobMarquee = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-16">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(120deg,#111827_0%,#151d31_50%,#101827_100%)]
        "
      />

      {/* Background decoration */}
      <div
        className="
          absolute
          left-[30%]
          top-[-250px]
          h-[600px]
          w-[600px]
          rotate-[25deg]
          bg-blue-900/10
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          right-[10%]
          bottom-[-300px]
          h-[600px]
          w-[500px]
          rotate-[-20deg]
          bg-slate-700/10
          blur-[100px]
        "
      />

      {/* Rows */}
      <div className="relative z-10 space-y-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="group w-full overflow-hidden"
          >
            <div
              className={`
                flex
                w-max
                gap-3
                whitespace-nowrap
                ${
                  row.direction === "left"
                    ? "animate-scroll-left"
                    : "animate-scroll-right"
                }
                group-hover:[animation-play-state:paused]
              `}
            >
              {/* First copy */}
              {row.items.map((item, index) => (
                <JobBox
                  key={`first-${index}`}
                  item={item}
                />
              ))}

              {/* Second copy */}
              {row.items.map((item, index) => (
                <JobBox
                  key={`second-${index}`}
                  item={item}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const JobBox = ({ item }) => {
  return (
    <div
      className="
        flex
        h-[64px]
        min-w-[225px]
        items-center
        justify-center

        border
        border-[#4d8190]

        bg-gradient-to-br
        from-[#3e7078]
        via-[#14272d]
        to-black

        px-6
        text-center

        text-[15px]
        font-medium
        leading-tight
        text-white

        transition-all
        duration-300

        hover:border-[#6eb8c5]
        hover:from-[#528e96]
        hover:shadow-[0_0_20px_rgba(72,160,175,0.25)]

        sm:h-[70px]
        sm:min-w-[250px]
        sm:text-[16px]

        md:min-w-[285px]
        md:text-[17px]

        lg:h-[78px]
        lg:min-w-[310px]
        lg:text-[17px]
      "
    >
      {item}
    </div>
  );
};

export default JobMarquee;