# blintz

## Bibliotecas Usada.
- Nesse projeto foi usado somente o framework [vue.js](https://vuejs.org/v2/guide/), sem nenhum outro complemento nem mesmo para fazer requisições.

## Requisição.
- Para a requisição do dados do projeto usei a biblioteca nativa *'[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)'* do javascript

## Layout.
![Imagem do Layout](https://i.ibb.co/L8PjYQq/Screenshot-21.png)

## Estruturação.
- Esse projeto usei a estruturação comum do Vue cli, e acrescentei uma pasta chamada *'Pages' e 'services'* para renderizar somente a pagina ali:
  - A estrutura se da assim:
  - Componentes
    ```
    * card
    * Menu
    ```   
  - e ainda dentro de componentes a 1 unico component vue, solto ali, para montar o restante do layout da pagina.

- Pasta *'Services'*
  - aqui tem a parte da requisição para api usando fetch e async/await que optei para usar ao inves de then e catch do padrao comun do uso do fetch
  - o outro aqui é para remover os acentos das palavras para a consulta, no input de pesquisa.
  
 * Estrutura 
 
 ![Imagem de estrutura](https://i.ibb.co/KsKmgPx/Screenshot-22.png)
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
