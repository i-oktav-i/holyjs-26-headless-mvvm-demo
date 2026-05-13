import { CssBaseline, ThemeProvider } from '@mui/material';
import styles from './App.module.css';
import {
  venueListDirectoryOverrides,
  venueListOverlayOverrides,
} from './ui/cssModules';
import {
  // venueListDirectoryOverrides,
  // venueListOverlayOverrides,
  materialTheme,
} from './ui/material';
import { VenueListWidget } from './widgets/VenueList';

export default function App() {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <main className={styles.app}>
        <div className={styles.shell}>
          <div className={styles.grid}>
            <VenueListWidget />
            <VenueListWidget overrides={venueListOverlayOverrides} />
            <VenueListWidget overrides={venueListDirectoryOverrides} />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
