import { Box, Grid, Typography, Card, CardActions, CardContent, Button, Paper, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import lichenland from './images/lichenland-removedbg.png';
import lichenpublications from './images/lichenpublications-removedbg.png';
import analysisTool from './images/analysisTool.png';
import './App';



import GlobalStyles from "./GlobalStyles";

import ImageSlider from "./ImageSlider";
import image1 from './images/pic-1.jpg';
import image2 from './images/pic-2.jpg';
import image3 from './images/pic-3.jpg';
import image4 from './images/Sticta_limbata.png';
import image5 from './images/Usena_sphacelata.png';
//TODO: Make all of the images the same size and format 



const body1 = 'Welcome to the web pages of the USDA Forest Service National Lichens and Air Quality Database and Clearinghouse. Across the US, lichen biomonitoring is helping federal land managers meet federal and agency responsibilities to detect, map, evaluate trends, and assess the ecological impacts of air pollutants. On these pages you can access lichen data from the National Forest system and the Forest Inventory and Analysis Programs and find out more about lichens and lichen monitoring in general.';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function HomeContent({hidden, onButtonClick}) {
    // const [currPage, setCurrPage] = useState()

    return (
        <Grid hidden={hidden} className="homeGrid" sx={{widows: '100%'}}>
            {/* Thisi is where the image slider is styled to fit screen */}
            <Box style={{marginTop: '-40px', width: '126%', marginLeft: '-179px'}}> 
            <GlobalStyles />
                <div>
                    <ImageSlider images={[image1, image2, image3, image4, image5]}>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "#fff",
                        }}
                    >
                        <Typography sx={{}} variant='h1'>Welcome</Typography>
                        <Typography sx={{}} variant='subtitle1'>{body1}</Typography>
                        <Button 
                        size="medium"
                        variant='contained'
                        sx={{marginTop: '12px'}}
                        onClick={(event) => onButtonClick(event, "contact")}
                    >
                        About Us
                    </Button>
                    </div>
                    </ImageSlider>
                </div>
                </Box>
            {/* <AliceCarousel autoPlay autoPlayInterval="3000" className='carousel'>
                <img src={imageOne} className="sliderimg"/>
                <img src={imageTwo} className="sliderimg"/>
            </AliceCarousel> */}
            {/* <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0'}} className='welcomeCard' >
                <CardContent>
                    <Typography sx={{ fontSize: 34}} color="text.secondary" gutterBottom textAlign='center'>
                        Welcome
                    </Typography>
                    <Typography variant="h5" component="div" textAlign='center'>
                    {body1}
                    </Typography>
                </CardContent>
                <CardActions style={{alignContent: 'center', justifyContent: 'center'}}>
                    <Button 
                        size="medium"
                        variant='contained'
                        onClick={() => {
                            console.log("Clicked")
                        }}
                    >
                        About Us
                    </Button>
                </CardActions>
            </Card> */}
            <Box style={{ width: '100%'}}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    style={{marginTop: '50px', justifyContent: 'space-around', }}
                >

                    <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', 
                        alignContent: 'center', backgroundColor: '#fdfdaf'}}>
                        <CardContent>
                            <Typography sx={{fontWeight: 'bold'}} textAlign='center'>Reports and Publications</Typography>
                            <img src={lichenpublications} style={{width: '7cm', marginTop:'20px'}} />
                        </CardContent>
                        <CardActions style={{alignContent: 'center', justifyContent: 'center'}}>
                            <Button 
                                size="medium"
                                variant='contained'
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                
                            >
                                Start Reading
                            </Button>
                        </CardActions   >
                    </Card>
                    <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fdfdaf'}}>
                        <CardContent>
                            <Typography sx={{fontWeight: 'bold'}} textAlign='center'>Analysis Tools</Typography>
                            <Typography textAlign='center'>to visualize air quality and lichen trends</Typography>
                            <img src={analysisTool} style={{width: '7cm', marginLeft: '11px'}}/> {/* Change image here */}
                        </CardContent>
                        <CardActions style={{alignContent: 'end', justifyContent: 'center'}}>
                            <Button 
                                size="medium"
                                variant='contained'
                                onClick={(event) => 
                                    onButtonClick(event, "dbQueries")
                                }
                            >
                                Analyze Now
                            </Button>
                        </CardActions>
                    </Card>
                    <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fdfdaf'}}>
                        <CardContent sx={{alignContent: 'center', justifyContent: 'center'}}>
                            <Typography sx={{fontWeight: 'bold'}} textAlign='center'>Resources</Typography>
                            <Typography textAlign='center'>for more lichen fun!</Typography>  
                            <img src={lichenland} style={{width: '7cm', marginTop:'20px'}} />
                        </CardContent>
                        <CardActions style={{alignContent: 'end', justifyContent: 'center'}}>
                            <Button 
                                size="medium"
                                variant='contained'
                                onClick={() => {
                                    console.log('clicked');
                                }}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Stack>
            </Box>
        </Grid>
        

        // <Box hidden={hidden}>
        //     <Grid container direction='column' spacing={2}>
        //         <Grid item>
        //             <Grid container direction='row' spacing={2}>
        //                 <Grid item xs={9}>
        //                     <Typography variant='h5'>Welcome</Typography>
        //                     <Typography variant='body1'>{body1}</Typography>
        //                 </Grid>
        //                 <Grid item xs={3}>
        //                     <Box sx={{height: '200px', background: 'black', color: 'white'}}>Image here</Box>
        //                 </Grid>
        //             </Grid>
        //         </Grid>
                // {/* <Grid item>
                //     <Grid container spacing={2}>
                //         <Grid item xs={3}>
                //             <Box sx={{height: '200px', background: 'black', color: 'white'}}>Image here</Box>
                //         </Grid>
                //         <Grid item xs={9}>
                //             <Typography variant='h5'>Overview</Typography>
                //             <Typography variant='body1'>{body2}</Typography>
                //         </Grid>
                //     </Grid>
                // </Grid>
                // <Grid item>
                //     <Grid container spacing={2}>
                //         <Grid item xs={9}>
                //             <Typography variant='h5'>Contributors</Typography>
                //             <Typography variant='body1'>{body3}</Typography>
                //         </Grid>
                //         <Grid item xs={3}>
                //             <Box sx={{height: '200px', background: 'black', color: 'white'}}>Image here</Box>
                //         </Grid>
                //     </Grid>
                // </Grid>
                // <Grid item>
                //     <Typography variant='h5'>Website Features</Typography>
                //     <Grid container spacing={2} direction='row'>
                //         <Grid item xs={6}>
                //             <Grid container spacing={2} direction='column'>
                //                 <Grid item>
                //                     <Typography variant='h6'>Database Queries</Typography>
                //                     <Typography>{databaseQueriesFeature}</Typography>
                //                 </Grid>
                //                 <Grid item>
                //                     <Typography variant='h6'>Elemental Analysis Thresholds & Sensitivity Ratings</Typography>
                //                     <Typography>{elementalAnalysisFeature}</Typography>
                //                 </Grid>
                //                 <Grid item>
                //                     <Typography variant='h6'>Reports, Publications & Protocols</Typography>
                //                     <Typography>{reportsFeature}</Typography>
                //                 </Grid>
                //                 <Grid item>
                //                     <Typography variant='h6'>Lichen Images</Typography>
                //                     <Typography>{imagesFeature}</Typography>
                //                 </Grid>
                //             </Grid>
                //         </Grid>
                //         <Grid item xs={6}>
                //             <Grid container spacing={2} direction='column'>
                //             <Grid item>
                //                     <Typography variant='h6'>Database Queries</Typography>
                //                     <Typography>{databaseQueriesFeature}</Typography>
                //                 </Grid>
                //                 <Grid item>
                //                     <Typography variant='h6'>Elemental Analysis Thresholds & Sensitivity Ratings</Typography>
                //                     <Typography>{elementalAnalysisFeature}</Typography>
                //                 </Grid>
                //                 <Grid item>
                //                     <Typography variant='h6'>Reports, Publications & Protocols</Typography>
                //                     <Typography>{reportsFeature}</Typography>
                //                 </Grid>
                //                 <Grid item>
                //                     <Typography variant='h6'>Lichen Images</Typography>
                //                     <Typography>{imagesFeature}</Typography>
                //                 </Grid>
                //             </Grid>
                //         </Grid>
                //     </Grid>
                // </Grid> */}
        //     </Grid>
        // </Box>
    );
}
