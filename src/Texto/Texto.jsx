const Texto = ({image ,titulo, titulo2, texto1,}) => {
    return(
        <>
        <img className="image" src={image} alt={""} />
        <h1>{titulo}</h1>
        <h1>{titulo2}</h1>
        <p>{texto1}</p>
        </>
    )
}
export default Texto;