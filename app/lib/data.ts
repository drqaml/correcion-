import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import {
  InvoiceForm,
  InventoryTable,
  LatestInvoiceRaw,
  User,
} from './definitions';

// export async function fetchLatestInvoices() {
//   noStore();

//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       ORDER BY invoices.date DESC
//       LIMIT 5`;

//     const latestInvoices = data.rows.map((invoice) => ({
//       ...invoice,
//       amount
//       ,
//     }));
//     return latestInvoices;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest invoices.');
//   }
// }

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql<InventoryTable>`
      SELECT 
        *
      FROM inventario WHERE
        idProducto ILIKE ${`%${query}%`} OR
        referenciaProducto ILIKE ${`%${query}%`} OR
        nombreProducto ILIKE ${`%${query}%`} OR
        descripcionProducto ILIKE ${`%${query}%`} OR
        valorCompra::text ILIKE ${`%${query}%`} OR
        precioVenta::text ILIKE ${`%${query}%`} OR
        cantidadProducto::text ILIKE ${`%${query}%`} OR
        fechaRegistro::text ILIKE ${`%${query}%`}
      ORDER BY idProducto DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return products.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchProductsPages(query: string) {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*)
    FROM 
      inventario
    WHERE
      idProducto ILIKE ${`%${query}%`} OR
      referenciaProducto ILIKE ${`%${query}%`} OR
      nombreProducto ILIKE ${`%${query}%`} OR
      descripcionProducto ILIKE ${`%${query}%`} OR
      valorCompra::text ILIKE ${`%${query}%`} OR
      precioVenta::text ILIKE ${`%${query}%`} OR
      cantidadProducto::text ILIKE ${`%${query}%`} OR
      fechaRegistro::text ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();

  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function getUser(email: string) {
  noStore();

  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
