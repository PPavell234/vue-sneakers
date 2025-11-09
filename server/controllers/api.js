import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Проверяем существование
    const candidate = await User.findOne({ email });
    if (candidate)
      return res
        .status(400)
        .json({ message: "Такой пользователь уже существует" });

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hash });
    await user.save();

    res.json({ message: "Пользователь зарегистрирован ✅" });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера", err });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Пользователь не найден" });

    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid)
      return res.status(400).json({ message: "Неверный пароль" });

    const token = jwt.sign({ userId: user._id }, "SECRET_KEY");

    res.json({ message: "Успешный вход ✅", token });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера", err });
  }
};
