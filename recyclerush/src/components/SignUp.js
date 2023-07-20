import { Box, IconButton, Button, Typography, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/LoginOutlined';

const theme = createTheme({ 
    palette: {
        background: {
            main: '#F6F3E7',
            secondary: '#FBF9F2',
            last: '#EDE9DA',
        },
        text: {
            main: '#000',
            sub: '#626161',
            third: '#C7683D'
        }
    }});


const SignUp = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: 'background.main',
                    width: '100%',
                    height: '1024px',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'background.secondary',
                        width: '585px',
                        height: '809px',
                        flexShrink: '0',
                        borderRadius: '50px',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        marginTop: '100px',
                        float: 'right',
                        marginRight: '100px',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'text.main',
                            fontSize: '55px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: '50px',
                        }}
                        >Get Started</Typography>
                    <Box 
                        sx={{
                            display: 'flex',
                            }}>
                        <Typography
                            sx={{
                                color: 'text.sub',
                                fontSize: '16px',
                                textAlign: 'left',
                                marginTop: '10px',
                                marginLeft: '25%'
                            }}
                            >Already Have An Account?</Typography>
                        <IconButton aria-label="login"
                            sx={{
                                color: 'text.third',
                                size: "large",
                            }}
                        >
                                <LoginIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                color: 'text.third',
                                fontSize: '16px',
                                textAlign: 'left',
                                marginTop: '10px',
                            }}>
                            Login
                        </Typography>
                    </Box>
                    <Box>
                        <TextField label="First Name" variant="outlined" 
                            sx={{
                                width: '300px',
                                marginLeft: '25%',
                                marginTop: '10%',
                                backgroundColor: 'background.last',
                            }}
                        />
                        <TextField label="Email Address" variant="outlined" 
                            sx={{
                                width: '300px',
                                marginLeft: '25%',
                                marginTop: '7%',
                                backgroundColor: 'background.last',
                            }}
                        />
                        <TextField label="Password" variant="outlined" 
                            sx={{
                                width: '300px',
                                marginLeft: '25%',
                                marginTop: '7%',
                                backgroundColor: 'background.last',
                            }}
                        />
                        <TextField label="Confirm Password" variant="outlined" 
                            sx={{
                                width: '300px',
                                marginLeft: '25%',
                                marginTop: '7%',
                                backgroundColor: 'background.last',
                            }}
                        />
                        <Button  
                            sx={{
                                backgroundColor: 'rgba(237, 233, 218, 0.70)',
                                width: '300px',
                                height: '66px',
                                borderRadius: '25px',
                                marginLeft: '25%',
                                marginTop: '10%',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'text.main',
                                    fontSize: '24px',
                                    textAlign: 'center',
                                    margin: 'auto',
                                    fontWeight: '700',
                                    textTransform: 'none',
                                }}
                                >Register</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>

        </ThemeProvider>
    )
}

export default SignUp;