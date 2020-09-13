# 💻Desafio - Site de aulas particulares 

Desafio da sequência de criação de um site de aulas particulares📚. 

## Header

Criação de um header com dois links: Teachers e Students.

### Estilização

- Aplicação de um background;
- Utilizar a fonte Roboto;
- Utilizar o conceito de `box-sizing` e o seletor `+` para centralizar os seus links;
- Utilizar o `after` e o `transition` para aplicar um efeito visual nos links quando o mouse passar por cima.

## Card do Professor

Criar um card(em duas seções: imagem e detalhes) para apresentação do professor utilizando o browser-sync, contendo as seguintes informações:
- Imagem randômica de uma coleção de professores (utilize a api do unsplash);
- Nome completo;
- Idade;
- Grau de escolaridade (ex.: Doutorado);
- Tipo de aula (presencial ou à distância);
- Acompanhamento (ex.: Matemática e Física);
- Desde (data de cadastro na plataforma)

### Estilização

- A imagem deve ocupar 40% do card e os detalhes 60%.
- Utilize o seletor `first-child` e `border-top` para estilizar as divisórias entre os items.
- Utilize o seletor `nth-child()` para estilizar o label (ex.: Desde) e valor (ex.: 02/02/2020) do item.
- Utilize o `keyframes` e o `animation` para fazer uma animação do card.
- Utilize o `box-shadow` para aplicar uma sombra no card.

## Formulário e Rota de cadastro do Professor

Criar um formulário de cadastro do professor e uma rota do tipo post que irá realizar as validações e salvar os seguintes dados enviados:
- Avatar url: campo do tipo `url` para cadastrar o caminho da imagem do professor;
- Nome completo: campo do tipo `text`;
- Data de nascimento: campo do tipo `date`;
- Grau de escolaridade: campo do tipo `select` ([documentação do select](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select)) que deve conter as opções **Ensino Médio Completo, Ensino Superior Completo, Mestrado e Doutorado**;
- Tipo de aula: campo do tipo `radio` que deve conter as opções **Presencial e À distância**;
- Área de atuação: campo do tipo `text` que deve conter as informações das matérias que o professor pode lecionar.

## Rotas
Crie um arquivo `teachers.js` na raiz do seu projeto e faça a validação de todos os campos utilizando `keys` e o constructor `Object`. Além disso, utilize o método `writeFile` da lib `fs` para gerar um arquivo json que irá conter um array de todos os professores cadastrados. Ao final desses dois processos (validação e salvamento), faça o redirecionamento para a página de listagem de professores.

### Estilização
Estilização própria.

## Apresentação, edição e formatação dos dados de um professor
Criar uma rota(show) para apresentação dos dados do professor e uma rota(edit) para edição dos dados cadastrados, formatando corretamente para exibição em HTML.

### Show

Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `show` para buscar e retornar o professor a partir do `id` fornecido na rota. Os seguintes dados precisam ser formatados:

- Idade: Crie um arquivo `utils.js` que exporta uma função chamada `age`. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
- Grau de escolaridade: crie uma função `graduation` no arquivo `utils.js`. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: **Ensino Médio Completo** para o valor **medio** do `select`);
- Acompanhamento: Utilize o método `split` da string para gerar um array com as matérias que o professor leciona;
- Desde: Utilize o constructor `Intl` e seus métodos para gerar uma data no formato `dia/mes/ano`.

Ao fim da apresentação dos dados, crie um link que irá redirecionar para a rota de edição dos dados cadastrados.

### Edição

Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `edit` para buscar e retornar o professor a partir do `id` fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo `fields.njk`). Por fim, crie uma função chamada `date` no arquivo `utils.js`. Essa função deve retornar a data no formato `yyyy-mm-dd` para a correta exibição no input do tipo `date` no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método `splice` da string).

### Estilização

Estilização própria.

## HTTP: PUT e DELETE

Implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.

### PUT

Criar uma rota para receber os dados do formulário de edição e propagar no arquivo `json`. Lembre de sobrescrever o método POST do form para PUT (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `update` para buscar e retornar o professor a partir do `id` fornecido na rota. Faça a busca pelo professor a partir do `id` e atualize no arquivo `json` os dados que foram alterados (utilize o constructor `Number` para formatar o id como número). Por fim, redirecione para a página de apresentação dos dados de um professor (show).

### DELETE

Criar um botão na página de apresentação dos dados do professor. Esse botão irá chamar uma rota para deletar o professor do arquivo `json`. Lembre de sobrescrever o método POST do form para DELETE (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `delete` e gere um array com todos os professores, exceto o que deve ser removido (`filter`). Por fim, redirecione para a página de listagem dos professores.

### Estilização

Estilização própria

## Listagem de professores
Listar todos os professores salvos no arquivo `json` e apresentá-los em formato de tabela.

### Listagem

Crie uma rota para repassar para o arquivo de listagem os dados dos professores salvos no arquivo `json`.

### Tabela

Crie um arquivo que irá mostrar os dados dos professores em formato de tabela. Utilize `Nome completo`, `Acompanhamento` e `Ação` como cabeçalhos.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- A tabela deve ocupar todo o espaçamento do cartão;
- Os cabeçalhos e os valores devem estar centralizados;
- A imagem deve ser apresentada antes do nome. Deve ter formato circular e tamanho de 40px;
- O campo `Acompanhamento` deve apresentar as matérias lecionadas de forma separada (array, assim como na página de apresentação de dados de um professor).

## Estruturando estudantes

Reaproveitar para os estudantes toda a estrutura já criada para os professores. Além disso, deve implementar a lógica do menu ativo.

### Estrutura

Reaproveite o código obedecendo os seguintes padrões:

- Crie um arquivo `students.js` com a mesma estrutura que o `teachers.js`. Insira ambos os arquivos dentro uma pasta `controllers`;
- Crie um array `students` vazio dentro do arquivo `json`;
- Crie uma pasta `students` com a mesma estrutura de views que os professores;
- Crie as rotas dos estudantes seguindo a mesma estrutura dos professores.

### Menu Ativo

Crie um arquivo `scripts.js` e implemente a lógica do menu ativo utilizando o `location` e o `includes` da string. Além disso, implemente um botão de cadastro nas páginas de listagem de professores e estudantes.

### Formulário

Faça os ajustes de professores para estudantes no formulário de criação. Além disso, remova os campos:

- Grau de escolaridade;
- Tipo de aula;
- Acompanhamento;
- Desde.

e adicione os campos:

- Email: campo do tipo `email`;
- Ano escolar: campo do tipo `select` com todas as opções de anos escolares entre 5º ano do ensino fundamental e 3º ano do ensino médio;
- Carga horária semanal: campo do tipo `number` que indica a quantidade de horas de aulas particulares que o aluno irá ter por semana.

### Salvando os dados

Faça os ajustes de professores para estudantes no método `post` do arquivo `students.js`. Além disso, implemente a nova estratégia de `id` (evitar repetição).

### Apresentação

Faça os ajustes de professores para estudantes na página de apresentação dos dados de um estudante. Além disso, faça duas alterações no arquivo `utils.js`:

- Altere o retorno da função `date` para `day`, `month`, `year`, `iso` e `birthDay` (lembre de fazer o ajuste no método `edit` para buscar o `.iso`).
- Crie uma função chamada `grade` que retorna os dados formatados a partir do valor selecionado no select (ex.: o valor 1EF representa **1º Ano do Ensino Fundamental**).

### Edição

Faça os ajustes de professores para estudantes na página de edição dos dados de um estudante. Implemente o campo `Aniverśario` onde é apresentado o dia e o mês do aniversário do estudante. Além disso, altere tanto no `edit.njk` dos professores quanto no dos alunos a `url` da seção de avatar. Utilize o campo `avatar_url` cadastrado em vez da api do unsplash.

### Remoção

Crie um arquivo `confirm.njk` e importe ele no seu arquivo `edit.njk`. Esse arquivo deve ser responsável por escutar o evento (`addEventListener`) de submit do form de remoção e solicitar pela confirmação do usuário (`confirm`). Caso o usuário cancele a remoção, deve-se cancelar o form (método `preventDefault`).

### Listagem

Faça os ajustes de professores para estudantes na página de listagem dos dados de um estudante. Remova a coluna de `Acompanhamento` e adicione as de `Email` e `Ano escolar`.

### Estilização

Estilização própria.
