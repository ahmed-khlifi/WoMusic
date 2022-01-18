import React from 'react'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {Backdrop, Fade, Modal, Button, Box} from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export default function VideoPop(props) {

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><PlayCircleFilledWhiteIcon color="white" sx={{ fontSize: 70 }}/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
        }}
            >   
                <Fade in={open}>
                    <Box sx={style}>
                        <iframe  src={"https://www.youtube.com/embed/" + props.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
