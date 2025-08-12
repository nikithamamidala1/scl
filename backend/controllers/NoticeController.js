import Notice from "../models/Notice.js";

export const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json(notice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
