import { CORE_CONCEPTS } from "../data";
import Concept from "./Concept"

export default function CoreConcept(){
    return (
        <>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>
            CORECONCEPTS
          </h2>
          <ul>
            {CORE_CONCEPTS.map((items) => <Concept key={items}{...items} />)}
            {/* <Concept {...CORE_CONCEPTS[0]}/>
            <Concept {...CORE_CONCEPTS[1]}/>
            <Concept {...CORE_CONCEPTS[2]}/>
            <Concept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        </>
    );
}