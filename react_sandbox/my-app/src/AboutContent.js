import {Box, Grid, Typography, Link} from '@mui/material';
import Caloplaca_trachyphylla1 from './lichenPhotographs/Caloplaca_trachyphylla1.jpg';
import Bunodophoron_melanocarpum2 from './lichenPhotographs/Bunodophoron_melanocarpum2.jpg';


const body2 = 'The FS has been collecting lichen data since the 1970s, with nationwide emphasis beginning in 1993. Since 1993, the National Forest System (NFS) and the Forest Inventory and Analysis Program (FIA) have collected lichen data on forestland. This database unites data collected by the USFS as well as partnering agencies and researchers, including data on both community composition and elemental analysis of lichen tissue. As of November 13, 2017, the database houses 171,489 lichen records and 15,383 lichen tissue samples collected on 10,623 plots and is usually updated annually to include new data and add new functionality. Most data focus on macrolichen (non-crustose) epiphytes in forest habitats although some data on ground, rock, and crustose lichens are available.';

const body3 = `NFS: The USFS Air Program conducts lichen surveys and collects lichens for elemental analysis on sites within the national forest system. Because Wilderness air quality is more stringently protected under the Clean Air Act, much of the focus is on Wilderness. Actual plot coordinates and elevations are provided for surveys on non-FIA plots. On FIA-plots, fuzzed coordinates are provided (see FIA below). Overall, the Air Program uses lichens to tell us how air pollution and climate are affecting the forested landscape and how we are doing as managers in mitigating changing atmospheric conditions and pollution. Most of the lichen data is accompanied by measured and modeled site data related to forest structure and composition, physical and ecological characteristics, climate, and air quality. For questions please contact Linda Geiser.

FIA: The FIA Program collects forest measurements on a systematic grid across the United States. Most FIA lichen surveys can be linked to data on trees, invasive plant species, understory vegetation, down woody material and soils (http://apps.fs.fed.us/fiadb-downloads/datamart.html). Plots include both public and private land so geographic coordinates for FIA plots are "fuzzed" to protect landowner privacy. Most coordinates fall within 0.5 mi of the actual plot location. For questions please contact Sarah Jovan.`;

const databaseQueriesFeature = 'Query the USFS database of lichen species by geographic area or sensitivity class; retrieve lichen elemental analysis data';

const elementalAnalysisFeature = 'Aids for interpreting lichen data'

const reportsFeature = 'Full articles, citations and PowerPoint presentations pertaining to lichens and air quality monitoring in national forests and parks'

const imagesFeature = 'Get a drawing or photograph of a lichen, submit your own images'

export default function HomeContent({hidden}) {
    return (
        <Box hidden={hidden}>
            <Grid container direction='column' spacing={5}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{height: '200px'}}><img src={Bunodophoron_melanocarpum2} width={'auto'} height={'250px'}/></Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='h5'>Overview</Typography>
                            <Typography variant='body1'>{body2}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={2} alignItems={'center'}>
                        <Grid item xs={8}>
                            <Typography variant='h5'>Contributors</Typography>
                            <Typography variant='body1'>{body3}</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Box sx={{height: '200px'}}><img src={Caloplaca_trachyphylla1} width={'auto'} height={'250px'}/></Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>Website Features</Typography>
                    <Grid container spacing={2} direction='row'>
                        <Grid item xs={6}>
                            <Grid container spacing={2} direction='column'>
                                <Grid item>
                                    <Typography variant='h6'>Database Queries</Typography>
                                    <Typography>{databaseQueriesFeature}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>Elemental Analysis Thresholds & Sensitivity Ratings</Typography>
                                    <Typography>{elementalAnalysisFeature}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>Reports, Publications & Protocols</Typography>
                                    <Typography>{reportsFeature}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>Lichen Images</Typography>
                                    <Typography>{imagesFeature}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2} direction='column'>
                            <Grid item>
                                    <Typography variant='h6'>Database Queries</Typography>
                                    <Typography>{databaseQueriesFeature}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>Elemental Analysis Thresholds & Sensitivity Ratings</Typography>
                                    <Typography>{elementalAnalysisFeature}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>Reports, Publications & Protocols</Typography>
                                    <Typography>{reportsFeature}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>Lichen Images</Typography>
                                    <Typography>{imagesFeature}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}