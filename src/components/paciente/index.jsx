function Paciente({ paciente }) {

    const Escala =(escala) => {
        var escala = escala.toString() == 4 ? 'Segunda' : 'Terça';
        return escala;
    }

    const Nascimento = (nasc) => {
        var nasc = new Date(nasc);
        var dia = (nasc.getDate() + 1).toString();
        var dia = dia.length < 2 ? '0' + dia : dia;
        var mes = (nasc.getMonth() + 1).toString();
        var mes = mes.length < 2 ? '0' + mes : mes;
        let ano = nasc.getFullYear();

        let dataCompleta = dia + '/' + mes + '/' + ano;
        return dataCompleta;
    }
    return (
        <div>
            <strong>{paciente.NOME}</strong>
            <p><strong>CNS: </strong>{paciente.CNS}</p>
            <p><strong>Escala: </strong>{Escala(paciente.ESCALA)}</p>
            <p><strong>Turno: </strong>{paciente.TURNO}</p>
            <p><strong>Prontuario: </strong>{paciente.CODIGO}</p>
            <p><strong>Nascimento: </strong>{Nascimento(paciente.NASC)}</p>
            <p><strong>Telefone: </strong>{paciente.CELULAR}</p>
            <p><strong>Rg: </strong>{paciente.RG}</p>
            <p><strong>Órgão Emissor: </strong>{paciente.ORGAOEMISS}</p>
            <p><strong>Img: </strong><code>{paciente.NUM_REG}</code></p>
        </div>
    )
}

export default Paciente