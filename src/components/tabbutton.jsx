export default function Selectedbutton({children,value,...props}){

    
    return (
        <li>
            <button className={value ? 'active' : undefined} {...props} >{children}</button>
        </li>
    );

}


  