import { useState } from "react";

export default function Bill(a){


    return(
        <table>
            <tr>
          <td>{a.nm}</td>
          <td>X {a.count}</td>
          <td>{a.pr}</td>
          <td>{a.amt}</td>
          
          
        </tr>
        </table>
    )
}