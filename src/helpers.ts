import { Client } from "pg";
import * as _squel from "squel";

export const db = new Client(
  "postgres://postgres:postgrespassword@postgres:5432/postgres"
);

export const squel = _squel.useFlavour("postgres");
