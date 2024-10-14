/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';


export const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

export const newRowId: RowID = CRUD.insertRow(row);
export const updatedRow: RowElement = {...row, age: 23};
CRUD.updatedRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);