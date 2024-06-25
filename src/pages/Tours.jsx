import React, { useEffect, useState } from 'react';
import { Navbar, NavItem, Icon, Table, Col, ProgressBar } from 'react-materialize';
import { useParams } from 'react-router-dom';
import 'materialize-css';
import http from '../http';
import moment from 'moment';

const Tours = () => {
    const { selected_country } = useParams();
    const [tours,setTours] = useState([])
    const [loaded,setLoaded] = useState(false)

    useEffect(()=>{
        http.get('/tours').then(response => {
            console.log(response.data)
            if(response.data != ''){
              if(selected_country!=null){
                response.data = response.data.filter(tour => tour.COUNTRY == selected_country)
              }
              setTours(response.data)
              setLoaded(true)
            }
          })
    },[])

  return (
    <div>
        {!loaded &&
        <Col s={12}>
            <ProgressBar />
        </Col>
      }
      {loaded && tours.length==0 && 
        <h2>  На данный момент туры в выбранной стране отсутствуют</h2>
      }
        {loaded && tours.length>0&&
        <Table>
  <thead>
    <tr>
      <th data-field="image">
        
      </th>
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
    {console.log(tours) && tours.map(tour => (
      <tr>
        <td>
          <img src= {"http://localhost:8080/tours/images/"+tour.ID} alt='Изображение не загружено' style={{maxHeight: '100px', maxWidth: '100px'}}/>
        </td>
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