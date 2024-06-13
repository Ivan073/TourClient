import React, { useEffect, useState } from 'react';
import { Navbar, NavItem, Icon, Table, Col, ProgressBar } from 'react-materialize';
import 'materialize-css';
import http from '../http';
import moment from 'moment';

const Tours = () => {

    const [tours,setTours] = useState([])

    useEffect(()=>{
        http.get('/tours').then(response => {
            if(response.data != ''){
              setTours(response.data)
            }
          })
    },[])

  return (
    <div>
        {tours.length == 0 &&
        <Col s={12}>
            <ProgressBar />
        </Col>
      }
        {tours.length > 0 &&
        <Table>
  <thead>
    <tr>
      <th data-field="name">
        Название
      </th>
      <th data-field="start_date">
        Дата начала
      </th>
      <th data-field="end_date">
        Дата конца
      </th>
      <th data-field="price">
        Стоимость
      </th>
    </tr>
  </thead>
  <tbody>
    {tours.map(tour => (
      <tr>
        <td>
          {tour.NAME}
        </td>
        <td>
          {tour.START_DATE != null && moment(tour.START_DATE).format('DD.MM.YYYY')}
        </td>
        <td>
          {tour.END_DATE != null && moment(tour.END_DATE).format('DD.MM.YYYY')}
        </td>
        <td>
          {tour.PRICE}
        </td>
      </tr>
    ))}
  </tbody>
</Table>
}
    </div>
  );
};

export default Tours;