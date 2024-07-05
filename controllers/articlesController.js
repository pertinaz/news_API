import newsInstance from "../axiosInstance.js";

export const articles =
  ("/articles",
  async (req, res) => {
    const {
      query = "",
      category = "",
      language = "en",
      page = 1,
      pageSize = 10,
      fromDate = "YYYY-MM-DD",
      toDate = "YYYY-MM-DD",
    } = req.query;
    try {
      const response = await newsInstance.get("/articles", {
        params: {
          query,
          category,
          language,
          page,
          pageSize,
          fromDate,
        },
      });
      res.json(response.json());
    } catch (error) {
      error.statusCode = 503;
      error.message = "The API is undergoing maintenance. Try again later.";
      next(error); // Pasar el error al middleware de manejo de errores
    }
  });

export const articleDetails =
  ("/articles/:id",
  async (req, res) => {
    const { id = "" } = req.query;
    try {
      const response = await newsInstance.get("/articles/:id", {
        params: {
          id,
        },
      });
      res.json(response.json());
    } catch (error) {
      error.statusCode = 503;
      error.message = "The API is undergoing maintenance. Try again later.";
      next(error); // Pasar el error al middleware de manejo de errores
    }
  });
