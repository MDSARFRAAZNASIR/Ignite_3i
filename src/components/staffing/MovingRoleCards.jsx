import React, { useState } from "react";

const rolesTop = [
  "Data Scientist",
  "Patch Engineer",
  "Network Administrator",
  "Network Architect",
  "Product & Program Manager",
  "Business Analyst",
  "Team Lead",
];

const rolesBottom = [
  "Network Architect",
  "Network Administrator",
  "Patch Engineer",
  "Data Scientist",
  "Java Developer",
  ".NET Developer",
  "React Developer",
];

const RoleRow = ({ roles, direction = "left" }) => {
  const [paused, setPaused] = useState(false);

  // Duplicate the list to make the scrolling seamless
  const duplicatedRoles = [...roles, ...roles];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`
          flex w-max gap-4
          ${direction === "left"
            ? "animate-scroll-left"
            : "animate-scroll-right"}
        `}
        style={{
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {duplicatedRoles.map((role, index) => (
          <div
            key={`${role}-${index}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="
              flex
              h-20
              min-w-[280px]
              cursor-pointer
              items-center
              justify-center
              border
              border-slate-500/50
              bg-gradient-to-br
              from-cyan-400/50
              via-slate-800
              to-slate-950
              px-6
              text-center
              text-xl
              font-medium
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:border-cyan-300
              hover:shadow-cyan-500/20
              hover:scale-[1.02]
            "
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

const MovingRoleCards = () => {
  return (
    <section className="w-full overflow-hidden bg-[#171B36] py-10">
      <div className="space-y-7">

        {/* First Row */}
        <RoleRow
          roles={rolesTop}
          direction="left"
        />

        {/* Second Row */}
        <RoleRow
          roles={rolesBottom}
          direction="right"
        />

      </div>
   

    </section>
  );
};

export default MovingRoleCards;