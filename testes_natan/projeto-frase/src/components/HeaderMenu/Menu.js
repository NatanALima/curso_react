export default function Menu() {
    const menuList = [{id: 1,
                 name: "Frases",
                 linkRef: "./Frases.index"},
                {id: 2,
                 name: "Autores",
                 linkRef: "./Autores.index"},
                {id: 3,
                 name: "Sobre",
                 linkRef: "./Sobre.index"},
                 {id: 4,
                    name: "Novo",
                    linkRef: "./Novo.index"}];
    return(
        <ul>
            {menuList.map(menu => {
                return (
                    <li key={menu.id}>
                        <a href={menu.linkRef}>{menu.name}</a>
                    </li>
                )
            })}
            
        </ul>
    )
}