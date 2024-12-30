import { ukUniversities } from "@/config/universities";

export default function UniversitiesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">合作院校 (部分)</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ukUniversities.map((uni, index) => (
            <a
              href={uni.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              key={index}
            >
              <div
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-32 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-800 text-center truncate">
                    {uni.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
