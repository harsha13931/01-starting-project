import Selectedbutton from "./tabbutton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Tabs from "./tabs";

export default function Example (){
    const [setvalue, selectsetvale]=useState();

    function clickhandle(selectbutton){
      selectsetvale(selectbutton);
  }

  let tablecontent=<p> Please select topic</p>
  if (setvalue){
    tablecontent=<div id="tab-content">

    <h1>
    {EXAMPLES[setvalue].title}
    </h1>
    <p>
    {EXAMPLES[setvalue].description}
    </p>
    <pre>
      <code>
      {EXAMPLES[setvalue].code}
      </code>
    </pre>

  </div>
  }
return (
      <section id="examples">
        
        <Tabs
                        // coustom  we use elememt={menu}
         //for in built
        buttons={
          
        <>
        <Selectedbutton value={setvalue === "Luffy"} onClick={() => clickhandle('Luffy')}>Luffy</Selectedbutton>
          <Selectedbutton value={setvalue === "Zoro"}onClick={() => clickhandle('Zoro')}>Zoro</Selectedbutton>
          <Selectedbutton value={setvalue === "Nami"}onClick={() => clickhandle('Nami')}>Nami</Selectedbutton>
          <Selectedbutton value={setvalue === "Usoop"}onClick={() => clickhandle('Usoop')}>Usoop</Selectedbutton>
          </>

        }></Tabs>
          {/* {!setvalue && <p> select char</p> }
          {setvalue && (
            <div id="tab-content">

              <h1>
              {EXAMPLES[setvalue].title}
              </h1>
              <p>
              {EXAMPLES[setvalue].description}
              </p>
              <pre>
                <code>
                {EXAMPLES[setvalue].code}
                </code>
              </pre>

            </div>
            )} */}

          {tablecontent}

        </section>

);          
}