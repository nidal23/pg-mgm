import React from "react";

export default function ProjectCard({ project }) {
  const color =
    project.status === "Not Started"
      ? "red"
      : project.status === "Completed"
      ? "green"
      : "yellow";
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{project.name}</h5>
            <a className="btn btn-white" href={`/projects/${project.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <strong style={{ color: color }}>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
