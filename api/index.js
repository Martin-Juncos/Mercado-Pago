import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";

dotenv.config();

const mercadopagoClient = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mercadopago API");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.unit_price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://martin-juncos.github.io/success/",
        failure: "https://martin-juncos.github.io/failure/",
        pending: "https://martin-juncos.github.io/pending/",
      },
      auto_return: "approved",
    };
    const preference = new Preference(mercadopagoClient);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating preference");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
