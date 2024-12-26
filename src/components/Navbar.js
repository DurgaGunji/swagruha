import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import design1 from '../assets/design1.png'; // Center design image
import Categories from './Categories';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#FDF4E9',
        padding: '20px',
        height: '100%',
       
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${design1})`,
         // backgroundSize: { xs: 'cover', sm: 'contain' }, // Cover for mobile, contain for larger screens
         // backgroundPosition: { xs: 'center', sm: 'top' }, // Center the image for mobile
         backgroundSize: 'center', 
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          minWidth: '100%',
          minHeight: { xs: '150px', sm: '200px' }, // Adjust height for mobile
          //padding: { xs: '20px 10px', sm: '50px 40px' }, // Adjust padding for mobile
         // height: { xs: '150px', sm: '200px' }, // Adjust the height to display half the image
          padding: { xs: '20px 10px', sm: '' },
          marginBottom: '-100px',
         
        
        }}
      >
        {/* Row of Images with Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Column for mobile, row for larger screens
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '100%',
            width: '100%',
            gap: { xs: '20px', sm: '0' }, // Add spacing for mobile view
          }}
        >
          {/* First Image with Text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: { sm: '20px' }, // Margin only for larger screens
            }}
          >
            <img
              src={img1}
              alt="Image 1"
              style={{
                width: '100px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ color: '#4A535D' }}>
                High Quality
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A535D' }}>
                Lorem ipsum dolor sit amet
              </Typography>
            </Box>
          </Box>

          {/* Second Image with Text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: { sm: '20px' },
            }}
          >
            <img
              src={img2}
              alt="Image 2"
              style={{
                width: '100px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ color: '#4A535D' }}>
                100% Vegeterian
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A535D' }}>
                Praesent tincidunt
              </Typography>
            </Box>
          </Box>

          {/* Third Image with Text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: { sm: '15px' },
            }}
          >
            <img
              src={img3}
              alt="Image 3"
              style={{
                width: '100px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ color: '#4A535D' }}>
                Hygenic
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A535D' }}>
                Vivamus suscipit tortor
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Categories />
    </AppBar>
  );
};

export default Navbar;
