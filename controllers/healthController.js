import newsInstance from "../axiosInstance.js";

export const healthCheck =
  ("/health",
  async (req, res) => {
    try {
      const response = await newsInstance.get("/health");
      res.json(response.json());
    } catch (error) {
      error.statusCode = 503;
      error.message = "The API is undergoing maintenance. Try again later.";
      next(error); // Pasar el error al middleware de manejo de errores
    }
  });
