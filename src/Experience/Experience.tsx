import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
  

export const Experience = (prop: any) => {
    const content = (
        <div>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
      );

    return(
        <Box
        sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
        id="Experiences"
        ref={prop.elm}
        >
            <Typography
                component='h4'
                variant='h4'
                align="center"
                color="text.primary"
                gutterBottom
            >
                Experiences
            </Typography>
            <Container maxWidth="md">

                <Divider textAlign="left">
                    <Chip color="primary" label="SKY" style={{minWidth: '75px'}}/>
                </Divider>

                <Typography variant="h6" align="left" color="text.secondary">
                DevOps
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                05/2022 - NOW
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="left" color="text.secondary" paragraph>
                    {content}
                    </Typography>
                </Container>

                <Divider textAlign="left">
                    <Chip color="primary" label="WIIT" style={{minWidth: '75px'}}/>
                </Divider>

                <Typography variant="h6" align="left" color="text.secondary">
                Cloud Engegnering
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                05/2021 - 05/2022
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="left" color="text.secondary" paragraph>
                    {content}
                    </Typography>
                </Container>

                <Divider textAlign="left">
                    <Chip color="primary" label="SORINT" style={{minWidth: '75px'}}/>
                </Divider>

                <Typography variant="h6" align="left" color="text.secondary">
                DevOps
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                04/2020 - 05/2021
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="left" color="text.secondary" paragraph>
                    {content}
                    </Typography>
                </Container>

                <Typography variant="h6" align="left" color="text.secondary">
                Technical Support
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                04/2019 - 04/2020
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="left" color="text.secondary" paragraph>
                    {content}
                    </Typography>
                </Container>

                <Typography variant="h6" align="left" color="text.secondary">
                Computer Customer Support
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                05/2017 - 04/2019
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="left" color="text.secondary" paragraph>
                    {content}
                    </Typography>
                </Container>

            </Container>
        </Box>
    )
}