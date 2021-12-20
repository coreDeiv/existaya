# Existaya - Prueba tecnica Desarrollador Web Frontend

#### Bienvenido a la prueba tecnica

Actualmente el proyecto tiene dos formas de poder ser visualizada

1. Daesde tu PC personal accediendo por medio de la terminal de comandos
2. Ingresando al link del site desplegado en Github

-------------------------------------------------------------------------

1. FORMA 1:

    - Clone el proyecto desde la rama _"Main"_

    ```git
    git clone https://github.com/coreDeiv/existaya.git
    ```

    - Una vez clonado el repositorio ingrese a la carpeta del proyecto

    ```cmd
    cd .\existaya\
    ```

    - Una vez clonado es necesario que se cambie a la rama _"Master"_, ya que la rama Main a pesar de ser la principal es tan solo la de desarrollo
    
    ```git
    git checkout master
    ```

    - Recuerde traer todos los cambios de dicha rama, para evitar cualquier conflicto o error al desplegar

    ```git
    git pull origin master
    ```

    - Para el siguiente paso es necesario que verifique que cuenta con la ualtima version de NodeJs, si es asi, corra el comandoa _"npm install"_

    ```node
    npm install
    ```

    - Ya finalizada la instalacion de los paquetes necesarios (especificados en `package.json` y `gulpfile.js`) corremos el ultimo comando para mostrar el proyecto de manera local

    Opcion 1: `gulp watch`<br>
    Opcion 2: `ng start`

    - Finalmente disfrute del desarrollo

2. FORMA 1: 

    - Si en algun momento presenta problemas para correr el proyecto de manera local por medio de la terminal, he dejado adicional un enlace a un github pages con el contenido final del proyecto, puede ingresar a el por medio de este [link](https://coredeiv.github.io/existaya/build/index.html)

### Posdata:

Agradeceria de parte de Existaya un respuesta, aunque sea una negativa, no me dejen con la duda, por favor.

**_Muchas gracias_**