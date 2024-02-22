export default function Tabs({children,buttons,Element="menu"} ){
//    const Element=element; 
    return(
    <>

        <menu>
        <Element>{buttons}</Element>

        </menu>
        {children}
        </> 
       
    
    );
}