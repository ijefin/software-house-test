<?php
// Função para deletar um registro de uma tabela no banco de dados SQL Server
function deletarRegistro($conexao, $tabela, $condicao) {
    $query = "DELETE FROM $tabela WHERE $condicao";

    if (sqlsrv_query($conexao, $query)) {
        echo "Registro deletado com sucesso!";
    } else {
        echo "Erro ao deletar o registro: " . print_r(sqlsrv_errors(), true);
    }
}

// Exemplo de uso
$serverName = "nome-do-servidor";
$connectionOptions = array(
    "Database" => "nome-do-banco",
    "Uid" => "nome-de-usuario",
    "PWD" => "senha-do-usuario"
);

// Estabelece a conexão
$conexao = sqlsrv_connect($serverName, $connectionOptions);

// Verifica a conexão
if (!$conexao) {
    die(print_r(sqlsrv_errors(), true));
}

// Exemplo de chamada da função
deletarRegistro($conexao, 'NomeDaTabela', 'coluna_id = 1');

// Fecha a conexão
sqlsrv_close($conexao);
?>
