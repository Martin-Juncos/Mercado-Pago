import "./product.css";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const Product = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        {
          title: "Tasty burger",
          unit_price: 100,
          quantity: 1,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  const onSubmit = async (formData) => {
    // Callback called when clicking Wallet Brick
    // this is possible because the brick is a button
    // at this time of submit, you must create the preference
    console.log("onSubmit", formData);
  };

  const onError = async (error) => {
    // callback called in all Brick errors
    console.log("onError", error);
  };

  const onReady = async () => {
    // Callback called when Brick is ready.
    // Here you can hide loadings from your site, for example.
    console.log("onReady");
  };

  return (
    <div className="card-product-container">
      <div className="card-product">
        <div className="card">
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UsFUk4jF55wlcTy-4DXeEOM-ixqlLIgfMQ&s"
            alt="Card image cap"
          />
          <h3>Tasty burger</h3>
          <p className="card-text">Price: $100</p>
          <button onClick={handleBuy}>Buy now</button>
          {preferenceId && (
            <Wallet
              initialization={{
                preferenceId: preferenceId,
                redirectMode: "blank", // self | blank | modal
              }}
              // customization={{
              //   texts: { valueProp: "smart_option" },
              //   visual: {
              //     buttonBackground: "default", // default | black | blue | white
              //   },
              // }}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
