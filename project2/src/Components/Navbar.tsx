
import '../css/Navbar.css'
// import { Heading,Box } from '@chakra-ui/react'

const Navbar= () => {
  return (
    <div className="navbar">
      {/* Top line */}
      <div className='navbar_t'>
      <div className='navbar_top'>
        <span className='navbar_top_right'>
          <ul className='navbar_top_ul'>
            <li >
              <span className='navbar_social_icon'>Follow us on Social </span>
              <ul className='navbar_top_strip'>
                <li>
                  <a href='/'>
                    <span className='navbar_top_strip_icon'>
                      <img src="https://incometaxindia.gov.in/_layouts/15/images/dit/strip-twitter-ic.png" />
                    </span>
                    @IncomeTaxIndia 
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <span className='navbar_top_strip_icon'>
                      <img src="https://incometaxindia.gov.in/_layouts/15/images/dit/strip-faqcebook-ic.png" />
                    </span>
                    @IncomeTaxIndiaOfficial 
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <span className='navbar_top_strip_icon'>
                      <img src="https://incometaxindia.gov.in/_layouts/15/images/dit/strip-instagram-1.png" />
                    </span>
                    @IncomeTaxIndia.Official 
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <span className='navbar_top_strip_icon'>
                      <img src="https://incometaxindia.gov.in/_layouts/15/images/dit/strip-youtube-1.png" />
                    </span>
                    Income Tax India 
                  </a>
                </li>
                <li className='navbar_top_strip_update'style={{borderRight:"none"}}>to stay updated</li>
              </ul>
            </li>
          </ul>
        </span>
      </div>
      </div>
      {/* Ḷogo  */}
      <div className='logo'>
        <img src="https://incometaxindia.gov.in/PublishingImages/income-tax-logo.png?v=612" alt="" />
      </div>
    </div>
  )
}

export default Navbar
