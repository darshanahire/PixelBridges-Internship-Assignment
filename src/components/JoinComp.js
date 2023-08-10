import React from 'react'

function JoinComp() {
  return (
    <div className='container'>
        <div className='text-start mx-5'>
            <img className="mx-3" src="/png/bag.png" alt="" />
            <h1 className='mb-4 mx-5'>Join Before Our Launch Into Orbit</h1>
            <h5 className='my-4 mx-5 colorGray'>Don't miss Dyson Loyalty Program's exciting testnet events</h5>
        </div>
        <div className='memCard mx-auto'>
            <div className='d-md-flex  justify-content-between'>
                <div className='row memHead joinCardMem'>
                <span className='col'> <img src="/png/13.png" alt=""/>Membership NFT</span>
                <span className='col'> <img src="/png/12.png" alt=""/> Early $DYSN Airdrop</span>
                </div>
                <div className='row'>
                <span className='col'>Dyson Loyalty Program
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-1"><path d="M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z" fill="currentColor"></path></svg>

                </span>
                </div>
            </div>
                <p className='memCardPara w-md-50 text-start'>
                Collect as many Dyson NFTs & loyalty points as possible by performing simple tasks, unlocking future $DYSN airdrops and exclusive benefits within referral program.
                </p>
                <button className='btn btn-dark darkBtn'>Enter Galxe</button>
        </div>
    </div>
  )
}

export default JoinComp