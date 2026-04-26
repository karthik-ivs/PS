# Use a base image with Java JDK
FROM openjdk:21-ea-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the target directory into the container
COPY target/departmentAPI-0.0.1-SNAPSHOT.jar departmentapi.jar

# Expose the port your Spring Boot application runs on (default is 8080)
EXPOSE 8080

# Run the Spring Boot application using java -jar
CMD ["java", "-jar", "departmentapi.jar"]
