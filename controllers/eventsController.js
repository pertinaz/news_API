import newsInstance from "../axiosInstance.js";

export const breakingEvents =
  ("/breaking-events",
  async (req, res) => {
    const {
      language = "en",
      category = "",
      page = 1,
      pageSize = 10,
    } = req.query;
    try {
      const response = await newsInstance.get("/breaking-events", {
        params: {
          language,
          category,
          page,
          pageSize,
        },
      });
      res.json(response.json());
    } catch (error) {
      error.statusCode = 503;
      error.message = "The API is undergoing maintenance. Try again later.";
      next(error); // Pasar el error al middleware de manejo de errores
    }
  });
