import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  Stack,
  Chip,
} from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6b35',
    },
    secondary: {
      main: '#1a1a2e',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, sans-serif',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <LocalFireDepartmentIcon sx={{ fontSize: 64, color: 'primary.main' }} />
          <Typography variant="h2" fontWeight={800} gutterBottom>
            Toasty
          </Typography>
          <Typography variant="h6" color="text.secondary">
            React + Vite + MUI — bereit für Netlify 🚀
          </Typography>
        </Box>

        <Stack spacing={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                ✅ Build erfolgreich
              </Typography>
              <Typography color="text.secondary" mb={2}>
                Dein Projekt ist korrekt konfiguriert und deploybar.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label="React 18" color="primary" />
                <Chip label="Vite" color="primary" variant="outlined" />
                <Chip label="MUI v6" color="primary" variant="outlined" />
                <Chip label="Netlify Ready" color="success" />
              </Stack>
            </CardContent>
          </Card>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large" fullWidth>
              Los gehts!
            </Button>
            <Button variant="outlined" size="large" fullWidth>
              Mehr erfahren
            </Button>
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}
