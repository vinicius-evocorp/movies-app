import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Header } from './components/Header';

const StyledBackgroudnImage = styled('div')(({ theme }) => ({
  minHeight: theme.spacing(56),
  width: '100%',
  backgroundImage:
    'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  padding: theme.spacing(10),
}));

export function Home() {
  return (
    <>
      <Header />

      <Container disableGutters maxWidth={false}>
        <Box>
          <StyledBackgroudnImage>
            <Typography variant="h4" sx={{ fontWeight: '500' }}>
              Homem-Aranha: Sem Volta Para Casa
            </Typography>
          </StyledBackgroudnImage>
        </Box>
      </Container>
    </>
  );
}
