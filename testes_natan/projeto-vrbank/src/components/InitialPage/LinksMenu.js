export default function LinksMenu({linksInfo}) {
    return(
        <div class="linksGerais">
            {linksInfo.map(link => {
                return(
                    <a href={link.refLink}>{link.refName}</a>
                )
            })}
        </div>

    )
}