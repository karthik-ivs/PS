# Use a base image with Java JDK
FROM openjdk:24-ea-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the target directory into the container
COPY target/compound-interest-microservice-0.0.1-SNAPSHOT.jar compound.jar
# Expose the port your Spring Boot application runs on (default is 8080)
EXPOSE 8080

# Run the Spring Boot application using java -jar
CMD ["java", "-jar", "compound.jar"]
