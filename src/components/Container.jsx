import { Typography, Box, IconButton, Avatar, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Img1 from '../app/image/Img1.png';
import Img2 from '../app/image/Img2.png';
import Img3 from '../app/image/Img3.png';
import Img4 from '../app/image/Img4.png';

function Container() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 2 }}>
        <Typography variant="h5">Add Checkins</Typography>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </Box>
      < Box sx={{ display: 'flex', gap: '1.4rem', alignItems: 'center', px: 2, pb: 2 }}>
      <Card sx={{ borderRadius: '10px', position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '275px' }}>
        <Box sx={{ position: 'relative', width: '217px', height: '170px'}}>
          <Image src={Img1} alt="Chevrolet" />
          {/* Checked-in badge */}
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '-36px',
              backgroundColor: '#7B5AFF',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '999px',
              fontSize: '14px',
            }}
          >
            Checked In
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <CardContent sx={{ p: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Checkin Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2-4-2024
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem'}}>
              {/* Avatar */}
              <Avatar alt="Masuma Jaffery" src="/static/images/avatar/3.jpg" />
              {/* Name */}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                Masuma Jaffery
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ borderRadius: '10px', position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '275px' }}>
        <Box sx={{ position: 'relative', width: '217px', height: '170px'}}>
          <Image src={Img2} />
          {/* Checked-in badge */}
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '-36px',
              backgroundColor: '#7B5AFF',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '999px',
              fontSize: '14px',
            }}
          >
            Checked In
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <CardContent sx={{ p: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Checkin Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2-4-2024
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem'}}>
              {/* Avatar */}
              <Avatar alt="Masuma Jaffery" src="/static/images/avatar/3.jpg" />
              {/* Name */}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                Masuma Jaffery
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ borderRadius: '10px', position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '275px' }}>
        <Box sx={{ position: 'relative', width: '217px', height: '170px'}}>
          <Image src={Img3} />
          {/* Checked-in badge */}
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '-36px',
              backgroundColor: '#7B5AFF',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '999px',
              fontSize: '14px',
            }}
          >
            Checked In
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <CardContent sx={{ p: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Checkin Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2-4-2024
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem'}}>
              {/* Avatar */}
              <Avatar alt="Masuma Jaffery" src="/static/images/avatar/3.jpg" />
              {/* Name */}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                Masuma Jaffery
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ borderRadius: '10px', position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '275px' }}>
        <Box sx={{ position: 'relative', width: '217px', height: '170px'}}>
          <Image src={Img4} />
          {/* Checked-in badge */}
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '-36px',
              backgroundColor: '#7B5AFF',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '999px',
              fontSize: '14px',
            }}
          >
            Checked In
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <CardContent sx={{ p: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Checkin Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2-4-2024
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem'}}>
              {/* Avatar */}
              <Avatar alt="Masuma Jaffery" src="/static/images/avatar/3.jpg" />
              {/* Name */}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                Masuma Jaffery
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      </Box>
      {/* Add more cards here */}
    </Box>
  );
}

export default Container;
