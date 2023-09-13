import { useQuery } from "react-query";

async function getProducts() {
  const res = await fetch(`http://localhost:3000/products/new`);
  return (await res.json()) as {
    id: number;
    name: string;
    description: string;
  }[];
}

export function ProductComponent() {
  const { isError, isLoading, error, data } = useQuery("product", getProducts);

  if (isError) return <>{error}</>;
  if (isLoading) return <>Loading..</>;
  return (
    <div>
      <h2>The Product Component</h2>
      {data?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>{product.id}</span>
        </div>
      ))}
    </div>
  );
}
