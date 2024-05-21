import React, { useState, useEffect } from 'react';
import useUser from '../hooks/userUser.jsx';
import { Navigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/login.css'
import { SendRegisterUser } from '../hooks/sendData.jsx'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Servi Bank
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();



function Login() {

  const { isLoginLoading, hasLoginError, login, isLogged, role, } = useUser()
  const [correo, setCorreo] = useState('');
  const [pass, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState("tab1");


  const [redirectToPerfil, setRedirectToPerfil] = useState(false);
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  const { error, register, response, loading } = SendRegisterUser()
  const [errorRegister, setErrorRegister] = useState(false)


  // REGISTER USER VALUES
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correoRegister, setCorreoRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')
  const [pais, setPais] = useState('')
  const [rol, setRol] = useState(2)


  const roles = {
    admin: "1",
    usuario: "2",
  };
const handleButtonClick = (tabKey) => {
  setActiveTab(tabKey);
};

  useEffect(() => {
    if (isLogged && role == roles.usuario) {
      setRedirectToPerfil(true);
      return;
    }


    if (isLogged && role == roles.admin) {
      console.log("entro al use effect admin")
      setRedirectToAdmin(true);
      return;
    }

  }, [role, isLogged]);


  if (redirectToPerfil) {
    return <Navigate to={'/perfil'} />;
  }

  if (redirectToAdmin) {
    return <Navigate to={'/dashboard'} />;
  }


  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const HandleLogin = (e) => {
    e.preventDefault();
    login({ email: correo, password: pass })
  }


  const HandleSubmit = (e) => {
    e.preventDefault()
    const data = {
      id: 0,
      nombre: nombre,
      apellido: apellido,
      id_pais: parseInt(pais),
      correo: correoRegister,
      contraseña: passwordRegister,
      id_rol: rol
    }


    // vrificar que los campos no esten vacios
    if (nombre == '' && apellido == '' && pais == '' && correoRegister == '' && passwordRegister == '') {
      setErrorRegister('Por favor llene todos los campos')
      return
    }
    // verificar que el correo sea valido
    if (!correoRegister.includes('@')) {
      setErrorRegister('Por favor ingrese un correo valido')
      return
    }

    // verificar que la contraseña tenga mas de 8 caracteres
    if (passwordRegister.length < 8) {
      setErrorRegister('La contraseña debe tener minimo 8 caracteres')
      return
    }

    setErrorRegister(false)
    register(data)
  }
  return (
    <Container style={{width: "35%"}} className="mt-5 pb-3 card-body shadow" >


      <Tabs activeKey={activeTab} id="login-tabs" style={{}} className='mb-3 d-none flex-row justify-content-between '>
        <Tab eventKey="tab1"  title="Iniciar sesión">
          <div className="text-center mb-3">

         
              <Container  className={`text-center mb-3 ${activeTab === 'tab1' ? 'fade-in' : 'fade-out'} pt-3`} component="main" maxWidth="xs">
              
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>


                  <Typography component="h1" variant="h5">
                    Iniciar sesión
                  </Typography>

                  {isLoginLoading && <strong>Checking credentials...</strong>}
                  {!isLoginLoading &&
                    <Box component="form" onSubmit={HandleLogin} noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electronico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChangeCorreo}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChangePassword}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Entrar
                      </Button>

                      <p>No estás registrado? <Button onClick={() => handleButtonClick("tab2")}>Registrarse</Button></p>
                    </Box>
                  }
                </Box>
               
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
           
          </div>
        </Tab>
        <Tab eventKey="tab2" title="Registrar">
          <div className="text-center mb-3">
            <ThemeProvider theme={defaultTheme}>
              <Container  className={`text-center mb-3 ${activeTab === 'tab2' ? 'fade-in' : 'fade-out'} pt-3`} component="main" maxWidth="xs">
              
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOpenOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Registrarse
                  </Typography>
                  <Box component="form" noValidate onSubmit={HandleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="Nombre"
                          required
                          fullWidth
                          id="firstName"
                          label="Nombre"
                          autoFocus

                          onChange={(e) => setNombre(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Apellido"
                          name="Apellido"
                          autoComplete="family-name"
                          onChange={(e) => setApellido(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Correo Electronico"
                          name="email"
                          autoComplete="email"
                          onChange={(e) => setCorreoRegister(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Contraseña"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          onChange={(e) => setPasswordRegister(e.target.value)}
                        />
                      </Grid>


                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Pais</InputLabel>
                          <TextField
                            select
                            label="Pais"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            helperText="Por favor seleccione su pais"
                          >
                            <MenuItem value={1}>Colombia</MenuItem>
                            <MenuItem value={2}>Mexico</MenuItem>
                            <MenuItem value={3}>Argentina</MenuItem>
                          </TextField>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        {
                          errorRegister && (
                            <Stack sx={{ width: '100%' }} spacing={2}>
                              <Alert severity="error">
                                Error,  <strong>{errorRegister}</strong>
                              </Alert>
                            </Stack>)
                        }

                        {error && (
                          <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                              Error, <strong>{error}</strong>
                            </Alert>
                          </Stack>
                        )}

                        {response && (
                          <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="success">
                              <strong>{response}</strong>
                            </Alert>
                          </Stack>
                        )}
                      </Grid>



                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Registrarse
                    </Button>

                    <p>Ya estás registrado? <Button onClick={() => handleButtonClick("tab1")}>Iniciar Sesión</Button></p>
                  </Box>

                </Box>

                <Copyright sx={{ mt: 5 }} />
              </Container>
            </ThemeProvider>

          </div>
        </Tab>
      </Tabs>

    </Container>
  );
}

export default Login;