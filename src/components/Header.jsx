import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image'; // Import next/image
import Banner from '../app/image/Banner.png'; // Adjusted import path

function Header() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Header Photo */}
      <div style={{ position: 'relative', width: '100%', height: '279px', marginTop:'2rem' }}>
      <Image src={Banner} layout="fill" objectPosition="center" alt= "Banner" />
      </div>
      {/* Overlay Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, transparent 100%)',
          marginTop: '2rem',
          borderRadius: '20px 2% 8% 16%',
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          top: '48%',
          left: '18%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{fontSize: '36px'}}>
        Hi! 👋 James Doe
        </Typography>
        <Typography variant="h6" gutterBottom sx={{fontSize: '16px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Button color="inherit" 
            sx={{
              backgroundColor: '#7B5AFF',
              padding: '6.4px, 15px, 6.4px, 15px',
              borderRadius: '999px', 
              width: '166px',
              marginTop: '1.8rem',
              height: '54px'
            }}
          >Add Check in</Button>
      </Box>
    </div>
  );
}

export default Header;
