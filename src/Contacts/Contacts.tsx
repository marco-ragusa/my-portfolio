import './Contacts.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Contacts = (prop: any) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
                fontFamily: 'Monospace',
            }}
            id="Contacts"
            ref={prop.elm}
        >
            <Container maxWidth="xs">
                <Typography
                    component='h4'
                    variant='h4'
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Contacts
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    <div id="outer">  
                        <div id="inner">
                            <table>
                                <td>
                                    <tr>Social:</tr>
                                    <tr>E-Mail:</tr>
                                </td>
                                <td>
                                    <tr><a href="https://www.linkedin.com/in/mragusa-1996/" target="_blank" rel="noreferrer noopener">linkedin.com/in/mragusa-1996/</a></tr>
                                    <tr><a href="mailto:marco.ragusa.1996@gmail.com" target="_blank" rel="noreferrer noopener">marco.ragusa.1996@gmail.com</a></tr>
                                </td>
                            </table>
                        </div>
                    </div>
                </Typography>
            </Container>
        </Box>
    );
};