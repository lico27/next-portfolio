import { cn } from "@/utils/cn";
import { SiCodecademy, SiFreecodecamp, SiUdemy, SiPython } from "react-icons/si";

export function Certifications() {
  const features = [
    {
      title: "Learn SQL",
      description:
        "Complete",
      icon: <SiCodecademy size={40} />,
      link: "https://www.codecademy.com/profiles/lico27/certificates/042a4e5884e3eb6ea1f2a12be6abb851",
    },
    {
      title: "Intro to LLMs",
      description:
        "Complete",
        icon: <SiCodecademy size={40} />,
        link: "https://www.codecademy.com/profiles/lico27/certificates/1fb2fea548cf4c5f937545d9872a0c07",
    },
    {
      title: "Learn HTML",
      description:
        "Complete",
        icon: <SiCodecademy size={40} />,
        link: "https://www.codecademy.com/profiles/lico27/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
    },
    {
      title: "Code Foundations",
      description: "Complete",
      icon: <SiCodecademy size={40} />,
      link: "https://www.codecademy.com/profiles/lico27/certificates/5b55e668646caa552f8e4d1d",
    },
    {
      title: "Responsive Web Design",
      description: "Complete",
      icon: <SiFreecodecamp size={40} />,
      link: "https://www.freecodecamp.org/certification/lico27/responsive-web-design",
    },
    {
      title: "Math for Data Science Masterclass",
      description:
        "In progress",
        icon: <SiUdemy size={40} />,
        link: "https://www.udemy.com/",
    },
    {
      title: "PCEP™ - Certified Entry-Level Python Programmer",
      description:
        "In progress",
        icon: <SiPython size={40} />,
        link: "https://pythoninstitute.org/pcep",
    },
    {
      title: "Career Path: Data Scientist (NLP Specialist)",
      description: "In progress",
      icon: <SiCodecademy size={40} />,
      link: "https://www.codecademy.com/",
    },
    {
      title: "Learn Python 3",
      description: "In progress",
      icon: <SiCodecademy size={40} />,
      link: "https://www.codecademy.com/",
    },
    {
      title: "Analyze Data with SQL",
      description: "In progress",
      icon: <SiCodecademy size={40} />,
      link: "https://www.codecademy.com/",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description: "In progress",
      icon: <SiFreecodecamp size={40} />,
      link: "https://www.freecodecamp.org/",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-green-100 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
        <a
          href={link}
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
        >
          {title}
        </a>
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
