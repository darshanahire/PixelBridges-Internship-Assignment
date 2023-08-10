import React from 'react'
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
    <div className='homeCompParent'>
    <div className='mainHeadingParent d-flex justify-content-center align-items-center flex-column'>
        <div className='nftBtnPar'>
            <span className='nftBtn'> 
                <span className='EventBtn'>
                    EVENT
                </span>
                Earn Genesis NFTs!
                <svg className="arrow mx-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6488 7.29763H5.00258L8.34308 3.86969C8.61005 3.59574 8.61005 3.14617 8.34308 2.87221C8.07611 2.59826 7.64486 2.59826 7.37789 2.87221L2.86685 7.50134C2.59988 7.7753 2.59988 8.21784 2.86685 8.49179L7.37105 13.1279C7.63802 13.4019 8.06927 13.4019 8.33623 13.1279C8.6032 12.854 8.6032 12.4115 8.33623 12.1375L5.00258 8.70253H12.6488C13.0253 8.70253 13.3333 8.38643 13.3333 8.00008C13.3333 7.61373 13.0253 7.29763 12.6488 7.29763Z" fill="currentColor" fill-opacity="0.75"></path></svg>
            </span>
        </div>
        <div className='mainHeading'>
            Accessible & Profitable DEX for All
        </div>
        <div className='mainHeadingBtn mt-5'>
        <Button variant="primary" className='launchBtn mx-4'>Launch App (Testnet)</Button>
        <Button variant="primary" className='unlockBtn'>Unlock Early Perks</Button>
        </div>
    </div>
        <div className="videoParent">
            <video preload="auto" controlsList="nodownload" className="bhVideo" muted autoPlay loop>
                <source src="/video/bh.webm" type="video/webm" />
            </video>
            <div className='videoBg'>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home