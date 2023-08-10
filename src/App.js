import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import JoinComp from './components/JoinComp';
import Roadmap from './components/Roadmap';
import Profiles from './components/Profiles';
import EarthComp from './components/EarthComp';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const cardData = [
    {
    'headPart1' : "Earn Higher & Predictable Yields with",
    'headPart2' : "Dual Investment",
    'para' : "Dyson Finance introduces decentralized Dual Investment to make liquidity provision easy-to-use and profitable for anyone. Of course, with higher APR than CEX, regardless of market direction.",
    "btnText" : "Invest Now",
    "bgColor" : "linear-gradient(135deg, rgba(90, 132, 250, 0.30) 0%, rgba(101, 90, 250, 0.30) 100%)",
    "pos":"start"
    },
    {
    'headPart1' : "Maximize Fee Revenue with",
    'headPart2' : "Dynamic AMM",
    'para' : "With its innovative dynamic trading fee model, Dyson Finance effectively avoids MEV attacks and price manipulation by bots, enhances the protocol's profitability and captures more fee revenue for users",
    "btnText" : "Trade Now",
    "bgColor" : "linear-gradient(135deg, rgba(101, 90, 250, 0.3) 0%, rgba(49, 177, 250, 0.3) 100%)",
    "pos":"end"
    },
    {
    'headPart1' : "Refer Your Friends & Earn More Together with",
    'headPart2' : "Membership NFT",
    'para' : "By joining Referral Program, boost your yield and earn exclusive additional $DYSN rewards in Dual Investment. Each member can invite up to three friends, so choose your teammates wisely!",
    "btnText" : "Join Now",
    "bgColor" : "linear-gradient(135deg, rgba(49, 177, 250, 0.3) 0%, rgba(102, 153, 204, 0.3) 60%, rgba(228, 162, 103, 0.3) 100%)",
    "pos":"start"
    }
]
  return (
    <div className='parent' style={{backgroundImage : "url('/bg.png')"}}>
      <div className='containers'>
        <Navbar/>
        <div>
        <Home/>
        </div>
        <div className='height1800'>
          {
            cardData.map((elem,key)=>{
              return <>
              <div className={'container-md d-flex justify-content-'+elem.pos}>
                <Card1 data={elem} id={key}/>
              </div>
              </>
            })
          }
            <video  preload="auto" disablePictureInPicture="" controlsList="nodownload" className="diskAnimation" muted autoPlay loop>
                  <source src="/video/disk.webm" type="video/webm" />
              </video>
          <video  preload="auto" disablePictureInPicture="" controlsList="nodownload" className="sateliteAnimation" muted autoPlay loop>
                <source src="/video/satelite.webm" type="video/webm" />
            </video>
        </div>
        <JoinComp/>
        <Roadmap/>
        <Profiles/>
        <EarthComp/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
