import React from "react";
import project from "./data/projects.json";

console.log("porjects", project)
export const Projects = () => {
  return (
    <>
      <div className="container projects my-3">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {project.map((data) => (
            <div key={data.id} className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem", border: "1px solid yellow", boxShadow:'5px 5px 10px 10px rgba(101, 175, 10, 0.5)', }}
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.link} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
