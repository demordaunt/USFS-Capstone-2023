import { Box, Grid, Typography, Card, CardActions, CardContent, Button, Paper, Stack, Divider } from '@mui/material';
import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "./images/Sticta_limbata.png", width: 800, height: 600 },
    { src: "./images/Usena_sphacelata.png", width: 1600, height: 900 },
];

export default function GalleryContent({hidden}) {
    return (
        <Grid hidden={hidden} sx={{widows: '100%'}}>
            <PhotoAlbum layout="masonry" photos={photos} />
        </Grid>
    );
}