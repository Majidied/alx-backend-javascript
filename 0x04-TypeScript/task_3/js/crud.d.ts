/// <reference path="interface.ts" />
import { RowID, RowElement } from './interface';


export default class CRUD {
    rows: RowElement[] = [];

    constructor(rows: RowElement[]) {
        this.rows = rows;
    }

    findRowById(id: RowID): RowElement {
        return this.rows.find(row => row.id === id);
    }

    addRow(row: RowElement): void {
        this.rows.push(row);
    }

    updateRow(id: RowID, row: RowElement): void {
        const index = this.rows.findIndex(row => row.id === id);
        if (index !== -1) {
            this.rows[index] = row;
        }
    }

    deleteRow(id: RowID): void {
        this.rows = this.rows.filter(row => row.id !== id);
    }
}