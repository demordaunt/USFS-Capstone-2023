import React, { useState } from 'react';
import {Box} from '@mui/material'

export default function ExplorationTool({hidden}) {

    return (
        <Box hidden={hidden}>
            <iframe height="650" width="100%" frameborder="no" src="https://usfs-capstone-2023.shinyapps.io/figure3-shiny-app/"> </iframe>
        </Box>
    );
}