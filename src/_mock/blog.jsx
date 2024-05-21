import { faker } from '@faker-js/faker';
import ExcelExportButton from '../components/reportes.jsx';
import { EndPoint } from '../config/config.js';

const ENDPOINT = EndPoint();

export const posts = async () => {
  const fetchData = async (endpoint, fields) => {
    const response = await fetch(endpoint);
    const data = await response.json();

    const extractedData = data.map(item => fields.map(field => {
      if (Array.isArray(item[field])) {
        return item[field].map(subItem => subItem.nombre).join(', ');
      } else {
        return item[field];
      }
    }));

    return extractedData;
  };

  const headers = ["Nombre Común", "Genero", "Familia", "Orden", "Clase", "Dominio", "Reino"];
  const userFields = ["nombre", "apellido", "pais", "correo"];
  const speciesFields = ["nombre_comun", "Genero", "Familia", "Orden", "Clase", "Dominio", "Reino"];
  const usuariosPromise = fetchData(`${ENDPOINT}/users`, userFields);
  const especiesPromise = fetchData(`${ENDPOINT}/especies`, speciesFields);
  const familiasPromise = fetchData(`${ENDPOINT}/familias`, ['nombre']);

  const [usuarios, especies, familias] = await Promise.all([usuariosPromise, especiesPromise, familiasPromise]);
  
  const reports = [
    <ExcelExportButton
      headers={userFields}
      data={usuarios}
      sheetName="Usuarios Registrados"
      fileName="Usuarios Registrados"
      title="Usuarios"
    />,
    <ExcelExportButton
      headers={headers}
      data={especies}
      sheetName="Especies Registradas"
      fileName="Especies Registradas"
      title="Especies"
    />,
    <ExcelExportButton
      headers={["Familias"]}
      data={familias}
      sheetName="Familias Registradas"
      fileName="Familias Registradas"
      title="Familias"
    />
  ];

  const Posts = [...Array(3)].map((_, index) => ({
    id: faker.string.uuid(),
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    view: faker.number.int(99999),
    buton: reports[index],
    author: {
      name: faker.person.fullName(),
      avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    },
  }));
  return Posts;
};
