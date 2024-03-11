import Product from "../../utils/model/product";

interface CardProps {
  children: Product;
}

const Card = ({ children }: CardProps) => {
  // FIXME: Date is not assignable to ReactNode!
  // const getExpiryDate = () => {
  //     return children.isPerishable && <p>{children.expiryDate}</p>
  // }

  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <div className="bd-placeholder-img card-img-top">
            {/* TODO: get actual images to replace this! */}
            <img
              src="/home/lukejwm/Coding/react-bootstrap-templates/react-vite-album-template/src/assets/react.svg"
              height="225"
              width="100%"
            />
          </div>
          <div className="card-body">
            <h3>{children.name}</h3>
            <p className="card-text">{children.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
