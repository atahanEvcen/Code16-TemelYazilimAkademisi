import Products from "../products/Products";

function Home({ user }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Ana Sayfa</h1>
        <Products user={user} />
      </div>
    </>
  );
}

export default Home;
