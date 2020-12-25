
import React, { useState } from 'react'
const api="https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"

 


function App() {

 const [currency,setCurrency]=useState({});
  fetch(`${api}`)
  .then(res=>res.json())
  .then(result=> {
    setCurrency(result);
    console.log(result);
   });
  


  return (
    <div className="app">
      <main>
      <div className="main-text">قیمت خرید و فروش ارز</div>
      {(typeof currency.sana != "undefined") ? (
      <div>
        <div className="main-page">
       <div>
        <div class="title">{currency.sana.data[0].title}</div>
        <div class="buy"> {currency.sana.data[0].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[16].title}</div>
        <div class="sell"> {currency.sana.data[16].p}</div>
        </div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[1].title}
        </div>
        <div class="buy"> {currency.sana.data[1].p}</div> </div>
        <div>
        <div class="title"> {currency.sana.data[17].title}</div>
        <div class="sell"> {currency.sana.data[17].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title">{currency.sana.data[2].title}</div>
        <div class="buy"> {currency.sana.data[2].p}</div></div>
        <div>
        <div class="title">  {currency.sana.data[18].title}</div>
        <div class="sell"> {currency.sana.data[18].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title">  {currency.sana.data[3].title}</div>
        <div class="buy"> {currency.sana.data[3].p}</div></div>
        <div>
        <div class="title">  {currency.sana.data[19].title}</div>
        <div class="sell"> {currency.sana.data[19].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[4].title}</div>
        <div class="buy"> {currency.sana.data[4].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[20].title}</div>
        <div class="sell"> {currency.sana.data[20].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[5].title}</div>
        <div class="buy"> {currency.sana.data[5].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[21].title}</div>
        <div class="sell"> {currency.sana.data[21].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[6].title}</div>
        <div class="buy"> {currency.sana.data[6].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[22].title}</div>
        <div class="sell"> {currency.sana.data[22].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[7].title}</div>
        <div class="buy"> {currency.sana.data[7].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[23].title}</div>
        <div class="sell"> {currency.sana.data[23].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[8].title}</div>
        <div class="buy"> {currency.sana.data[8].p}</div></div>
        <div>
        <div class="title">{currency.sana.data[24].title}</div>
        <div class="sell"> {currency.sana.data[24].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[9].title}</div>
        <div class="buy"> {currency.sana.data[9].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[25].title}</div>
        <div class="sell"> {currency.sana.data[25].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[10].title}</div>
        <div class="buy"> {currency.sana.data[10].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[26].title}</div>
        <div class="sell"> {currency.sana.data[26].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title">{currency.sana.data[11].title}</div>
        <div class="buy"> {currency.sana.data[11].p}</div></div>
        <div>
        <div class="title">{currency.sana.data[27].title}</div>
        <div class="sell"> {currency.sana.data[27].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title">  {currency.sana.data[12].title}</div>
        <div class="buy"> {currency.sana.data[12].p}</div></div>
        <div>
        <div class="title">  {currency.sana.data[28].title}</div>
        <div class="sell"> {currency.sana.data[28].p}</div></div>
        <hr className="line"/>

        <div>
        <div class="title"> {currency.sana.data[13].title}</div>
        <div class="buy"> {currency.sana.data[13].p}</div></div>
        <div>
        <div class="title"> {currency.sana.data[29].title}</div>
        <div class="sell"> {currency.sana.data[29].p}</div></div>
        
       
        </div>
         </div>
         ) : ('')}
      </main>
      
    </div>
  );
}

export default App;
