FROM mysql:5

ENV MYSQL_DATABASE mean
ENV MYSQL_ROOT_PASSWORD=somePassword

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/