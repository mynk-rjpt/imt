import React from "react"
var date =new Date();
var Today=date.getFullYear();
function Footer(){
    return <footer><p>Copyright @ Mayank {Today}</p></footer>;
}
export default Footer;