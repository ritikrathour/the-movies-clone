import "./style.css";
const Footer = ()=>{
    let footerLinks = ["Terms Of Use", "Privacy Policy", "About","Blog","FAQ"];
    let footerSocialLinks = ["fab fa-facebook", "fab fa-instagram","fab fa-youtube","fab fa-linkedin","fab fa-whatsapp"]
    return(
        <>
            <div className="container">
                <ul className="footer_links_list">
                    {
                       footerLinks.map((link,index)=>{
                            return(
                                <li className="item" key={index}>
                                    <a href="#" className="link">{link}</a>
                                </li>
                            )
                       }) 
                    }
                </ul>
                <p className="footer__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, facilis accusantium. Sunt voluptates, dignissimos, beatae dolores quisquam earum nulla, deserunt sapiente ratione molestiae alias corrupti accusantium ut. Consequatur, iusto voluptatibus.
                </p>
                <ul className="footer__social__links">
                    {
                        footerSocialLinks.map((socio,index)=>{
                            return(
                                <li className="item" key={index}>
                                    <a href="#" className="link"><i className={socio}/></a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> 
        
        </>
    )
}
export default Footer;