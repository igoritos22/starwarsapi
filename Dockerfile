#NGINX image#
FROM nginx:latest

COPY ./site /usr/share/nginx/html/site

#Removendo arquivos existentes
RUN rm -rf /usr/share/nginx/html/50x.html && rm -rf /usr/share/nginx/html/index.html

#trabalhando dentro do diretorio html
WORKDIR /usr/share/nginx/html

#trazendo o conteudo da pasta site
RUN cp /usr/share/nginx/html/site/* -R .

RUN rm -rf /usr/share/nginx/html/site/