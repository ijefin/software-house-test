<?php
// Criação da função que gera intervalo entre duas datas
function gerarDatas($dataInicio, $dataFim) {
    $datas = [];

    // Validando se a data inicial é maior que a data final
    $dataInicioObj = new DateTime($dataInicio);
    $dataFimObj = new DateTime($dataFim);

    if ($dataInicioObj > $dataFimObj) {
        return ["Erro: Data inicial é maior que a data final"];
    }

    // Gerando as datas no intervalo
    $dataAtual = $dataInicioObj;

    while ($dataAtual <= $dataFimObj) {
        $datas[] = $dataAtual->format('Y-m-d');
        $dataAtual->add(new DateInterval('P1D'));
    }

    return $datas;
}

// Uso
$dataInicio = '2024-01-01';
$dataFim = '2025-01-05';

$intervaloDeDatas = gerarDatas($dataInicio, $dataFim);

// Resultado no console
print_r($intervaloDeDatas);
?>