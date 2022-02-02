# youtube-pesquisa

### Clique aqui para o [Demo](https://giovanepolese.github.io/youtube-pesquisa/public/index.html)

## Sobre
Tela de busca de artistas e bandas. Submete busca usando as APIs do Youtube, onde iremos buscar por um determinado artista ou banda para termos acesso aos vídeos do Youtube retornados pela busca.


## Objetivos
- [x]  Utilizar '@font-face' para os ícones;
- [x]  Um HTML escrito da maneira mais semântica possível (HTML5/5.1)
- [x]  CSS3/4 - Com um pre processador de CSS (a escolha fica a seu critério, mas por aqui utilizamos SASS)
- [x]  Mobile first e layout responsivo
- [x]  Também ver a utilização de dependency managers (npm, webpack)
- [x]  Automação de tasks com gulp
- [ ]  Testes unitários
- [x]  Alguma metodologia para definição e organização do seu código CSS
- [ ]  Aplicação de animações em css quando possível e tome cuidado com a performance da sua animação :)
- [x]  Ver o código rodando live (Bucket estático S3, Heroku, Firebase Hosting)
- [ ]  Componentização e extensibilidade dos componentes Javascript


## Instalação e Execução
Você precisa primeiramente ter instalado o NodeJS (>= 14.17.6), e então:

```sh
git clone https://github.com/GiovanePolese/youtube-pesquisa.git
```

Passo 1:
```sh
cd youtube-pesquisa
```

Passo 2:
```sh
npm install
```

Passo 3:
```sh
npm run serve
```
Após rodar o ```npm run serve``` se você estiver em localhost, acesse o browser inserindo o 
[localhost:8080](http://localhost:8080).


## Gulp
Para execução da task de compilação dos .sass e minificação dos .css execute o comando:

```sh
gulp styles
```

Para execução da task de compilação dos scripts e minificação dos .js execute o comando:

```sh
gulp scripts
```

Para execução das tasks ```gulp styles``` e  ```gulp scripts``` em paralelo execute o comando:

```sh
gulp default
```

## Estrutura
```
├───public
└───src
    ├───scripts
    └───styles
```