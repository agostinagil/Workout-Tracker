import { WorkoutsProvider } from "./contexts/WorkoutsContext";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <WorkoutsProvider>
      <AppRoutes />
    </WorkoutsProvider>
  );
}

export default App;
