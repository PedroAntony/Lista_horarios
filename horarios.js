const horarios = [
    { fila: "SAC COMERCIAL", canal: "Voz", horarioSemana: "7:00 - 21:50", horarioSabado: "7:00 - 21:50", horarioDomingo: "7:00 - 21:50" },
    { fila: "INDIQUE UM AMIGO", canal: "Chat", horarioSemana: "8:00 - 21:40", horarioSabado: "8:00 - 21:40", horarioDomingo: "8:00 - 21:40" },
    { fila: "AGENDAMENTO INSTALAÇÃO", canal: "Chat", horarioSemana: "8:00 - 17:00", horarioSabado: "8:00 - 12:00", horarioDomingo: "FECHADO" },
    { fila: "AGENDAMENTO REPARO", canal: "Chat", horarioSemana: "8:00 - 17:48", horarioSabado: "8:00 - 17:48", horarioDomingo: "8:00 - 17:48" },
    { fila: "COMERCIAL B2C", canal: "Chat", horarioSemana: "8:00 - 21:40", horarioSabado: "8:00 - 21:40", horarioDomingo: "8:00 - 21:40" },
    { fila: "COMERCIAL CORPORATIVO (B2B)", canal: "Chat", horarioSemana: "8:00 - 18:00", horarioSabado: "8:00 - 17:00", horarioDomingo: "FECHADO" },
    { fila: "COMERCIAL CORPORATIVO GRANDES EMPRESAS", canal: "Chat", horarioSemana: "8:00 - 18:00", horarioSabado: "FECHADO", horarioDomingo: "FECHADO" },
    { fila: "REDES FTTH", canal: "Chat", horarioSemana: "7:00 - 19:00", horarioSabado: "7:00 - 18:00", horarioDomingo: "8:00 - 18:00" },
    { fila: "SAC 5G", canal: "Chat", horarioSemana: "8:00 - 21:40", horarioSabado: "8:00 - 21:40", horarioDomingo: "8:00 - 21:40" },
    { fila: "SAC BRISAMOVEL", canal: "Chat", horarioSemana: "8:00 - 17:40", horarioSabado: "8:00 - 14:00", horarioDomingo: "FECHADO" },
    { fila: "SUPORTE 5G N2", canal: "Voz", horarioSemana: "8:00 - 17:00", horarioSabado: "8:00 - 12:00", horarioDomingo: "FECHADO" },
    { fila: "SUPORTE REGIONAL", canal: "Chat", horarioSemana: "7:00 - 19:00", horarioSabado: "7:00 - 19:00", horarioDomingo: "8:00 - 18:00" },
    { fila: "SUPORTE VAREJO", canal: "Voz", horarioSemana: "0:00 - 23:59", horarioSabado: "0:00 - 23:59", horarioDomingo: "0:00 - 23:59" },
    { fila: "RETENÇÃO 5G E BACKOFFICE GC", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 21:50", horarioDomingo: "FECHADO" },
    { fila: "AGENDAMENTO INSTALAÇÃO", canal: "Voz", horarioSemana: "8:00 - 17:00", horarioSabado: "8:00 - 12:00", horarioDomingo: "FECHADO" },
    { fila: "AGENDAMENTO REPARO", canal: "Voz", horarioSemana: "8:00 - 17:48", horarioSabado: "8:00 - 17:48", horarioDomingo: "8:00 - 17:48" },
    { fila: "BACKOFFICE RETENCAO", canal: "Voz", horarioSemana: "8:00 - 18:20", horarioSabado: "8:00 - 18:20", horarioDomingo: "8:00 - 18:20" },
    { fila: "BRISA MÓVEL", canal: "Voz", horarioSemana: "8:00 - 17:40", horarioSabado: "8:00 - 14:00", horarioDomingo: "FECHADO" },
    { fila: "COBRANCA REVERSAO", canal: "Voz", horarioSemana: "8:00 - 18:00", horarioSabado: "8:00 - 18:00", horarioDomingo: "FECHADO" },
    { fila: "COBRANÇA", canal: "Voz", horarioSemana: "7:00 - 21:50", horarioSabado: "7:00 - 21:50", horarioDomingo: "7:00 - 21:50" },
    { fila: "COBRANÇA 5G", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 21:50", horarioDomingo: "8:00 - 21:50" },
    { fila: "COBRANÇA CORPORATIVO", canal: "Voz", horarioSemana: "7:00 - 18:00", horarioSabado: "7:00 - 18:00", horarioDomingo: "FECHADO" },
    { fila: "COMERCIAL 5G", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 21:50", horarioDomingo: "8:00 - 21:50" },
    { fila: "BACKOFFICE MAPAS/CORREÇÃO", canal: "Voz", horarioSemana: "8:00 - 17:00", horarioSabado: "8:00 - 17:00", horarioDomingo: "FECHADO" },
    { fila: "SUPORTE ATIVO", canal: "Voz", horarioSemana: "8:00 - 20:40", horarioSabado: "8:00 - 20:40", horarioDomingo: "08:00 - 20:40" },
    { fila: "BACKOFFICE LOJA", canal: "Voz", horarioSemana: "8:00 - 20:40", horarioSabado: "8:00 - 20:40", horarioDomingo: "FECHADO" },
    { fila: "BACKOFFICE BRISAMOVEL", canal: "Voz", horarioSemana: "8:00 - 17:40", horarioSabado: "8:00 - 14:00", horarioDomingo: "FECHADO" },
    { fila: "POS VENDAS", canal: "Voz", horarioSemana: "8:00 - 17:00", horarioSabado: "8:00 - 14:20", horarioDomingo: "FECHADO" },
    { fila: "OUVIDORIA", canal: "Voz", horarioSemana: "8:00 - 18:00", horarioSabado: "8:00 - 17:00", horarioDomingo: "FECHADO" },
    { fila: "COMERCIAL B2C", canal: "Voz", horarioSemana: "7:00 - 21:50", horarioSabado: "7:00 - 21:50", horarioDomingo: "7:00 - 21:50" },
    { fila: "COMERCIAL CORPORATIVO (B2B)", canal: "Voz", horarioSemana: "8:00 - 18:00", horarioSabado: "8:00 - 16:00", horarioDomingo: "FECHADO" },
    { fila: "COMERCIAL CORPORATIVO GRANDES EMPRESAS", canal: "Voz", horarioSemana: "8:00 - 18:00", horarioSabado: "8:00 - 17:00", horarioDomingo: "FECHADO" },
    { fila: "INDIQUE UM AMIGO", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 21:50", horarioDomingo: "8:00 - 21:50" },
    { fila: "REDES FTTH", canal: "Voz", horarioSemana: "7:00 - 19:00", horarioSabado: "7:00 - 18:00", horarioDomingo: "8:00 - 18:00" },
    { fila: "RENTABILIZAÇÃO", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 19:50", horarioDomingo: "FECHADO" },
    { fila: "RETENÇÃO", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 21:50", horarioDomingo: "FECHADO" },
    { fila: "RETENÇÃO LOJA E BACKOFFICE RETENÇÃO", canal: "Voz", horarioSemana: "8:00 - 18:00", horarioSabado: "8:00 - 17:00", horarioDomingo: "FECHADO" },
    { fila: "SAC", canal: "Voz", horarioSemana: "7:00 - 21:50", horarioSabado: "7:00 - 21:50", horarioDomingo: "7:00 - 21:50" },
    { fila: "SAC 5G", canal: "Voz", horarioSemana: "8:00 - 21:50", horarioSabado: "8:00 - 21:50", horarioDomingo: "8:00 - 21:50" },
    { fila: "SAC COBRANCA", canal: "Voz", horarioSemana: "7:00 - 21:50", horarioSabado: "7:00 - 21:50", horarioDomingo: "7:00 - 21:50" },
    { fila: "SUPORTE B2G (CFTV)", canal: "Voz", horarioSemana: "0:00 - 23:59", horarioSabado: "0:00 - 23:59", horarioDomingo: "0:00 - 23:59" },
    { fila: "SUPORTE ISP", canal: "Voz", horarioSemana: "0:00 - 23:59", horarioSabado: "0:00 - 23:59", horarioDomingo: "0:00 - 23:59" },
    { fila: "SUPORTE REGIONAL", canal: "Voz", horarioSemana: "7:00 - 19:00", horarioSabado: "7:00 - 19:00", horarioDomingo: "8:00 - 18:00" }
];
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];
    const horariosVoz = horarios.filter(horario => horario.canal == "Voz");
    const horariosChat = horarios.filter(horario => horario.canal == "Chat");
    let canal;
    let fila;
    const select = document.querySelector('.canal')
    const input = document.querySelector('.fila')
    const horarioAtual = new Date();
    let diaDaSemana = horarioAtual.getDay();
    let dia;

    function verificaStatusFila(horarioFila){
        if(horarioFila == "FECHADO"){
            horarioFila = "24:00 - 00:00"
        }
        const horasFila = horarioFila.split(' - ')

        const horarioInicial = horasFila[0].split(':')
        const horarioFinal = horasFila[1].split(':')

        const horaAtual = horarioAtual.getHours();
        const minutoAtual = horarioAtual.getMinutes();

        const horaInicial = horarioInicial[0]
        const minutoInicial = horarioInicial[1]
        const horaFinal = horarioFinal[0]
        const minutoFinal = horarioFinal[1]

        if(horaAtual == horaInicial){
            if(minutoAtual > minutoInicial){
                return "Fila aberta"
            }else{
                return "Fila fechada"
            }
        }if(horaAtual > horaInicial){
            if(horaAtual == horaFinal){
                if(minutoAtual < minutoFinal){
                    return "Fila aberta"
                }else{
                    return "Fila fechada"
                }
            }if(horaAtual < horaFinal){
                return "Fila aberta"
            }else{
                return "Fila fechada"
            }
        }else{
            return "Fila fechada"
        }

        console.log(horaInicial, minutoInicial, horaFinal, minutoFinal, horaAtual, minutoAtual)
    }

    function preencherTabela(horarios) {
        const tbody = document.querySelector('.table_horarios tbody');
        tbody.innerHTML = '';
        // Percorre a array e adiciona cada objeto como uma linha na tabela
        horarios.forEach(dados => {
            console.log("Hoje é " + diasDaSemana[diaDaSemana]);

            if(diasDaSemana[diaDaSemana] == "Domingo"){
                dia = dados.horarioDomingo
            }else if(diasDaSemana[diaDaSemana] == "Sabado"){
                dia = dados.horarioSabado
            }else{
                dia = dados.horarioSemana
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${dados.fila}</td>
                <td>${dados.canal}</td>
                <td>${dados.horarioSemana}</td>
                <td>${dados.horarioSabado}</td>
                <td>${dados.horarioDomingo}</td>
                <td class="${verificaStatusFila(dia) == "Fila aberta" ? "green" : "red"}">${verificaStatusFila(dia)}</td>
            `;
            tbody.appendChild(tr);
            });
    }

    window.onload = preencherTabela(horarios)

    function atualizaCanal(){
        canal = select.value;
        if(canal == "Voz"){
            window.onload = preencherTabela(horariosVoz);
        }else if(canal == "Chat"){
            window.onload = preencherTabela(horariosChat);
        }else{
            window.onload = preencherTabela(horarios);
        }
    }

    select.addEventListener('change', atualizaCanal);

    input.addEventListener("input", function(e) {
        fila = input.value
        const horarioFila = horarios.filter(horario => horario.fila.includes(fila.toUpperCase()));
        window.onload = preencherTabela(horarioFila);
    });

  