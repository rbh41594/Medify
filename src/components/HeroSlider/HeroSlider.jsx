import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/home.webp'
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
    return (
        <Swiper>
            <SwiperSlide>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}  
                    spacing={6} 
                    alignItems="center"  
                    paddingTop={2} 
                >
                    <Box>
                        <Typography variant='h3' component='h1'>
                            Skip the travel! Find Online
                        </Typography>
                        <Typography variant='h1' component='h1' marginBottom={1}>  
                            Medical <span style={{ color: '#2AA7FF' }}>Centers</span>
                        </Typography>
                        <Typography color="#5C6169" fontSize={{ md: 20 }} marginBottom={3}> 
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>
                        <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation>
                                Find Centers
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        component='img'
                        src={img}
                        sx={{
                            width: { xs: '100%', md: '50%' },  
                        }}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    );
}
