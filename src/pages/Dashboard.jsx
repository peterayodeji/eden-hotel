import Heading from '../ui/Heading';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import RowHeader from '../ui/RowHeader';

function Dashboard() {
  return (
    <>
      <RowHeader>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </RowHeader>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
