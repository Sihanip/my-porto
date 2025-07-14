import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Invitation Online",
    description:
      "A template for an online registration or invitation application for an event or the like that can be responsive for desktop, mobile, tablet.",
    image: "/projects/scbf.png",
    tags: ["HTML", "TailwindCSS", "PHP"],
    demoUrl: "https://scbf2025.com/login.php?stslogin=false34",
    githubUrl: "https://github.com/Sihanip/regist-sistem",
  },
  {
    id: 6,
    title: "Lucky Draw",
    description:
      "A template for an online sweepstakes application that can be used for events or other purposes.",
    image: "/projects/lucky.png",
    tags: ["HTML", "TailwindCSS", "PHP"],
    demoUrl: "https://invitationevent.site/undian4/grand_draw",
    githubUrl: "https://github.com/Sihanip/lucky_spin",
  },
  {
    id: 2,
    title: "Gawe.co",
    description:
      "Gawe.co is a website for finding job vacancies made with the React js Framework and with Tailwind Css styling.",
    image: "/projects/gawe.co.png",
    tags: ["React", "TailwindCss", "Flowbite"],
    demoUrl: "dream-work.netlify.app/",
    githubUrl: "https://github.com/Sihanip/dream-work",
  },
  {
    id: 3,
    title: "SEHATIN",
    description:
      "SEHATIN is a website-based medicine buying and selling application using the codeigniter 3 framework and the Tailwind Css and Swiper Js Ui libraries.",
    image: "/projects/sehatin.png",
    tags: ["CI-3", "Swiper.js", "TailwindCss"],
    demoUrl: "myujikom.000webhostapp.com/dashboard",
    githubUrl: "https://github.com/Sihanip/UjiKom_Ci3",
  },
  {
    id: 4,
    title: "Tiketku",
    description:
      "Tiketku is a website that is used to book airplane tickets online, created in collaboration with the backend team.",
    image: "/projects/tiketku.png",
    tags: ["React", "TailwindCss", "Redux"],
    demoUrl: "final-project-binar-group-5.vercel.app",
    githubUrl: "https://github.com/Dhikaadn/final-project-binar-group-5",
  },
  {
    id: 5,
    title: "BCR Landing Page",
    description:
      "BCR is a simple landing page used to provide car rental information made to fulfill Binar Academy's",
    image: "/projects/bcr.png",
    tags: ["HTML", "Bootstrap 5", "JavaScript"],
    demoUrl: "landingpage-bcr.netlify.app/",
    githubUrl: "https://github.com/Sihanip/simple_landingPage",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sihanip"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
