import { QueryClient, QueryClientProvider } from "react-query";
import { ProductComponent } from "./components/ProductComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <ProductComponent />
      </main>
    </QueryClientProvider>
  );
}

export default App;
