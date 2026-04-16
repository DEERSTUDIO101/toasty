import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Fade,
  Zoom
} from '@mui/material';
import {
  ContentCopy as CopyIcon,
  Gamepad as GamepadIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  CloudDownload as DownloadIcon
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6b35',
    },
    secondary: {
      main: '#f7931e',
    },
    background: {
      default: '#0a0e27',
      paper: '#141b3d',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const games = [
  'The Forge',
  '99 Nights Only in Game',
  'Forsaken',
  'Violence D',
  'Blue Lock',
  'Skateboard Obby',
  'Build a boat for treasure'
];

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Blitzschnell',
    description: 'Optimierte Performance für ein reibungsloses Spielerlebnis'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Sicher',
    description: 'Regelmäßige Updates und geprüfte Scripts'
  },
  {
    icon: <GamepadIcon sx={{ fontSize: 40 }} />,
    title: '7+ Spiele',
    description: 'Unterstützung für beliebte Roblox-Spiele'
  }
];

export default function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const loaderScript = 'loadstring(game:HttpGet("https://api.jnkie.com/api/v1/luascripts/public/3d56b3886f68d784b8beabb6840912b5d9fc31a7030a6f89b21154b09cf2f7d5/download"))()';

  const handleCopyScript = () => {
    navigator.clipboard.writeText(loaderScript);
    setSnackbarOpen(true);
  };

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f4d 100%)' }}>
        {/* Header */}
        <AppBar position="sticky" sx={{ background: 'rgba(20, 27, 61, 0.9)', backdropFilter: 'blur(10px)' }}>
          <Toolbar>
            <Box
              component="img"
              src="https://cdn.discordapp.com/icons/1409079683953328150/cdcc0d3b3aefc5e48c5ac9556fa963bc.webp?size=512"
              alt="Toasty Hub Logo"
              sx={{ width: 45, height: 45, mr: 2, borderRadius: '50%', border: '2px solid #ff6b35' }}
            />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, color: '#ff6b35' }}>
              Toasty Hub
            </Typography>
            <Button color="inherit" onClick={handleCopyScript} startIcon={<DownloadIcon />}>
              Script Laden
            </Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
          <Fade in={fadeIn} timeout={1000}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://cdn.discordapp.com/icons/1409079683953328150/cdcc0d3b3aefc5e48c5ac9556fa963bc.webp?size=512"
                alt="Toasty Hub"
                sx={{
                  width: 150,
                  height: 150,
                  mb: 3,
                  borderRadius: '50%',
                  border: '4px solid #ff6b35',
                  boxShadow: '0 0 40px rgba(255, 107, 53, 0.5)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #ff6b35 30%, #f7931e 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                Toasty Hub
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                Der ultimative Script-Server für deine Lieblings-Roblox-Spiele
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleCopyScript}
                startIcon={<CopyIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #ff6b35 30%, #f7931e 90%)',
                  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
                  '&:hover': {
                    boxShadow: '0 6px 30px rgba(255, 107, 53, 0.6)',
                  }
                }}
              >
                Loader kopieren
              </Button>
            </Box>
          </Fade>
        </Container>

        {/* Features Section */}
        <Container maxWidth="lg" sx={{ pb: 8 }}>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in={fadeIn} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(20, 27, 61, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 107, 53, 0.2)',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(255, 107, 53, 0.3)',
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <Box sx={{ color: '#ff6b35', mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Loader Script Section */}
        <Container maxWidth="md" sx={{ pb: 8 }}>
          <Fade in={fadeIn} timeout={1500}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                background: 'rgba(20, 27, 61, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 107, 53, 0.3)',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#ff6b35', mb: 2 }}>
                Loader Script
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#0a0e27',
                  p: 2,
                  borderRadius: 2,
                  position: 'relative',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                }}
              >
                <code style={{ color: '#f7931e', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                  {loaderScript}
                </code>
                <IconButton
                  onClick={handleCopyScript}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: '#ff6b35',
                    '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' }
                  }}
                >
                  <CopyIcon />
                </IconButton>
              </Box>
            </Paper>
          </Fade>
        </Container>

        {/* Supported Games Section */}
        <Container maxWidth="lg" sx={{ pb: 10 }}>
          <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 4, color: '#ff6b35' }}>
            Unterstützte Spiele
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {games.map((game, index) => (
              <Grid item key={index}>
                <Zoom in={fadeIn} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Chip
                    label={game}
                    sx={{
                      fontSize: '1rem',
                      py: 2.5,
                      px: 1,
                      background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.2) 30%, rgba(247, 147, 30, 0.2) 90%)',
                      border: '1px solid rgba(255, 107, 53, 0.4)',
                      color: '#fff',
                      transition: 'all 0.3s',
                      '&:hover': {
                        background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.4) 30%, rgba(247, 147, 30, 0.4) 90%)',
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'rgba(20, 27, 61, 0.9)',
            borderTop: '1px solid rgba(255, 107, 53, 0.2)',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              © 2024 Toasty Hub - Dein Script-Server für Roblox
            </Typography>
          </Container>
        </Box>

        {/* Snackbar for copy confirmation */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
            Script erfolgreich kopiert!
          </Alert>
        </Snackbar>

        {/* CSS for floating animation */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </Box>
    </ThemeProvider>
  );
}
