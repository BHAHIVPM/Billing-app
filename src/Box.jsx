import { useState } from 'react'


export default function Box(item) {
  const [count, setCount] = useState(0)

  return (
            <div onClick={()=>item.clck(item)} className={"box"}>
                <img src={item.im}/>
                <section>
                    <p>₹{item.pr}.00</p>
                    <section className={"name"}>
                    
                        <h4>{item.nm}</h4>
                    </section>
                </section>
            </div>

  )
}