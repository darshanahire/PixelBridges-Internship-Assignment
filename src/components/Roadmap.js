import React from 'react'

function Roadmap() {
  return (
    <div className='container roadmapPar'>
          <img className="mx-3" src="/png/roadmap.png" alt="" />
          <h1 className='mb-5'>Roadmap</h1>
          <div className="row text-start readmapMoonParent">
            <div className="col-12 col-md-4 readmapMoon" style={{background:'url(./png/1.png) no-repeat'}}>
              <h1 className='mx-3'>Alpha Phase</h1>
              <h6 className='mx-3'>2023 Q3</h6>
              <ol className='my-4'>
                <li>Alpha version launch</li>
                <li>Landing page</li>
                <li>Teasing events</li>
              </ol>
            </div>
            <div className="col-12 col-md-4 readmapMoon" style={{background:'url(./png/2.png) no-repeat'}}>
              <h1 className='mx-3'>Beta Phase</h1>
              <h6 className='mx-3'>Now</h6>
              <ol className='my-4'>
                <li>Beta version launch</li>
                <li>Trading competition</li>
                <li>Community events</li>
              </ol>
            </div>
            <div className="col-12 col-md-4 readmapMoon" style={{background:'url(./png/3.png) no-repeat'}}>
              <h1 className='mx-3'>Launch Phase</h1>
              <h6 className='mx-3'>2023 Q4</h6>
              <ol className='my-4'>
                <li>Alpha version launch</li>
                <li>Product page</li>
                <li>Partnership events</li>
              </ol>
            </div>
          </div>
    </div>
  )
}

export default Roadmap; 