FROM nginx:1.14.1-alpine

ENV BUSINESS_WEB_HOME=/home/business/business-web
ENV PATH=${BUSINESS_WEB_HOME}/bin:${PATH}

COPY dist/business ${BUSINESS_WEB_HOME}/html
COPY bin  ${BUSINESS_WEB_HOME}/bin
COPY conf ${BUSINESS_WEB_HOME}/conf

RUN rm -f /etc/nginx/conf.d/* && \
  ln -s ${BUSINESS_WEB_HOME}/conf/business-web.conf /etc/nginx/conf.d/ && \
  sed -i -e '/^user /s/^.*$/daemon off;/' -e '/worker_processes /s/1/auto/' /etc/nginx/nginx.conf

EXPOSE 8080/tcp

WORKDIR ${BUSINESS_WEB_HOME}

ENTRYPOINT ["business-web"]
