import React, {useState} from 'react';
import {Box, Typography, Grid, Stack, Paper, Card, CardContent, CardActions, Container, Button} from '@mui/material';

export default function DBQueriesContent({hidden, onButtonClick}) {
    const lichenPlotBody = `Query the plot database to find out where lichen surveys have been conducted and to get information about physical parameters, climate, vegetation and other environmental conditions measured or modeled for these sites.`

    const elementalAnalysisBody = `Query the elemental analysis database to find out what elemental analyses have been conducted in a geographic area of your choice, and what species were measured. Use the draft thresholds page to determine if the values observed were within ranges expected for clean sites.`

    const elementThresholdBody = `Query lichen species and element data for Region 6 to retrieve element threshold (percent of threshold) values for that species and element, from any plot.`

    const lichenSpeciesBody = `Query the lichen community database to find out what lichens have been observed in a geographic area and whether the communities at a given location contain species known to be sensitive to air pollution.`

    return (
        <Box hidden={hidden}>
            <Typography variant='h5'>Explanation of Database Queries</Typography><br/>
            <Grid container spacing={3} justifyContent={"space-around"}>
                <Grid item>
                    <Card raised={true}>
                        <CardContent sx={{textAlign: "center"}}>
                            <img src={'./images/analysisTool.png'} width={450} height={250} onClick={(event) => onButtonClick(event, "mapApp")} style={{cursor: 'pointer'}}/>
                            <Typography>
                                Explore plot data using our map app!
                            </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: "center"}}>
                            <Button
                                size="medium"
                                variant='contained'
                                onClick={(event) =>
                                    onButtonClick(event, "mapApp")
                                }
                            >
                                Plot Now
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card raised={true}>
                        <CardContent sx={{textAlign: "center"}}>
                            <img src={'./images/databaseExplorationTool.jpg'} width={450} height={250} onClick={(event) => onButtonClick(event, "explorationTool")} style={{cursor: 'pointer'}}/>
                            <Typography>
                                Explore and analyze using our Database Exploration Tool!
                            </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: "center"}}>
                            <Button
                                size="medium"
                                variant='contained'
                                onClick={(event) =>
                                    onButtonClick(event, "explorationTool")
                                }
                            >
                                Explore Now
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid><br/>

            <Grid container spacing={3}>
                <Grid item>
                    <Typography variant='h6'>Lichen Plot Data</Typography>
                    <Typography>{lichenPlotBody}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Elemental Analysis Data</Typography>
                    <Typography>{elementalAnalysisBody}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Element Threshold Data</Typography>
                    <Typography>{elementThresholdBody}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Lichen Species Data</Typography>
                    <Typography>{lichenSpeciesBody}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}