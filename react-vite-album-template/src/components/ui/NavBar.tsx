import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            {/* TODO: Add a logo here */}
            <strong>Grocery Store</strong>
          </a>
          <Button
            colour="success"
            onClick={() => console.log("Clicked The Button!")}
          >
            Add New Product
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;