import React from 'react';
import Card from './components/Card';
import './App.css';
import Buttongrp from './components/Buttongrp';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    getData();
  }, [])
  const getData = () => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => { setDataArray(data) })
  }
  const getSingleData = () => {

    fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * 10) + 1}`)
      .then(response => response.json())
      .then(datajson => { setEmail(datajson.data.email); setFirstName(datajson.data.first_name); setLastName(datajson.data.last_name); setCardImgUrl(datajson.data.avatar) })
  }
  const [cardImgUrl, setCardImgUrl] = useState("https://i.pinimg.com/564x/a0/d5/c9/a0d5c9af2eee2970a6eea591fade8271.jpg")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [email, setEmail] = useState("")
  const [dataArray, setDataArray] = useState({})
  return (
    <>
      <div className="container d-flex my-3">
        <div className="display-4 mx-auto d-inline">CV Screener</div>
      </div>
      <div className="container-fluid my-3">
        <Card  cardImgUrl={cardImgUrl} firstName={firstName} lastName={lastName} email={email} />
      </div>
      <div className="container d-flex justify-content-center flex-md-row flex-lg-row flex-sm-column flex-xs-column " >

        {
          dataArray?.data && dataArray.data.map((e) => {
            return <Buttongrp id={e.id} key={e.id} getSingleData={getSingleData} />
          })
        }
      </div>
    </>
  );
}

export default App;
