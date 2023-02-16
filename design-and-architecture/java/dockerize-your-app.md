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


### Working with files when you have "fat jar"
If you want to load file from jar, you can't do it the same way you load it from file system.
But inside jar file there is no filesystem, so although spring-boot build resources folder into jar, you can't access it same way as you access file.
Instead you should use resource & streams.
We would run our jar using following command `mvn clean install && cd target && java -jar demo-0.0.1-SNAPSHOT.jar`
Let's see 3 examples:
```
try {
    File inputFile = new File("src/main/resources/data.txt");
    BufferedReader reader = new BufferedReader(new FileReader(inputFile));
    System.out.println(reader.readLine());
} catch (IOException ex) {
    log.error("Failed to read file", ex);
    System.exit(-1);
}
```
You will get
```
java.io.FileNotFoundException: src/main/resources/data.txt (No such file or directory)
```

We can try to use another approach
```
File inputFile = new ClassPathResource("data.txt").getFile();

# but still we got error
java.io.FileNotFoundException: class path resource [data.txt] cannot be resolved to absolute file path because it does not reside in the file system: jar:file:/home/diman/Downloads/demo/target/demo-0.0.1-SNAPSHOT.jar!/BOOT-INF/classes!/data.txt
```

Yet if you change the code to stream, it would finally work
```
Resource resource = new ClassPathResource("data.txt");
BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream()));
```

If you definately need file, you can always convert input stream into file
```java
            Resource resource = new ClassPathResource("data.txt");
            InputStream inputStream = resource.getInputStream();
            File inputFile = File.createTempFile("data2", ".txt");
            inputFile.deleteOnExit();
            try (FileOutputStream out = new FileOutputStream(inputFile)) {
                IOUtils.copy(inputStream, out);
            }
            BufferedReader reader = new BufferedReader(new FileReader(inputFile));
            System.out.println(reader.readLine());
```