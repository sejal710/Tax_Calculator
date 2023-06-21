import React from 'react'
import '../css/Navbar.css'
import { Heading,Box } from '@chakra-ui/react'

interface NavabarProps {
  setOpen : (value:boolean) => void;
  open:Boolean;
}

const Navbar:React.FC<NavabarProps> = ({setOpen,open}) => {
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

      {/* Last div */}
      <Box className="last" display="flex" border={'1px solid #ccc'}>
      <Box as="div" _hover={{ color: 'blue.500',bg:"#ccc" }} w='50%' textAlign={'center'} bg={open ? "#ccc":"#fff"} cursor={'pointer'} onClick={() => setOpen(true)}>
      <Heading  size="40px" fontWeight="bold">Home Calculator</Heading>
    </Box>
    <Box as="div" _hover={{ color: 'blue.500' ,bg:"#ccc"}} w='50%' textAlign={'center'} bg={!open ? "#ccc":"#fff"} cursor={'pointer'} onClick={() => setOpen(false)}>
      <Heading  size="40px" fontWeight="bold" mb={4}>Advance Calculator</Heading>
    </Box>
  </Box>

    </div>
  )
}

export default Navbar
