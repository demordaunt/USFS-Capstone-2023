import React, {useState} from 'react';
import {Box, Typography, ImageList, ImageListItem, Modal, Backdrop} from '@mui/material'

const images = [];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

function importAll(r) {
  r.keys().forEach((key) => images.push(key));
}

importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default function GalleryContent({hidden}) {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const handleOpen = (src) => {
        setSelectedImg(src);
        setOpen(true);
    }

    const handleClose = () => { 
        setSelectedImg(null);
        setOpen(false);
    }

    return (

        <Box hidden={hidden}>
            <ImageList variant="masonry" cols={3} gap={10}>
                {images.map((testImg) => (
                    <ImageListItem key={testImg} onClick={() => handleOpen(testImg)}>
                        <img
                            src={`./images/${testImg}`}
                            alt={`./images/${testImg}`}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {selectedImg && (<Modal
                open={open}
                onClose={handleClose}
                slotProps={{
                    backdrop: {
                        onClick: handleClose,
                    },
                }}
            >
                <Box sx={style}>
                    <img
                        src={`./images/${selectedImg}`}
                        width={'100%'}
                        height={'100%'}
                    />
                </Box>
            </Modal>
            )}
        </Box>
    );
}