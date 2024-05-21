import DashboardLayout from '../dashboard';
import "../styles/dashboard.css";
import { BlogView } from '../sections/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
  
      <DashboardLayout>
      <BlogView />
      </DashboardLayout>
    </>
  );
}
