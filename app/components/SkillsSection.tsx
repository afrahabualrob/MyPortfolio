import { skillsList } from "../data/skillsList";

const SkillsSection = () => {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-20 text-center bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-700 font-mono">
          My Skills
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto font-mono">
          Technologies and tools I use to build high-quality, scalable, and
          user-focused applications.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsList.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 px-6 py-10 shadow-sm hover:shadow-md transition bg-white"
              >
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 text-cyan-600" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-800 font-mono">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed font-serif">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
