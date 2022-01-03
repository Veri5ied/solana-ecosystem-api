import { tokensList } from "./tokens_data/tokens";

export const getAllTokens = async (req, res) => {
  try {
    await res.status(200).json({
      success: true,
      data: tokensList,
    });
  } catch (error) {
    res.status(400).end();
  }
};