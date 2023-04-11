import React, {useState} from 'react';
import {Box, ImageList, ImageListItem, Modal} from '@mui/material'

const structures = [];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

function importAll(r) {
  r.keys().forEach((key) => structures.push(key));
}

importAll(require.context('./lichenStructures', false, /\.(png|jpe?g|svg|gif)$/));

export default function GalleryContent({hidden}) {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const handleOpen = (src) => {
        setSelectedImg({src, width: null, height: null});
        setOpen(true);
    }

    const handleClose = () => { 
        setSelectedImg(null);
        setOpen(false);
    }

    const handleImageLoad = (event) => {
        setSelectedImg((prev) => ({
          ...prev,
          width: event.target.width,
          height: event.target.height,
        }));
      };

    return (

        <Box hidden={hidden}>
            <ImageList variant="masonry" cols={3} gap={15}>
                {structures.map((image) => (
                    <ImageListItem key={image} onClick={() => handleOpen(image)}>
                        <img
                            src={`./lichenStructures/${image}`}
                            alt={`./lichenStructures/${image}`}
                            border={'1px'}
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
                <Box sx={{
                    ...style,
                    maxWidth: '95%',
                    maxHeight: '95%',
                    overflow: 'auto',
                }}>
                    <img
                        src={`./lichenStructures/${selectedImg.src}`}
                        onLoad={handleImageLoad}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                        }}
                    />
                </Box>
            </Modal>
            )}
        </Box>
    );
}