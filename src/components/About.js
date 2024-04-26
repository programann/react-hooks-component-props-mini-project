import React from "react";

export function About({about,image}){
    return(
        <>
        <aside>
            <img src={image ||  "https://via.placeholder.com/215"} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
        </>
    )
}
export default About;