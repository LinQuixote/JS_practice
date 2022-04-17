import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        //'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',
        // 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&lang=kr&appid=cf13c71a52bad00d4b2c1f253e198b06',
        'http://api.openweathermap.org/data/2.5/forecast?q=Busan,kr&units=metric&lang=kr&appid=cf13c71a52bad00d4b2c1f253e198b06'
      );
      setData(res.data);
    } catch(e) {
      console.log(e);
    }
  };

  const { city: {name: 도시}, city: {country: 국가}} = data || {city:{}};
  const r = {도시, 국가};

  // var date = new Date(예보일시*1000)
  const x = !data ? [] :
            data.list.map( d => { const {  
              dt: 예보 ,
              weather: {description: 날씨}, 
              main: {temp: 평균온도},
              main: {temp_min: 최저온도}, 
              main: {temp_max: 최고온도}, 
              wind: {speed: 풍속},
              main: {humidity: 습도}, 
            } = d;
            function Unix_timestamp(t){
              var date = new Date(t*1000);
              var year = date.getFullYear();
              var month = "0" + (date.getMonth()+1);
              var day = "0" + date.getDate();
              var hour = "0" + date.getHours();
              var minute = "0" + date.getMinutes();
              var second = "0" + date.getSeconds();
              return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
          }
          let 예보일시 = Unix_timestamp(예보)
                             return { 예보일시 , 날씨, 평균온도, 최저온도, 최고온도, 풍속, 습도 }; });

              

  return (
  <>
    <div>
      <button onClick={onClick}>불러오기</button> 
    </div>
    {data && <textarea rows={4} style={{textAlign:"left", width:"500px"}} value={JSON.stringify( r, null, 2)} />}
    <br />
    {data && <textarea rows={20} style={{textAlign:"left", width:"500px"}} value={JSON.stringify( x, null, 2)} />}
    <br />
    {data && <textarea rows={45} style={{textAlign:"left", width:"500px"}} value={JSON.stringify(data, null, 2)} />}
  </>
  );
};

export default App;

