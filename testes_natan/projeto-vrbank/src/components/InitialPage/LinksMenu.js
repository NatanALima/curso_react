
export default function LinksMenu({linksInfo, linkStyle}) {
    return(
        <div className={linkStyle.linksGerais}>
            {linksInfo.map((link, index) => {
                return(
                    <a href={link.refLink} key={index}>{link.refName}</a>
                )
            })}
        </div>

    )
}