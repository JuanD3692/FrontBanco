import SvgColor from '../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'usuarios',
    path: '/usuarios',
    icon: icon('ic_user'),
  },
  {
    title: 'Plantas',
    path: '/especies',
    icon: icon('ic_planta'),
  },
  {
    title: 'Registrar plantas',
    path: '/registro',
    icon: icon('ic_registrar'),
  },
  {
    title: 'contacto',
    path: '/contacto',
    icon: icon('ic_contact'),
  },
  {
    title: 'roles',
    path: '/roles',
    icon: icon('ic_rol'),
  },
  {
    title: 'reportes',
    path: '/reportes',
    icon: icon('ic_reports'),
  },
];

export default navConfig;
