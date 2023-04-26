import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQuries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log(data);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <div>
      {data.projects.length > 0 ? (
        <div className="row mt-3">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </div>
  );
}
