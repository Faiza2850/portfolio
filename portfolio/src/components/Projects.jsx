import React from 'react'
import project from './data/projects.json'

export const Projects = () => {
  return (
    <>
    <div className="container projects my-3"></div>
    <h1>PROJECTS</h1>
    <div className="row">
    {projects.map((data)=>{
        <>
        <div key={data.id}>
        <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
        
        </>
    }

    )}
    </div>
    </>
  )
}
