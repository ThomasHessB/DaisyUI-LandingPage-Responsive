import React from "react";

const features = [
  {
    id: 1,
    title: "Feature 1",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageUrl: "https://picsum.photos/id/227/500/500", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Feature 2",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageUrl: "https://picsum.photos/id/231/500/500",
  },
  {
    id: 3,
    title: "Feature 3",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageUrl: "https://picsum.photos/id/257/500/500",
  },
  {
    id: 4,
    title: "Feature 4",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageUrl: "https://picsum.photos/id/238/500/500",
  },
  {
    id: 5,
    title: "Feature 5",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageUrl: "https://picsum.photos/id/230/500/500",
  },
  {
    id: 6,
    title: "Feature 6",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageUrl: "https://picsum.photos/id/210/500/500",
  },
  // Add more features as needed
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature) => (
            <div key={feature.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
