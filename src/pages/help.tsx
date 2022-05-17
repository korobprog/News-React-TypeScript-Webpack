import * as React from 'react'
import Box from '@mui/material/Box'
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Divider,
} from '@mui/material/'
import SendIcon from '@mui/icons-material/Send'

const Help = () => {
  const [name, setName] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: '1rem',
      }}
    >
      <Divider>
        <Typography variant="h6">помощь</Typography>
      </Divider>
      <Paper>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography component="h3">
            Отправить сообщение в поддержку
          </Typography>
          <TextField
            id="outlined-name"
            label="Имя"
            value={name}
            onChange={handleChange}
          />
          <TextField
            id="outlined-uncontrolled"
            label="E-mail"
            defaultValue=""
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            label="Сообщение..."
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Отправить
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Help
