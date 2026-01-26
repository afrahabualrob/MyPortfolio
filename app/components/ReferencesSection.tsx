import { referencesList } from "../data/referencesList";

const ReferencesSection = () => {
  return (
    <section
      id="references"
      className="px-6 md:px-12 lg:px-20 py-16 sm:py-24 bg-stone-50 text-center "
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-cyan-700 mb-8 font-mono">
          References
        </h2>

        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {referencesList.map((person, index) => (
            <li
              key={person.id}
              className={` ${index === 0 ? "pt-0" : ""} ${
                index === referencesList.length - 1 ? "pb-0" : ""
              }`}
            >
              <img
                className="h-30 w-30 rounded-full mx-auto border-1 border-stone-200 "
                src={person.imageUrl}
                alt={person.name}
              />

              <p className="text-lg font-bold text-gray-900 my-2">
                {person.name}
              </p>
              <p className="text-sm text-gray-800 font-mono">
                {person.position}
              </p>
              <p className=" text-md text-gray-700 font-medium">
                {person.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReferencesSection;
