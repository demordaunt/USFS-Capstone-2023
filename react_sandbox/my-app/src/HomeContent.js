import { Box, Grid, Typography, Card, CardActions, CardContent, Button, Paper, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import imageOne from './images/Sticta_limbata.png';
import imageTwo from './images/Usena_sphacelata.png';
import lichenland from './images/lichenland.png';
import lichenpublications from './images/lichenpublications.png';
import analysisTool from './images/analysisTool.png';
import './App';



const body1 = 'Welcome to the web pages of the USDA Forest Service National Lichens and Air Quality Database and Clearinghouse. Across the US, lichen biomonitoring is helping federal land managers meet federal and agency responsibilities to detect, map, evaluate trends, and assess the ecological impacts of air pollutants. On these pages you can access lichen data from the National Forest system and the Forest Inventory and Analysis Programs and find out more about lichens and lichen monitoring in general.';

// const body2 = 'The FS has been collecting lichen data since the 1970s, with nationwide emphasis beginning in 1993. Since 1993, the National Forest System (NFS) and the Forest Inventory and Analysis Program (FIA) have collected lichen data on forestland. This database unites data collected by the USFS as well as partnering agencies and researchers, including data on both community composition and elemental analysis of lichen tissue. As of November 13, 2017, the database houses 171,489 lichen records and 15,383 lichen tissue samples collected on 10,623 plots and is usually updated annually to include new data and add new functionality. Most data focus on macrolichen (non-crustose) epiphytes in forest habitats although some data on ground, rock, and crustose lichens are available.';

// const body3 = `NFS: The USFS Air Program conducts lichen surveys and collects lichens for elemental analysis on sites within the national forest system. Because Wilderness air quality is more stringently protected under the Clean Air Act, much of the focus is on Wilderness. Actual plot coordinates and elevations are provided for surveys on non-FIA plots. On FIA-plots, fuzzed coordinates are provided (see FIA below). Overall, the Air Program uses lichens to tell us how air pollution and climate are affecting the forested landscape and how we are doing as managers in mitigating changing atmospheric conditions and pollution. Most of the lichen data is accompanied by measured and modeled site data related to forest structure and composition, physical and ecological characteristics, climate, and air quality. For questions please contact Linda Geiser.

// FIA: The FIA Program collects forest measurements on a systematic grid across the United States. Most FIA lichen surveys can be linked to data on trees, invasive plant species, understory vegetation, down woody material and soils (http://apps.fs.fed.us/fiadb-downloads/datamart.html). Plots include both public and private land so geographic coordinates for FIA plots are "fuzzed" to protect landowner privacy. Most coordinates fall within 0.5 mi of the actual plot location. For questions please contact Sarah Jovan.`;

// const databaseQueriesFeature = 'Query the USFS database of lichen species by geographic area or sensitivity class; retrieve lichen elemental analysis data';

// const elementalAnalysisFeature = 'Aids for interpreting lichen data'

// const reportsFeature = 'Full articles, citations and PowerPoint presentations pertaining to lichens and air quality monitoring in national forests and parks'

// const imagesFeature = 'Get a drawing or photograph of a lichen, submit your own images'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function HomeContent({hidden}) {
    return (
        <Grid hidden={hidden} className="homeGrid">
            <AliceCarousel autoPlay autoPlayInterval="3000" className='carousel'>
                <img src={imageOne} className="sliderimg"/>
                <img src={imageTwo} className="sliderimg"/>
            </AliceCarousel>
            <Card sx={{ minWidth: 275, backgroundColor: '#e0e0e0',}} className='welcomeCard'>
                <CardContent>
                    <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom>
                        Welcome
                    </Typography>
                    <Typography variant="h5" component="div">
                    {body1}
                    </Typography>
                </CardContent>
                <CardActions>
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
            </Card>
            <Box>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    style={{marginTop: '50px', justifyContent: 'space-around', }}
                >

                    <Card>
                        <CardContent>
                            <h4><b>Reports and Publications</b></h4>
                            <img src={lichenpublications} style={{width: '7cm'}} />
                        </CardContent>
                        <CardActions>
                            <Button 
                                size="medium"
                                variant='contained'
                                onClick={() => {
                                    console.log('clicked');
                                }}
                                
                            >
                                Start Reading
                            </Button>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardContent>
                            <h4><b>Analysis Tools</b></h4>
                            <p>to visualize air quality and lichen trends</p>
                            <img src={analysisTool} style={{width: '7cm'}} /> {/* Change image here */}
                        </CardContent>
                        <CardActions>
                            <Button 
                                size="medium"
                                variant='contained'
                                onClick={() => {
                                    console.log('clicked');
                                }}
                            >
                                Analyze Now
                            </Button>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardContent>
                            <h4><b>Resources</b></h4>
                            <p>for more lichen fun!</p>  
                            <img src={lichenland} style={{width: '7cm'}} />
                        </CardContent>
                        <CardActions>
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
