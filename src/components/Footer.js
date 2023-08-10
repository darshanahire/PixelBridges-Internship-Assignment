import React from 'react'

function Footer() {
  return (
    <div className='footer p-5'>
        <div className="row text-start">
            <div className="col-12 col-md-8  logo">
                <h4>DARSHAN'S FINANSE</h4>
            </div>
            <div className="col col-md-2">
                <ul>
                    <li className='footerListHead'>Community</li>
                    <li className='footerListElem'>Twiter</li>
                    <li className='footerListElem'>Discord</li>
                    <li className='footerListElem'>Telegram</li>
                </ul>
            </div>
            <div className="col col-md-2">
            <ul>
                    <li className='footerListHead'>Documentation</li>
                    <li className='footerListElem'>Whitepaper</li>
                    <li className='footerListElem'>Userguide</li>
                    <li className='footerListElem'>Blog</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer