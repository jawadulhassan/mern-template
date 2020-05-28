import React, { useState, useEffect } from "react";
import isEmpty from 'lodash/isEmpty';
import axios from "axios";

import Body from "../../components/views/Body";
import Header from "../../components/views/Header";

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getListData();
  }, []);

  async function getListData() {
    const response = await axios.get("/api/seasons");
    console.log(response);
    setDataList(response.data);
  }

	if(isEmpty(dataList)) return null;
  return (
    <div className="listing-wrapper">
      <Header />
      <Body data={dataList} getListData={getListData}/>
    </div>
  );
}

export default App;
