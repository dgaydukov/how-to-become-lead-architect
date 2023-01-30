# Java app docker

You can use docker with spring boot to dockerize your app.
Add `Dockerfile` to your root directory with following
```
FROM openjdk:11-jre-slim
COPY target/demo-0.0.1-SNAPSHOT.jar /usr/local/demo.jar
EXPOSE 8080
RUN mkdir /var/log/springboot
ENTRYPOINT java -jar /usr/local/demo.jar > /var/log/springboot/app.log
```
Here we assume that you would build your app locally, and inside docker you would only copy this jar
Also keep in mind that your jar should be executable, add this to your build plugin
```
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <executable>true</executable>
    </configuration>
</plugin>
```
Then you can use following commands to build and launch your app
```
# run java app locally from jar (to make sure that your jar is executable)
java -DUSER_COUNT=10 -DUSER_SUBJECT=topic -jar target/demo-0.0.1-SNAPSHOT.jar
# build docker image
docker build -t springbootapp .
# run image with env variables (this will overwrite the volume in host, if there is something there already)
docker run -d \
-e USER_COUNT=10 \
-e USER_SUBJECT=topic \
--volume=/home/diman/Downloads/springboot:/var/log/springboot -p 80:8080 springbootapp
```