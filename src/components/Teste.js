function Teste({ mensagem, texto, informacao }) {
    return (
        <div className="bg-orange-600">
            <h1 className="text-white text-4xl">{mensagem}</h1>
            <p>{texto}</p>
            <span>{informacao}</span>
        </div>
    )
}

export default Teste