import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import "../../../styles/dashboard.css"
import Iconify from '../../../components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';
import { EndPoint } from '../../../config/config.js';

const ENDPOINT = EndPoint();

export default function AppView() {
  const [usuarios, setUsuarios] = useState([]);
  const [especies, setEspecies] = useState([]);
  const [familias, setFamilias] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (endpoint, fields) => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        return data.map(item => fields.map(field => {
          if (Array.isArray(item[field])) {
            return item[field].map(subItem => subItem.nombre).join(', ');
          } else {
            return item[field];
          }
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Retorna un array vacío en caso de error
      }
    };

    const headers = ["Nombre Común", "Genero", "Familia", "Orden", "Clase", "Dominio", "Reino"];
    const userFields = ["nombre", "apellido", "pais", "correo"];
    const speciesFields = ["nombre_comun", "Genero", "Familia", "Orden", "Clase", "Dominio", "Reino"];

    Promise.all([
      fetchData(`${ENDPOINT}/users`, userFields),
      fetchData(`${ENDPOINT}/especies`, speciesFields),
      fetchData(`${ENDPOINT}/familias`, ['nombre']),
    ]).then(([usuariosData, especiesData, familiasData]) => {
      setUsuarios(usuariosData);
      setEspecies(especiesData);
      setFamilias(familiasData);
       setDataLoaded(true);
    });
  }, []); // Empty dependency array para ejecutar el efecto solo una vez

  const cantidadU = usuarios.length;
  if (!dataLoaded) {
    return  <div className='centrarloader'><div class="spinnerContainer">
    <div class="spinner"></div>
    <div class="loader">
      <p>loading</p>
      <div class="words">
        <span class="word">Dashboard</span>
        <span class="word">Graficas</span>
        <span class="word">Estadisticas</span>
        <span class="word">Componentes</span>
        <span class="word">Plantas</span>
      </div>
    </div>
  </div></div>; // Puedes mostrar un indicador de carga mientras los datos se están cargando
  }
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
       Hola, Bienvenido de vuelta 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Fotos este mes"
            total={0}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Nuevos usuarios"
            total={0}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users_new.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Usuarios Registrados"
            total={cantidadU}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Visitas al sitio web"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
                '12/01/2003',
              ],
              series: [
                {
                  name: 'Colombia',
                  type: 'column',
                  fill: 'solid',
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 30,10],
                },
                {
                  name: 'Mexico',
                  type: 'area',
                  fill: 'gradient',
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                },
                {
                  name: 'Argentina',
                  type: 'line',
                  fill: 'solid',
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Usuarios por país"
            chart={{
              series: [
                { label: 'Colombia', value: cantidadU },
                { label: 'Mexico', value: 0},
                { label: 'Argentina', value: 0},
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
