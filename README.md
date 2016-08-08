# VNDispatch

## Run without Docker

    ```
    - At first you must install NodeJS and NPM
    - Next, install Loopback:
      $ (sudo) npm install -g strongloop
    - Install gulp:
      $ (sudo) npm install --global gulp-cli
    - Git VNDispatch repository:
      $ git clone http://gitlab.lungvang.com/lungvang/PAAS
    - Build and run app:
      $ cd PAAS
      $ (sudo) npm install
      $ gulp build
    - Start the app:  $ node .
    - Open your brower with http://localhost:3000
    - Test admin page: http://localhost:3000/admin
    - Test command center page: http://localhost:3000/cc

    ```

## Run with Docker

    ```
    1) Access Root
    2) Go to app directory
    3) docker build -t APP-NAME .
    5) docker run --name MONGO-NAME -d mongo
     	(more info visit https://hub.docker.com/_/mongo/ )
    4) docker run --name CONTAINER-NAME --link MONGO-NAME:mongo -p PORT:3000 -d APP-NAME
    5) Then go to 0.0.0.0:PORT to view the app

    # In Windows, go to IP-ADDRESS:PORT to view the app
      with IP-ADDRESS is the ip address of your virtual machine

  # To access mongo container
      - docker exec -it MONGO-NAME mongo




    ```

To the default database of mongo datasource is db, if you want to change it, specify the datasource.json in folder server.
For docker user, specify the datasource.json in folder file-for-docker
