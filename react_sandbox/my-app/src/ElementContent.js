import {Box, Grid, Typography, Link} from '@mui/material';

const body1 = "Welcome to the web pages of the USDA Forest Service National Lichens and Air Quality Database and Clearinghouse." +
    "Across the US, lichen biomonitoring is helping federal land managers meet federal and agency responsibilities to detect, " + 
    "map, evaluate trends, and assess the ecological impacts of air pollutants. On these pages you can access lichen data from the National " + 
    "Forest system and the " + 
    <Link href="https://www.fia.fs.usda.gov/" underline='hover'>Inventory and Analysis Programs</Link> +
    " and find out more about lichens and lichen monitoring in general.";

    //"Forest Inventory and Analysis Programs" is a clickable hyperlink

const body2 = "The FS has been collecting lichen data since the 1970s, with nationwide emphasis beginning in 1993. " + 
    "Since 1993, the National Forest System (NFS) and the Forest Inventory and Analysis Program (FIA) have collected lichen " + 
    "data on forestland. This database unites data collected by the USFS as well as partnering agencies and researchers, " + 
    "including data on both community composition and elemental analysis of lichen tissue. As of November 13, 2017, the database " + 
    "houses 171,489 lichen records and 15,383 lichen tissue samples collected on 10,623 plots and is usually updated annually " + 
    "to include new data and add new functionality. Most data focus on macrolichen (non-crustose) epiphytes in forest habitats " + 
    "although some data on ground, rock, and crustose lichens are available.";

const body3 = "The USFS Air Program conducts lichen surveys and collects lichens for elemental analysis on sites within " + 
    "the national forest system. Because Wilderness air quality is more stringently protected under the Clean Air Act, much of" + 
    " the focus is on Wilderness. Actual plot coordinates and elevations are provided for surveys on non-FIA plots. On FIA-plots, " + 
    "fuzzed coordinates are provided (see FIA below). Overall, the Air Program uses lichens to tell us how air pollution and " + 
    "climate are affecting the forested landscape and how we are doing as managers in mitigating changing atmospheric conditions " + 
    "and pollution. Most of the lichen data is accompanied by measured and modeled site data related to forest structure and " + 
    "composition, physical and ecological characteristics, climate, and air quality. For questions please contact Linda Geiser.";

    //"Linda Geiser" is a clickable hyperlink

const body4 = "The FIA Program collects forest measurements on a systematic grid across the United States. Most FIA lichen " + 
    "surveys can be linked to data on trees, invasive plant species, understory vegetation, down woody material and soils " + 
    "(http://apps.fs.fed.us/fiadb-downloads/datamart.html). Plots include both public and private land so geographic coordinates" + 
    " for FIA plots are \"fuzzed\" to protect landowner privacy. Most coordinates fall within 0.5 mi of the actual plot " + 
    "location. For questions please contact Sarah Jovan.";

    //"Sarah Jovan" is a clickable hyperlink

export default function ElementContent({hidden}) {
    return (
        <Box hidden={hidden}>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Grid container direction='row' spacing={2}>
                        <Grid item xs={9}>
                            <Typography variant='h5'>Welcome</Typography>
                            <Typography variant='body1'>{body1}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{height: '200px', background: 'black', color: 'white'}}>Image here</Box>   
                        </Grid>
                        <Grid>
                            <Typography variant='h5'>Overview</Typography>
                            <Typography variant='body1'>{body2}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='h5'>Data Contributors</Typography>
                            <Typography variant='body1'>{body3}</Typography>
                            <Typography variant="body2">{body4}</Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}