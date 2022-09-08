import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const About = (prop: any) => {
    const content = (
        <div>
          {`I am an open person, willing to have new experiences and always try to maintain good relations with colleagues.
          I enjoy learning new technologies and improving myself at work.
          I have a very mild and sociable nature.`}
        </div>
      );
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            id="About"
            ref={prop.elm}
        >
            <Container maxWidth="md">
                <Typography
                    component='h4'
                    variant='h4'
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    About me
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" paragraph>
                {content}
                </Typography>
            </Container>
        </Box>
    );
};