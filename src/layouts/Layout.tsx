import { Container } from '@mui/material'
import { NavigationBar } from 'components/Navigation'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Container
        sx={{
          width: '100%',
          minHeight: '100vh',
          bgcolor: 'primary.dark',
          padding: '24px',
        }}
      >
        {children}
      </Container>
    </>
  )
}
