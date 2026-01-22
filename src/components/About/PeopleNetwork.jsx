import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaUser } from "react-icons/fa";

const peopleGroups = [
  {
    groupTitle: "SPM & ASPM",
    members: [
      {
        name: "Dr. Md Murshadul Hoque",
        designation: "Senior Project Manager",
        image: "people/spm1.jpg",
        socials: {
          linkedin: "#",
          facebook: "#",
          email: "mailto:spm@example.com",
        },
      },
      {
        name: "Dr. Arif Iftakher Mahmood",
        designation: "Assistance Senior Project Manager",
        image: "people/aspm.jpg",
        socials: {
          linkedin: "#",
          facebook: "#",
          email: "mailto:aspm@example.com",
        },
      },
    ],
  },
  {
    groupTitle: "Management Team",
    members: [
      {
        name: "Safayat Siddiui",
        designation: "Office Manager",
        image: "people/m1.jpg",
        socials: { linkedin: "#", facebook: "#",email: "mailto:" },
      },
      {
        name: "Tafim",
        designation: "Computer Operator",
        image: "people/m2.jpg",
        socials: { linkedin: "#", facebook: "#",email: "mailto:" },
      },
      {
        name: "Sajib",
        designation: "Accountant",
        image: "people/m3.jpg",
        socials: { linkedin: "#", facebook: "#",email: "mailto:" },
      },
      {
        name: "Irfan",
        designation: "Lab Assistant",
        image: "people/m4.jpg",
        socials: { linkedin: "#", facebook: "#" ,email: "mailto:"},
      },
    ],
  },
  {
    groupTitle: "Research Assistants (RA)",
    members: [
      {
        name: "Imon",
        designation: "Research Assistant",
        image: "people/ra1.jpg",
        socials: { linkedin: "#", facebook: "#",email: "mailto:" },
      },
      {
        name: "Alif",
        designation: "Research Assistant",
        image: "people/ra2.jpg",
        socials: { linkedin: "#", facebook: "#",email: "mailto:" },
      },
      {
        name: "Tamim",
        designation: "Research Assistant",
        image: "people/ra3.jpg",
        socials: { linkedin: "#", facebook: "#" ,email: "mailto:"},
      },
      {
        name: "Zakia",
        designation: "Research Assistant",
        image: "people/ra4.jpg",
        socials: { linkedin: "#", facebook: "#" ,email: "mailto:"},
      },
    ],
  },
];

export default function PeopleNetwork() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            People & Network
          </h2>
        </div>

        {peopleGroups.map((group) => (
          <div key={group.groupTitle} className="mb-20">
            {/* Group Title */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-2 h-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {group.groupTitle}
              </h3>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center border-4 border-white shadow-lg group-hover:border-blue-200 transition-all">
                      <FaUser className="text-5xl text-blue-600/40" />
                    </div>

                    {/* Info */}
                    <h4 className="mt-6 font-bold text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      {member.designation}
                    </p>

                    {/* Social Icons */}
                    <div className="mt-6 flex gap-7 justify-center">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      )}
                      {member.socials.facebook && (
                        <a
                          href={member.socials.facebook}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 text-gray-600 hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                        >
                          <FaFacebookF size={16} />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                        >
                          <FaEnvelope size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
