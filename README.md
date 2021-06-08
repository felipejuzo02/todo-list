# Todo-List
Um projeto simples feito para treinar!

# O motivo de ser feito
Foi feito para entender um pouco melhor sobre o DOM e um primeiro projeto em JS puro

# O que eu aprendi
- Nesse projeto eu aprendi como pegar algum elemento de HTML no Js
- Mudar a classe de CSS a partir de uma ação
- Sobre Data Attributes
- Hierarquia DOM
- Criação de módulos para melhor separação do projeto
- Um pouco sobre 'Same-Origin policy'

# Como eu fiz
Primeira parte, foi a estruturação do projeto no Figma, onde defini as cores, estilo, fonte, locais, entre outros.

![Figma](https://user-images.githubusercontent.com/79236683/121215989-df0f5a00-c856-11eb-9d86-91ced0f2dbd9.png)


Após definir meu layout no figma, estruturei todo meu HTML e CSS, deixando a página apenas estática até o momento.

Depois da página estática, comecei marcando os locais onde iria utilizar com os Data Attributes.

Depois de marcado, criei meu arquvio JS, e nele fiz os seguintes passos:
- Criei uma Arrow Function para adicionar a tarefa;
- Nela passei o `preventDefault()` no evento para  ao adicionar a tarefa não recarregar a página;
- Criei duas constantes, uma para pegar meu `input` e outra a `ul` aonde ficará a lista;
- Fiz a verificação para ver se o input está vazio;
- Criei duas constantes, uma para criar meu elemento `li` e outra uma `div` (que ficará os icones);
- Adicionei uma classe no meu elemento `li` criado;
- Coloquei dentro da `li`, um template string com o valor do input;
- Adicionei no HTML e depois limpei o texto do `input`;
- Adicionei minha `div` de icones dentro da minha lista;
- Dentro da `div` foi adicionado os icones através de métodos;
- As funções de criação estão dentro de `components`, para assim separar melhor meu código.



# Guia de cores / fontes
Fonte:
- Cairo

Cores:
- Principal (Verde): #00B292
- Fundo (Cinza, Preto - Usando degrade): #1d1d1d e #000000
- Labels e alguns textos (Branco): #FFFFFF


# Resultado final
- Desktop:

![Desktop-pronto](https://user-images.githubusercontent.com/79236683/121219681-55fa2200-c85a-11eb-81c9-7125fe59da9d.png)

- Mobile:

![Mobile-pronto](https://user-images.githubusercontent.com/79236683/121219720-61e5e400-c85a-11eb-82fe-0c964dd89f9a.png)


# Alguns ajustes a serem feito
- Melhorar a responsividade;
- Ver uma melhor forma de realizar a ação de adicionar a lista;


# Planejamento
- Realizar esse todo-list em VUE.js

