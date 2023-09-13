import { useEffect } from "react";

function App() {
  async function getData() {
    try {
      const response = await fetch("http://localhost:3000/products/new");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Fetching Data Example</h1>
      {/* You can render fetched data here */}
    </div>
  );
}

export default App;
