# **DashBoard site blindado**

## **Intro**


Deploy CI/CD [Heroku] = https://dashboard-siteblindado.herokuapp.com/

![alt text](https://badgen.net/github/license/micromatch/micromatch) 


## **Guia**

### - Recupere os dados
Dados recuperados através dos Mocks já disponibilizados.
também foi adicionado um segundo Mock referente a Loja onde pode se consultar os produtos.

Dados criado com formato de JSON, segue modelo.

```
export const ProductsList = [
  {
    id: 1,
    category: 'blindagem_sites',
    name: 'Blindagem de Sites',
    img: 'https://www.siteblindado.com/images/blindagem-site-blindado.jpg',
    description:
      'Os serviços de Blindagem de Site e Blindagem Premium possibilitam a utilização do Selo Site Blindado, que atesta aos clientes e usuários que a loja identifica e corrige as vulnerabilidades, tornando a experiência de compra mais segura para seus clientes. O Selo Site Blindado é utilizado pelas principais lojas virtuais do país.',
    btn: 'https://www.siteblindado.com/solucoes/blindagem/',
  },
```



### - reducers/sagas/actions para utilizar os dados da api
Criado um novo Reducer de Cart com intuito de gerenciar o estado do carrinho.



### - dashboard
Feito uma Dashboard para visualização dos dados.

Segue preview da Dashboard.

![alt text](https://i.ibb.co/yWJw6gB/Captura-de-Tela-2020-11-04-a-s-14-58-57.png)


### - Vitrine de produtos.

Criado um listview de produtos com opcao de adicionar ao carrinho.
utilizado o json acima para listar os produtos.

 - Segue preview da loja:

  
![alt text](https://i.ibb.co/vLc8H9Q/Captura-de-Tela-2020-11-04-a-s-14-59-10.png)


## **Quick-start**

1. Instalar Yarn
`npm install yarn -g`

3. Startar Servidor Dev
`yarn start`

4. Rodar Build de Produção
`yarn build`

5. Rodar Suite de Testes
`yarn test`

6. Rodar Linter
`yarn lint`

7. Rodar o Formatador de Código
`yarn format`

8. Inicializar Ferramenta de Inspeção de Bundle
`yarn bundle-profile:analyze`

## **Configuraçõees**

* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./config/webpack.config.js)
* [Editor Config](./.editorconfig)
* [EsLint Config](./.eslintrc.js)
