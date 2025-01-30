import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jsPDF from "jspdf";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import Box from './Box';
import Bill from './billing';
import tandoori from "./assets/tandoori.jpg"
import chicken65 from "./assets/65.jpg"
import kabab from "./assets/kabab.jpg"
import shawarma from "./assets/shawarma.jpg"
import paneershawarma from "./assets/paneershawarma.avif";
import chickenbiriyani from "./assets/chickenbiriyani.jpg"
import burger from "./assets/burger.jpg"
import pizza from "./assets/pizza.jpg"
import pepperoni from "./assets/pepperoni.jpg"
import sandwich from  "./assets/sandwich.jpg"
import grillchicken from "./assets/grillchicken.jpg"
import friedrice from "./assets/friedrice.jpg"
import popcornchicken from "./assets/popcornchicken.jpg"
import chickennoodle from "././assets/chickennoodle.jpg"
import lavacake from "./assets/lavacake.jpg"
import blackforest from "./assets/blackforest.jpg"
import redvelvet from "./assets/redvelvet.avif"
import brownie from "./assets/brownie.jpg"
import rasamalai from "./assets/rasamalai.jpg";
import plum from "./assets/plum.png"
import choco from "./assets/choco.jpg"
import badam from "./assets/badam.jpg"
import rose from "./assets/rose.jpg"
import blackcurrent from "./assets/blackcurrent.webp"
import musk from "./assets/musk.png";
import coffee from "./assets/coffee.webp"
import lemon from "./assets/lemon.jpg"
import chocomilk from "./assets/chocomilk.avif"
import coffeee from "./assets/coffeee.webp"
import tea from "./assets/tea.jpg"




function App() {
  const [count, setCount] = useState(true);
  const [filt, setfilt] = useState("");
  const [srch, setserch] = useState(true);
  const [clk, setclk] = useState(0);
  const [arr,setarr]= useState([]);
  const [total,settotal]=useState(0);


    
const pdfgen=()=>{
  let bb=120;
 let newarr=arr;
 let newttl=total;
 console.log(newarr);
 console.log(newttl);
    var doc=new jsPDF('portrait','px','a4','false');
    // doc.addImage(logo,'png',65,30,500,500)
    // doc.addPage();
    doc.setTextColor('brown')
    doc.setFontSize('28')
    doc.setFont('calbri','bold')
    doc.text(155,50,'Food and Drinks')
    doc.text(20,90,'Items')
    
    doc.text(180,90,'Quantity')
    
    doc.text(290,90,'Price')
    
    doc.text(370,90,'Cost')
    doc.setFontSize('16')
    doc.setFont('calbri','normal')
    doc.setTextColor('black')
    for(let i=0;i<arr.length;i++){
        
        doc.text(20,bb,arr[i].name)
        doc.text(220,bb,`${arr[i].countno}`)
        doc.text(300,bb,arr[i].prc)
        doc.text(380,bb,`${arr[i].amt}`)
     
        bb=bb+20;
    }
   
    doc.setFontSize('28')
    doc.setFont('calbri','bold')
    doc.setTextColor('brown')
    doc.text(20,bb,'----------------------------------------------------------')
    bb=bb+30;
    doc.text(20,bb,'Total')
    doc.text(370,bb,`${total}`)
    bb=bb+40;
    doc.text(170,bb,'Thank You')
    
    doc.save('Bill.pdf')
}




  const data=[{name:"Chicken65",price:"250",imag:chicken65},
    {name:"Chicken Tandoori",price:"750",imag:tandoori},
    {name:"Chicken kabab",price:"400",imag:kabab},
    {name:"Chicken Shawarma",price:"130",imag:shawarma},
    {name:"Panner Shawarma",price:"100",imag:paneershawarma},
    {name:"Chicken Biriyani",price:"249",imag:chickenbiriyani},
    {name:"Chicken burger",price:"245",imag:burger},
    {name:"Chicken pizza",price:"849",imag:pizza},
    {name:"Pepperoni pizza",price:"900",imag:pepperoni},
    {name:"Sandwich",price:"140",imag:sandwich},
    {name:"Grill chicken",price:"580",imag:grillchicken},
    {name:"Chicken fried rice",price:"130",imag:friedrice},
    {name:"Popcorn chicken",price:"320",imag:popcornchicken},
    {name:"Chicken noodle",price:"130",imag:chickennoodle},
    {name:"Lava cake",price:"400",imag:lavacake},
    {name:"Black forest",price:"400",imag:blackforest},
    {name:"Red velvet",price:"500",imag:redvelvet},
    {name:"Brownie",price:"200",imag:brownie},
    {name:"Rasamalai",price:"150",imag:rasamalai},
    {name:"Plum cake",price:"350",imag:plum},
    {name:"CHocolate cake",price:"400",imag:choco},
    {name:"Badam milk",price:"80",imag:badam},
    {name:"Rose milk",price:"80",imag:rose},
    {name:"Blackcurrent",price:"130",imag:blackcurrent},
    {name:"Musk melon",price:"100",imag:musk},
    {name:"Cold coffee",price:"110",imag:coffee},
    {name:"Lemon juice",price:"40",imag:lemon},
    {name:"Chocolate milshake",price:"130",imag:chocomilk},
    {name:"Coffee",price:"20",imag:coffeee},
    {name:"Tea",price:"15",imag:tea},
    
  ]

  const hid=()=>{
    
    setCount(!count);
  }
  const inphid=()=>{
    // alert();
    setserch(!srch);
  }  


  const clck=(event)=>{
    let ttl=0
    
    let t=true;
    let val=0;
    for(let i=0;i<arr.length;i++){
      
        if(event.nm==arr[i].name){
          t=false;
          val=i;
          // break;
          

        }
        
    }
 
    if(t==true){
    const newdata={name:`${event.nm}`,countno:1,amt:`${event.pr}`,prc:`${event.pr}`}
  
    setarr(info=>[...info, newdata])
    
    for(let i=0;i<arr.length;i++){
      ttl+=(arr[i].amt*1);
      
      }
      ttl+=(event.pr*1);
      settotal(ttl);
      setclk(clk+1);
  }else{

    
    let ammt=(arr[val].countno+1)*event.pr;
      updatebill(event.name,arr[val].countno++,arr[val].amt=ammt,event.pr)
      
      for(let i=0;i<arr.length;i++){
        ttl+=(arr[i].amt*1);
        
        }
        settotal(ttl);
  }
  
  
}
const updatebill=(name,cou,amount)=>{
  setarr(arr.map(ar=>ar.name===name?{...ar,countno:cou,amt:amount}:ar));
}
// const updateamt=(name,amount)=>{
//   setarr(arr.map(ar=>ar.name===name?{...ar,amt:cou}:ar));
// }
// searching
  const store=(event)=>{
    setfilt(event.target.value);
    
  }
  // let a={name:`${clk}`};
  console.log(arr)
  console.log(clk)
  
  return (
    <div className={"overall"}>
      {/* ------------------------------- */}
      <nav>
        <section className={"navbar"}>
        <h2>Foods and Drinks</h2>
        </section>
        <section className={"navbar"}>
          <section className={"inp"}>
          <input id={"filter"} onChange={store} className={` ${srch==true?"inphid":null}`} type={'search'}/>
          </section>
          

          <button onClick={inphid}><FaMagnifyingGlass /></button>
          <button onClick={hid}><button className= {clk>0 ? "show":null}>{clk}</button><IoDocumentText /></button>


        </section>

      </nav>
      {/* ----------------------------------------------------- */}
      <section className={"outbox"}>
      {data.filter((detail)=>{
        return filt.toLowerCase()===''? detail:detail.name.toLowerCase().includes(filt);
      }).map((detail)=>(<Box clck={clck} nm={detail.name} pr={detail.price} im={detail.imag}/>))}
      
      <div className={`list ${count==true?"list1":null}`} >
      <h4>Billing Details------------</h4>
      <section >
      <table>
            <tr>
          <td>Items</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Cost</td>
        </tr>
        </table>
      {arr.map((para)=>(<Bill  nm={para.name}  amt={para.amt} count={para.countno} pr={para.prc}/>))}
      
      
       
      </section>
      <section className={"total"}>
      <table>
            <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>{total}</td>
        </tr>
        </table>
       <button onClick={pdfgen}>
        Save Bill
       </button>
       <button onClick={hid}>
        Close
       </button>
      </section>
      </div>
      </section>
    </div>
  )
}

export default App
