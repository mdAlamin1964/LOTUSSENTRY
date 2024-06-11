import React from 'react'
import Footer from './sactions/Footer'
import Header from './sactions/Header'
import Mail_form from './modules/Mail_form'
import Pop_up from './modules/Pop_up'
import logo from './assets/site-logo.png'
import navigate_image from './assets/images/links.png'
import delfil_icon from './assets/icons/defillama.svg'
import play_video_image from './assets/images/ad.jpg'


import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.css'


function App() {

  //Rooling text
  var rooling_text_items = ["Real Assets", "Real Time", "Guaranteed"]
  const [rooling_text, set_rooling_text] = React.useState(rooling_text_items[0])
  const [rooling_text_index, set_rooling_text_index] = React.useState(0)
  React.useEffect(()=> {
    const interval = setInterval(()=> {
      set_rooling_text_index((prev_index)=> (prev_index + 1) % rooling_text_items.length);
    }, 1500);
    return ()=> clearInterval(interval)
  },[rooling_text_items.length])

  React.useEffect(()=> {
    set_rooling_text(rooling_text_items[rooling_text_index])
  }, [rooling_text_index, rooling_text_items])


  // show pop_up
  const [show_pop, set_show_pop] = React.useState(false)
  const [pop_data, set_pop_data] = React.useState(undefined)

  function handle_show_pop() {
    set_show_pop(!show_pop)
  }

  function handle_serving_load_btn() {
    var element = document.getElementById('serving_btn')
    element.addEventListener('click', ()=> {
      set_pop_data(
        <Mail_form 
        />
      )
      handle_show_pop()
      console.log('hi')
    })
  }



  // vidoe box play Vidoe handle
  function home_middle_video_handle() {
    var element = document.getElementById('video_box_icon')
    element.addEventListener('click', ()=> {
      window.open('https://www.youtube.com/watch?v=JkaxUblCGz0', '_blank')
    })
  }












  // Caling all Direct funciton after window is loaded
  window.onload = ()=> {
    home_middle_video_handle()
    handle_serving_load_btn()
  }
  // 

  return (
    <>
    {/* Pop up area */}
    {show_pop?
      <Pop_up 
        data= {pop_data}
        hanlde_close = {()=> handle_show_pop}
      />
      :
      ""
    }

     {/* Header */}
      <Header
            logo_url = {logo}
      />
      

      {/* Main-body */}
      <div className="container-fluid px-3 home">
        <div className="row">
          {/* Left bar */}
          <div className=" col-md-2 left-bar py-4">
              <div className="wallet mb-3">
                  <p className="menu-title mb-3">wallet</p>
                  <div className="left-bar-menu">
                    <ul>
                      <li>
                        <a href="" className='inline-icon'>
                            <img src={logo} alt="" />
                            <p className="icon-text">
                              Comming soon
                            </p>
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="navigation">
                  <p className="menu-title mb-3">navigation</p>
                  <div className="left-bar-menu">
                    <ul>
                      <li>
                        <a href="" className='inline-icon'>
                            <p className="icon-text">
                              utilities
                            </p>
                            <img src={logo} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
          </div>

          {/* Main-body content */}
          <div className=" col-md-10 main-saction my-5 pt-4">
            <div className="top-saction">
              <div className="saction-title ">
                  <h1 className='saction-main-title'>Unlock The Power of Innovation Claim Your Secured Tangible Token!</h1>
              </div>

              <div className="rooling-text mt-4">
                {rooling_text}
              </div>
              <div className="call-to-action-saction mt-4">
                <button className='glowing_btn'>
                    <p>Get your self-repaying collateralized asset today</p>
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
            </div>

            <div className="middle-saction pt-3 my-4">
                <div className="video-box" style={{
                  backgroundImage: `url(${play_video_image})`,
                }}>
                  <div className="svg-icon pointer" id='video_box_icon'>
                    <svg role="img" className="w-32 h-32 absolute self-center opacity-100 transition-all group-hover:opacity-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                  </div>
                </div>

                <div className="gray-text text-center my-5">
                  Be at the forefront of harnessing a future yield token. 
                  Enhanced by artificial intelligence, tethered with government-secured, real estate-backed synthetic asset protocols.
                  Your collateral earns for you—auto-yield payment on your loan!
                </div>

                <div className="choose-path">
                  <div className="title">
                    <h4>Navigate Discover options</h4>
                    <div className="gray-text">
                        A multi-functional account for all your financial needs
                    </div>
                  </div>
                  <div className="path-image mt-2">
                    <img src={navigate_image} alt="" />
                  </div>
                  <a href="" className='learn-btn'>Learn more</a>
                </div>

            </div>


            <div className="asssets-saction py-5">
              <h4 className=' text-center'>Leverage your assets</h4>
              <div className="asset-list">
                    <ul>
                      <li>
                        <a href="" className='inline-icon'>
                            <img src={logo} alt="" />
                            <p className="icon-text">
                              Comming soon
                            </p>
                        </a>
                      </li>
                      <li>
                        <a href="" className='inline-icon'>
                            <img src={logo} alt="" />
                            <p className="icon-text">
                              Comming soon
                            </p>
                        </a>
                      </li>
                      <li>
                        <a href="" className='inline-icon'>
                            <img src={logo} alt="" />
                            <p className="icon-text">
                              Comming soon
                            </p>
                        </a>
                      </li>
                      <li>
                        <a href="" className='inline-icon'>
                            <img src={logo} alt="" />
                            <p className="icon-text">
                              Comming soon
                            </p>
                        </a>
                      </li>
                    </ul>
                  </div>
            </div>

            <div className="benefits-saction py-5">
              <h4 className=' text-center'>Revolutionary Real Estate Tokenization</h4>
              <div className="benefit-box">
                <ul>
                  <li>
                    <h6>GUARANTEED RETURNS WITH MINIMAL EFFORT</h6>
                    <div className="thin-text">
                      Utilize our AI platform for smarter investments, reduced risk, and effortless returns.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>UNMATCHED TRANSPARENCY, SECURITY & CONTROL</h6>
                    <div className="thin-text">
                      Complete transparency with real-time updates and full control over your real asset tethered NFTs through a secure blockchain framework.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>GLOBAL ACCESS</h6>
                    <div className="thin-text">
                      Enabling investors from anywhere access to fractionalized indirect real estate backed secured notes across different markets without geographical constraints.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>COMMUNITY DRIVEN ECOSYSTEM</h6>
                    <div className="thin-text">
                      Fosters an autonomous organization that encourages community interaction, knowledge sharing, job creation and collective financial growth.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>INFLATION PROOF</h6>
                    <div className="thin-text">
                      Immune to fluctuations caused by the FED, stock market roller coaster, pandemics, wars, oil price ripple effects and elections.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>START SMALL</h6>
                    <div className="thin-text">
                      Anywhere from 8% to 36% and even up to 50% returns.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>GOVERNMENT SECURED</h6>
                    <div className="thin-text">
                      Not exactly like the government secured bank instruments like CD’s or money market funds, through the FDIC, this option offers equally robust government agency guarantees for your investments.
                        <br />
                      It is 100% bullet-proof, ensuring your returns are as safe as any bank-guaranteed instrument.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                  <li>
                    <h6>SUPER HIGH "LOCKED IN" INTEREST RATES</h6>
                    <div className="thin-text">
                      that outperform at any other interest-bearing investment, especially powerful in an era of nearly zero interest rates. 
                      <br />
                      Enjoy government-guaranteed returns ranging from 16% to as high as 36%.
                    </div>
                    <a href="" className='mt-2 learn-btn'>Learn more</a>
                  </li>
                </ul>
              </div>

              <div className="call-to-action-saction mt-5">
                <button className='glowing_btn  m-auto' id='serving_btn'>
                    <p>Get your first Government Secured Self-Servicing Loan</p>
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
            </div>

            <div className="join-to-wish p-5">
              <h1>Join the waitlist</h1>
              <p>Get your early access</p>
              <div className="sing-up-form">
                <form action="">
                  <div className="sign-up-box">
                    <input type="email" placeholder='Email Address' />
                    <button className='btn-1'>Sign up</button>
                  </div>
                </form>
              </div>
            </div>
            



          </div>


          {/* Main Footer */}
          <Footer 
            logo_url = {logo}
            delfil_icon = {delfil_icon}
          />

        </div>
      </div>

    </>
  )
}

export default App
