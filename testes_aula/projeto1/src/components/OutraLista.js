export default function OutraLista({itens}) {
    return (
        <>
            <h3>Lista de FrameWorks</h3>
            {itens.length > 0 ? (itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Itens não encontrados na lista!</p>
            )}
        </>
    )
}