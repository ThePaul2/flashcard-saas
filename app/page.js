import Image from "next/image";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const handleSubmit = async () => {
  const checkoutSession = await fetch('/api/checkout_sessions', {
    method: 'POST',
    headers: { origin: 'http://localhost:3000' },
  })
  const checkoutSessionJson = await checkoutSession.json()

  const stripe = await getStripe()
  const {error} = await stripe.redirectToCheckout({
    sessionId: checkoutSessionJson.id,
  })

  if (error) {
    console.warn(error.message)
  }
}

export default function Home() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed AppBar */}
      <Container>
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            The easiest way to create flashcards from your text.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
            Get Started
          </Button>
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Box>
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    AI-Powered Flashcard Generation
                  </Typography>
                  <Typography>
                    Automatically generate flashcards from your text using advanced AI algorithms.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Cloud Storage
                  </Typography>
                  <Typography>
                    Securely save and access your flashcards from any device with our cloud storage feature.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Customizable Designs
                  </Typography>
                  <Typography>
                    Personalize your flashcards with various themes and design options to match your style.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 6, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Free Plan
                  </Typography>
                  <Typography>
                    $0/month - Basic features with limited flashcard generation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Pro Plan
                  </Typography>
                  <Typography>
                    $9.99/month - Unlimited flashcards, advanced AI features, and premium support.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Enterprise Plan
                  </Typography>
                  <Typography>
                    Custom pricing - Tailored solutions for organizations with dedicated support and custom features.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

