import { Request, Response } from "express";
import pool from "../db/connection";
import { User } from "../interfaces/User";

export const getUsuarios = async (req: Request, res: Response) => {
  const { rows } = await pool.query("SELECT * FROM users");
  res.json(rows);
};

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE user_id = ${id}`
    );

    res.json(rows);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export const postUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { body } = req;
  console.log(body);
  const {
    user_name,
    last_name,
    password,
    birthday,
    email,
    genre,
    phone,
    address,
  } = <User>body;
  try {
    await pool.query(`
    INSERT INTO users (user_name,last_name,email,password,phone,address,birthday,genre)VALUES (
      '${user_name}',
      '${last_name}',
      '${email}',
      '${password}',
      '${phone}',
      '${address}',
      '${birthday}',
      '${genre}'
    )`);

    res.json({
      msg: "The user is saved",
      body,
    });
  } catch (error) {
    res.status(400).json({
      msg: "It was not possible save the user, try again",
      error,
    });
  }
};

export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  pool.query(`UPDATE users SET ${body} = `)
  res.json({
    msg: "postUsuario",
    body,
    id,
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "deleteUsuario",
    body,
    id,
  });
};
