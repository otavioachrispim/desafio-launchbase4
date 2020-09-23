# 💻Desafio - Site de aulas particulares 

Desafio da sequência de criação de um site de aulas particulares📚. 

## Header

Criação de um header com dois links: Teachers e Students.

## Card do Professor

Criar um card(em duas seções: imagem e detalhes) para apresentação do professor utilizando o browser-sync, contendo as seguintes informações:
- Imagem randômica de uma coleção de professores (utilize a api do unsplash);
- Nome completo;
- Idade;
- Grau de escolaridade (ex.: Doutorado);
- Tipo de aula (presencial ou à distância);
- Acompanhamento (ex.: Matemática e Física);
- Desde (data de cadastro na plataforma)

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

## Apresentação, edição e formatação dos dados de um professor
Criar uma rota(show) para apresentação dos dados do professor e uma rota(edit) para edição dos dados cadastrados, formatando corretamente para exibição em HTML.

### Show

Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `show` para buscar e retornar o professor a partir do `id` fornecido na rota. Os seguintes dados precisam ser formatados:

- Idade: Crie um arquivo `utils.js` que exporta uma função chamada `age`. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
- Grau de escolaridade: crie uma função `graduation` no arquivo `utils.js`. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: **Ensino Médio Completo** para o valor **medio** do `select`);
- Acompanhamento: Utilize o método `split` da string para gerar um array com as matérias que o professor leciona;
- Desde: Utilize o constructor `Intl` e seus métodos para gerar uma data no formato `dia/mes/ano`.

Ao fim da apresentação dos dados, crie um link que irá redirecionar para a rota de edição dos dados cadastrados.

## HTTP: PUT e DELETE

Implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.

## Listagem de professores
Listar todos os professores salvos no arquivo `json` e apresentá-los em formato de tabela.

### Listagem

Crie uma rota para repassar para o arquivo de listagem os dados dos professores salvos no arquivo `json`.

### Tabela

Crie um arquivo que irá mostrar os dados dos professores em formato de tabela. Utilize `Nome completo`, `Acompanhamento` e `Ação` como cabeçalhos.

## Estruturando estudantes

Reaproveitar para os estudantes toda a estrutura já criada para os professores. Além disso, deve implementar a lógica do menu ativo.

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

### Criando Banco de dados

Utilizando a ferramenta postbird, crie **através de queries** um banco de dados chamado **my_teacher** e uma tabela com o nome de **teachers** que possua os seguintes campos:

- id: INT e PRIMARY KEY;
- avatar_url: TEXT e NOT NULL;
- name: TEXT e NOT NULL;
- birth_date: TIMESTAMP e NOT NULL;
- education_level: TEXT e NOT NULL;
- class_type: TEXT e NOT NULL;
- subjects_taught: TEXT e NOT NULL;
- created_at: TIMESTAMP e NOT NULL.

### Refatorando o Código

Após preparar o banco de dados, é preciso refatorar a sua aplicação para utilizá-lo. Você deve fazer as seguintes alterações:

- Utilizar a nova estrutura de pastas (src, app e lib);
- Corrija nos arquivos os caminhos relativos que precisar;
- Utilize nos arquivos da pasta `controllers` a nova forma de exportar.

### Configurando BD na aplicação

Por fim, instale a biblioteca `pg` e crie o arquivo de configuração do seu banco de dados (em uma pasta **config**) utilizando o `Pool`. Não esqueça de passar os dados necessários (**user, password, host, port e database**) na hora de instanciar (**new**) o Pool.

### Inserindo dados

No método `post`, construa uma query usando `INSERT` que crie um novo registro no banco de dados.

### Buscando dados

No método `index`, construa uma query usando `SELECT` que retorne todos os registros do banco de dados. Ordene esses resultados pelo nome de forma crescente.

### Criando Model

As operações com o banco de dados não devem ficar no controller, por isso crie um model que contenha os cinco métodos:

- `all`: Buscar todos os registros;
- `create`: Criar um registro;
- `find`: Buscar apenas um registro a partir do id informado;
- `update`: Atualiza um registro a partir do id informado;
- `delete`: Remove um registro a partir do id informado;

### Atualizando dados

Crie um método `update` no model. Nesse método, construa uma query utilizando `UPDATE`, `SET` e `WHERE` que atualiza um registro do banco de dados a partir do id informado.

### Removendo dados

Crie um método `delete` no model. Nesse método, construa uma query utilizando `DELETE` e `WHERE` que remova um registro do banco de dados a partir do id informado.

### Refatorando students

Refatore o controller de estudantes utilizando as mesmas ideias aplicadas no controller de professores.

### Relacionamentos

Adicione um campo `teacher_id` na tabela de estudantes. Em seguida, nas páginas de cadastro e edição de estudantes adicione um campo select que lista todos os professores cadastrados. Por fim, na página de detalhe de um estudante, crie um campo que mostre o o nome do professor do aluno.

### Filtros

Na página de listagem de professores, adicione um input de texto para os filtros e um botão para retornar uma nova listagem com os dados filtrados. No método `index` do controller, faça uma verificação para checar se existem filtros passados por `query params`. Se existir, crie um método `findBy` no model que retorna todos os professores que que tiverem o nome ou a área de atuação em comum com o filtro passado (utilize o `ILIKE`).

### Backend

Adicione no método `index` do controller de professores o tratamento dos campos `page` e `limit` que serão transmitidos via `query params`. Além disso, faça o cálculo do `offset` a ser passado para a query. Por fim, crie um novo método `paginate` no model que deve implementar toda a query já existente (com filter e order) e também adicionar a paginação (utilize `LIMIT` e `OFFSET`).

### Frontend

Crie um algoritmo que realize a paginação dos resultados da seguinte forma:

- As duas primeiras e últimas páginas sempre devem ser apresentadas (ex: 1, 2, 45 e 46 de um total de 46 pags.);
- Caso existam mais de 7 páginas, as intermediárias selecionadas devem ser apresentadas juntamente com seu sucessor e antecessor (ex.: 1, 2, ..., 12, 13 (selecionada), 14, ..., 23, 24);
- Só apresente as reticências se elas representarem um grupo de 2 páginas ou mais (ex.: 1, 2, 3 (sem reticências), 4, 5 (selecionada), 6, ...(pags 7 e 8), 9, 10).

Em seguida, implemente na query do método `paginate` no model de professor a lógica da paginação:

- realizar o `count` de todos os registros de professores (utilize uma `subquery`);
- aplicar os filtros tanto na `query` de busca dos professores quanto na `subquery` de `count`.

Por fim, utilize o `scripts.js` para renderizar no `html` (não faça no `nunjucks`) a paginação ao final da listagem (não esqueça que as reticências não devem ser links).

### Ajustes finais

Para finalizar, basta:

- Estilizar a paginação;
- Preservar o filter quando a página for alterada;
- Implementar no front dos estudantes a paginação (siga a mesma ideia aplicada nos professores).
