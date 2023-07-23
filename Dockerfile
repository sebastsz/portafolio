# Use an existing image as the base image
FROM openjdk:11-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the application jar file to the container
COPY target/app.jar /app/app.jar

# Set environment variables
ENV JAVA_OPTS=""

# Run the jar file
CMD ["java", "-jar", "app.jar"]
