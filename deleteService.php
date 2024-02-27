<?php
// Função para deletar um registro de uma tabela no banco de dados SQL Server
function deletarRegistro($conexao, $tabela, $id) {
    // Solicitar o ID se não for fornecido
    if ($id === null) {
        echo "Por favor, forneça o ID do registro que deseja deletar.\n";
        return;
    }

    // Evitar possíveis ataques de SQL injection utilizando prepared statements
    $query = "DELETE FROM $tabela WHERE id = ?";
    $params = array($id);

    $stmt = sqlsrv_prepare($conexao, $query, $params);

    if (sqlsrv_execute($stmt)) {
        echo "Registro com ID $id deletado com sucesso!\n";
    } else {
        echo "Erro ao deletar o registro: " . print_r(sqlsrv_errors(), true);
    }

    // Fechar a declaração preparada
    sqlsrv_free_stmt($stmt);
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
deletarRegistro($conexao, 'NomeDaTabela', 1); // Substitua 1 pelo ID desejado

// Fecha a conexão
sqlsrv_close($conexao);
?>
