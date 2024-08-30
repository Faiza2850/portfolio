import React from 'react'
import experience from './data/experience.json'

export const Experience = () => {
  return (
    <>
    <div className='container ex'>
      <h1>EXPERIENCE</h1>
      {
        experience.map((data)=>{
          return(
            <>
            <div key={data.id} className='ex-items'>
              <div className="left">
                <img src="" alt="" />
              </div>
              <div className="right">
                <h2>{data.role}</h2>
              </div>


            </div>
            </>
          )
        }
      )
      }
    </div>
    </>
  )
}
