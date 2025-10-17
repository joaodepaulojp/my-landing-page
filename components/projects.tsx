import { Button } from "./ui/button";

const arrayProjects = [
  {
    id: 1,
    name: "Barber App",
    description:
      "Barber App é um aplicativo de agendamento de serviços de barbearia.",
    projectUrl: "https://barberapp-teal.vercel.app",
    repoUrl: "https://github.com/joaodepaulojp/barberapp",
  },
  {
    id: 2,
    name: "Self Checkout App",
    description: "Um aplicativo de self checkout inspirado no McDonalds.",
    projectUrl: "https://mc-donalds-phi.vercel.app/jp-donalds",
    repoUrl: "https://github.com/joaodepaulojp/mc-donalds",
  },
  {
    id: 3,
    name: "Auth Login",
    description: "Auth Login é um sistema de autenticação de usuários.",
    projectUrl: "#",
    repoUrl: "https://github.com/joaodepaulojp/auth-login",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col space-y-6">
      {arrayProjects.map((project) => (
        <div key={project.id} className="border p-4 space-y-4 rounded">
          <h2 className="text-xl">{project.name}</h2>
          <p>{project.description}</p>
          <div className="justify-between flex">
            {project.projectUrl !== "#" && (
              <Button asChild>
                <a href={project.projectUrl}>Acessar Projeto</a>
              </Button>
            )}
            <Button variant="outline" asChild>
              <a href={project.repoUrl}>Acessar Repositório</a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
