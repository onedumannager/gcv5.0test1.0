FROM fusuf/whatsasena:latest

RUN git clone https://github.com/myworkonlygbtes/gcv5.0test1.0 /root/gcv5.0test1.0
WORKDIR /root/gcv5.0test1.0/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
