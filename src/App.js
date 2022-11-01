import './App.css';
import BreadcrumbWrapper from './stories/Breadcrumb';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1>Hii</h1>
      <BreadcrumbWrapper>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">
          Belts
        </Typography>
      </BreadcrumbWrapper>
    </div>
  );
}

export default App;
