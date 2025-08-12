import { query } from "../db";

export const getClients = async() => {
    const {rows} = await query('SELECT * FROM clients_tb');
    return rows;
}

export const createClient = async(clientData) => {
    const { name, email, job, rate, isactive } = clientData;
    const { rows } = await query(
        `INSERT INTO clients_tb (name, email, job, rate, isactive) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, job, rate, isactive]
      );
    
    return rows[0];
}


