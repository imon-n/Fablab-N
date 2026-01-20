import { useState } from "react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    "robotics",
    "fabrication",
    "innovation",
    "research",
    "training",
  ];

  const posts = [
    {
      id: 1,
      title: "Introduction to Applied Robotics at FabLab CU",
      excerpt:
        "Explore how applied robotics is shaping hands-on learning and real-world problem solving at FabLab CU.",
      author: "FabLab CU Team",
      date: "Jan 15, 2026",
      category: "robotics",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      id: 2,
      title: "Digital Fabrication Tools You Can Use at FabLab CU",
      excerpt:
        "A complete overview of 3D printers, laser cutters, CNC machines, and prototyping tools available in the lab.",
      author: "Lab Coordinator",
      date: "Jan 12, 2026",
      category: "fabrication",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
    },
    {
      id: 3,
      title: "Student Innovation Projects from FabLab CU",
      excerpt:
        "Discover innovative student-led projects developed through hands-on experimentation and teamwork.",
      author: "Innovation Cell",
      date: "Jan 10, 2026",
      category: "innovation",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      id: 4,
      title: "Research & Prototyping Opportunities in FabLab CU",
      excerpt:
        "Learn how FabLab CU supports research, rapid prototyping, and interdisciplinary collaboration.",
      author: "Research Supervisor",
      date: "Jan 8, 2026",
      category: "research",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" || post.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold">FabLab CU Blog</h1>
        <p className="text-gray-600">
          Updates, research, innovation & hands-on learning from FabLab CU
        </p>
      </div>

      <div className="p-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search FabLab articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full capitalize ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />

              <div className="p-5">
                <span className="text-sm text-blue-600 capitalize">
                  {post.category}
                </span>

                <h2 className="text-xl font-semibold mt-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-2">{post.excerpt}</p>

                <div className="text-sm text-gray-500 mt-4">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>

                <button className="mt-4 text-blue-600 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No articles found
          </p>
        )}
      </div>
    </div>
  );
}
