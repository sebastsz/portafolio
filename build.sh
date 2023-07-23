mvn package
mv target/portafolio-0.0.1-SNAPSHOT.jar target/app.jar
docker image build -t portafolio:1.0.0 .
