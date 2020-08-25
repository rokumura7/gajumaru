FROM ubuntu:16.04

RUN apt-get update
RUN apt-get -y install openjdk-8-jdk

VOLUME /tmp

RUN mkdir /app
WORKDIR /app

ENV JAR_TARGET "gajumaru_api-0.0.1-SNAPSHOT.jar"

ENTRYPOINT ["sh","-c","java -jar build/libs/${JAR_TARGET}"]