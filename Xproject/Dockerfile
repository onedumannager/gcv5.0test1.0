FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ngmg2022/yugyk-nkj /root/yugyk-nkj
WORKDIR /root/yugyk-nkj/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
