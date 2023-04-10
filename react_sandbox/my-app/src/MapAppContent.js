import React, { useState } from 'react';
import {Box} from '@mui/material'

export default function MapAppContent({hidden}) {

    return (
        <Box hidden={hidden}>
            <iframe height="600" width="100%" frameborder="no" src="https://usfs-capstone-2023.shinyapps.io/figure1-shiny-app/"> </iframe>
        </Box>
    );
}