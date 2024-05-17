import { Card } from "react-bootstrap";

export default function cardUserShop({ fechaCompra, products }: ICardUserShop) {
  return (
    <div className="row">
      <div className="col-12">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title className="mb-5" style={{ textAlign: "center" }}>
              Date of shop: {fechaCompra}
            </Card.Title>
            <Card.Text>
              {products.map((product) => {
                return (
                  <div className="row mb-4">
                    <div
                      className="col-5"
                      style={{ padding: "10px 40px 10px" }}
                    >
                      <img src={product.image} alt="" width={"30%"} />
                    </div>
                    <div className="col-4">
                      <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        {product.title}
                      </span>
                    </div>

                    <div className="col-3" style={{ padding: "40px" }}>
                      <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Cantidad: {product.quantity} piezas
                      </p>
                    </div>
                  </div>
                );
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export interface ICardUserShop {
  fechaCompra: string;
  products: IProductsUserShop[];
}

export interface IProductsUserShop {
  image: string;
  title: string;
  quantity: number;
}
