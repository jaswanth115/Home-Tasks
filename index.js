import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards"
import "./index.css"
import sdata from "./Sdata"



ReactDOM.render(
  <>
  <h1>List Of top rated Netflix Series in 2022</h1>
    <Card imgscr= {sdata[0].imgsrc}
      title={sdata[0].title1}
      sname = {sdata[0].name}
      link= {sdata[0].links}
    />
    <Card imgscr= {sdata[1].imgsrc}
      title={sdata[1].title1} 
      sname= {sdata[1].name}
      link= {sdata[1].links}
      />
    <Card imgscr= {sdata[2].imgsrc}
      title= {sdata[2].title1} 
       sname= {sdata[2].name} 
      link= {sdata[2].links}
      />
    <Card imgscr= {sdata[3].imgsrc}
      title= {sdata[3].title1} 
      sname= {sdata[3].name}
      link= {sdata[3].links}
      />
    <Card imgscr= {sdata[4].imgsrc}
      title= {sdata[4].title1} 
      sname= {sdata[4].name} 
      link= {sdata[4].links}
     />
     <Card imgscr= {sdata[5].imgsrc}
      title= {sdata[5].title1} 
      sname= {sdata[5].name} 
      link= {sdata[5].links}
     />
      <Card imgscr= {sdata[6].imgsrc}
      title= {sdata[6].title1} 
      sname= {sdata[6].name} 
      link= {sdata[6].links}
      />
      <Card imgscr= {sdata[7].imgsrc}
      title= {sdata[7].title1} 
      sname= {sdata[7].name} 
      link= {sdata[7].links}
    />
  </>,
  document.getElementById('root')
);