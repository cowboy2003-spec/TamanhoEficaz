# Implementação dos mockups

Base: `tamanho-eficaz-site-v5.zip` fornecido pelo utilizador.
Especificação: prancha com Home V4, Empresa A/B, Serviços, Projetos, Internacional, Notícias e o estilo comum de Carreiras/Contactos.

## Home V4

`src/app/page.tsx` e `src/app/globals.css` mantêm exatamente os bytes do ZIP. O header e footer originais são usados na Home. Os novos estilos são limitados às classes `ref*` e `referenceSite`. A comparação visual com o ZIP teve zero diferenças de pixels em 1440 px e 390 px, tanto após a implementação como no servidor de produção. Os estilos V5 originais foram conservados em `v5-legacy.css` para as páginas sem mockup, incluindo Pedir proposta.

## Páginas

- Empresa: hero da Opção A; perfil com fotografia e estatísticas horizontais da B; bloco dividido de equipa da A; missão, visão e valores da B. Não inclui o banner “Metodologia. Equipas. Resultados.” da B nem as secções adicionais da versão anterior que colidem com esta composição. Os textos legíveis e as estatísticas seguem a referência; para corpo ilegível na prancha, conserva-se conteúdo fornecido no ZIP.
- Serviços: hero fotográfico e seis cartões, na ordem da referência. Cada cartão mantém acesso à página de detalhe existente.
- Projetos: hero, filtros e grelha com dois projetos e três fotografias por especialidade. Os dois projetos mantêm as suas páginas e galerias. As fotografias de especialidades abrem em modal; não se inventaram páginas de detalhe. A categoria Elétrica apresenta um estado vazio, pois o ZIP não fornece um projeto publicado correspondente.
- Internacional: Europa à noite, ligações dos quatro mercados ao Google Maps e secção dividida de projeto/parcerias.
- Notícias: composição clara, duas notícias e páginas de detalhe existentes. Datas e conteúdo editorial mantidos a partir dos dados fornecidos.
- Carreiras e Contactos são rotas distintas. Carreiras mantém formulário e ficheiro de candidatura; Contactos mantém formulário, telefone, e-mail e morada reais do projeto.
- Contactos: mapa regional local clicável que abre a pesquisa da morada exata no Google Maps. Não depende de uma API key nem de carregar um iframe de terceiros. O marcador representa Coimbra; a pesquisa Google Maps usa `R. Mercado 26, 3020-863 Souselas, Portugal`.
- Menu móvel, PT/EN, cookies e galerias existentes conservados. Chave duplicada “Missão” do dicionário V5 removida para permitir TypeScript/build.

## Imagens e fidelidade

As fotografias originais disponíveis no ZIP foram reutilizadas e recortadas por CSS. A imagem composta é uma referência reduzida: não contém os originais em resolução completa. Algumas cenas (soldadura, maquinaria, guindaste, projeto internacional e retrato de Carreiras) usam fotografias equivalentes do ZIP e não a fotografia exata da prancha. O utilizador autorizou procurar equivalentes na internet; Unsplash e Wikimedia responderam com bloqueio de proxy (403) nesta instância. Não foram inventados projetos, marcas ou fotografias geradas por IA.

Recursos públicos obtidos pela internet:

- `public/images/reference/earth-night.jpg`: textura de imagem noturna disponibilizada em [three-globe](https://github.com/vasturiano/three-globe/blob/c4e4f1fc24572161bea3a4dbfc5abed78b46ee09/example/img/earth-night.jpg), com a Europa recortada na composição SVG. O repositório é distribuído sob licença MIT.
- `public/images/reference/coimbra-map.svg`: mapa vetorial criado a partir de dados geográficos [Natural Earth](https://github.com/nvkelso/natural-earth-vector/tree/master/geojson), domínio público. Fontes: `ne_50m_admin_0_countries`, `ne_50m_admin_1_states_provinces_lines`, `ne_50m_rivers_lake_centerlines`, `ne_10m_populated_places_simple`. O ponto de Coimbra utiliza as coordenadas desse conjunto, sem inventar uma localização de edifício.

A prancha orientou cores, hierarquia, proporções e composição. Não se afirma igualdade pixel a pixel com a prancha para as páginas novas, dadas as substituições fotográficas e a resolução da referência.

## Verificação

- Instalação com `npm ci` e o lockfile do ZIP.
- TypeScript: `./node_modules/.bin/tsc --noEmit --incremental false`.
- Produção: `NEXT_TELEMETRY_DISABLED=1 npm run build`.
- Verificação no Chromium: sete rotas em desktop e em 390/768/1024 px; ausência de overflow horizontal e de erros JavaScript; seis links de serviços; filtros, estados vazios, modal e galeria existente; teclado Escape/setas; menu móvel; PT/EN; preferências de cookies; âncoras de formulários e ligação Google Maps com a morada existente.
- Home comparada em desktop e mobile com uma cópia limpa do ZIP, desativando apenas animações e indicador de desenvolvimento durante a captura.

Os formulários do ZIP continuam demonstrativos: não foi acrescentado um backend de envio. A ligação para Google Maps é real; o acesso ao serviço externo depende da rede do navegador. Todos os recursos visuais da implementação são locais: não são necessárias novas permissões de rede ou credenciais para executar o projeto.
