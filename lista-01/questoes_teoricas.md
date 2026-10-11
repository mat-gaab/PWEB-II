1. a) Numa linguagem de tipagem estática, o tipo de cada variável, parâmetro e retorno é definido antes de o programa rodar, e esse tipo não muda. A verificação acontece em tempo de compilação (ou análise estática). O compilador confere se cada operação usa tipos compatíveis e recusa o programa se encontrar um erro, como somar um número com um texto.
   b) Performance: como os tipos são conhecidos antes da execução, o compilador gera código de máquina mais direto e otimizado, sem precisar descobrir o tipo dos dados na hora de rodar.
      Segurança: erros de tipo são encontrados antes de o programa ser executado, o que evita que cheguem ao usuário final. Também ajuda na documentação do código, no autocompletar das IDEs e na manutenção de projetos grandes.
   c) Na tipagem dinâmica, o tipo pertence ao valor e não à variável. A verificação é feita em tempo de execução, no momento em que cada operação acontece. Uma mesma variável pode guardar um número e depois um texto.
Os desafios de performance são:
Checar os tipos durante a execução gasta tempo extra.
O interpretador precisa descobrir como executar cada operação toda vez, porque o tipo pode ter mudado.
Fica mais difícil para o compilador otimizar o código.
Os valores costumam ocupar mais memória, pois carregam informação de tipo.
   d) Tipagem forte: a linguagem não faz conversões implícitas entre tipos incompatíveis e gera erro quando as operações misturam tipos. Em Python, "5" + 3 dá erro.
      Tipagem fraca: a linguagem converte tipos automaticamente (coerção) para tentar fazer a operação funcionar. Em JavaScript, "5" + 3 resulta em "53" e "5" - 3 resulta em 2.
   e) Linguagens híbridas permitem checagem estática na maior parte do código, mas oferecem um jeito de escapar dela quando necessário. C# tem o tipo dynamic, TypeScript tem o tipo any, e Python aceita type hints opcionais verificados por ferramentas externas. Assim o programador escolhe quanto de rigidez quer em cada trecho. A inferência de tipos permite que o compilador descubra sozinho o tipo de uma variável a partir do valor atribuído, sem o programador escrever o tipo.
   f) JavaScript tem tipagem dinâmica e fraca:

Dinâmica: não se declara o tipo da variável, e ela pode mudar de tipo ao longo do código (let x = 5; x = "texto";). O tipo é verificado só na execução, e o operador typeof informa o tipo atual.
Fraca: faz coerção automática entre tipos, como em "10" * 2, que resulta em 20, e 1 + "1", que resulta em "11".

Os tipos primitivos são number, string, boolean, undefined, null, bigint e symbol.
