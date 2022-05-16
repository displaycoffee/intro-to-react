/* react imports */
import { createRoot } from 'react-dom/client';

/* local component imports */
import App from './components/App';

/* create root into app entry point */
const introApp = document.getElementById('root');
const introRoot = createRoot(introApp);
introRoot.render(<App />);