import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { createDetail } from '../../../../redux/actions/action';

const MySales = () => {
    const dispatch = useDispatch();
  const [sales, setSales] = useState([]);
  const [idSale, setIdSale] = useState(null); // Variable para almacenar el primer idSale
  const idUser = localStorage.getItem('userId');
  const cartItemsJSON = localStorage.getItem('cartItems');
  
  const listProducts = JSON.parse(cartItemsJSON) || [];
  console.log(listProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/surf/sale');
        const { data } = response;
        console.log('Sales data:', data);
  
        const filteredSales = data.data ? data.data.filter(sale => sale.idUser === parseInt(idUser)) : [];
        console.log('Filtered Sales:', filteredSales);
  
        if (filteredSales.length > 0) {
          await Promise.all(filteredSales.map(async sale => {
            try {
              console.log(`Dispatching createDetail for sale ${sale.idSale}`);
              await dispatch(createDetail(sale.idSale, idUser, listProducts));
              console.log(`createDetail for sale ${sale.idSale} successful`);
            } catch (error) {
              console.error(`Error creating detail for sale ${sale.idSale}:`, error);
            }
          }));
        }
  
        setSales(filteredSales);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };
  
    fetchData();
  }, [idUser]);
  
  


  
  return (
    <div>
      <h1>My Sales</h1>
      {sales.length === 0 ? (
        <p>No hay ventas disponibles</p>
      ) : (
        <ul>
          {sales.map((sale) => (
            <li key={sale.idSale}>
              <strong>ID de Venta:</strong> {sale.idSale}
              <br />
              <strong>Usuario:</strong> {sale.nameUser}
              <br />
              <strong>Email:</strong> {sale.emailUser}
              <br />
              <strong>Fecha:</strong> {new Date(sale.date).toLocaleString()}
              <br />
              <strong>Costo:</strong> ${sale.costSale.toFixed(2)}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MySales;
