import { Request, Response } from "express";
import pool from '../db/connection';

export const getUsuarios = async (req: Request, res: Response) => {
  const {rows} = await pool.query('SELECT * FROM users')
  console.log(rows);
  res.json(rows);
};

export const getUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getUsuarios",
    id,
  });
};

export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "postUsuario",
    body,
  });
};

export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "postUsuario",
    body,
    id
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "deleteUsuario",
    body,
    id
  });
};
