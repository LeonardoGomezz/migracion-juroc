### Template Next@12.3.1

1. Clone el repositorio:
```console
git clone <url>
```  
2. Instale las dependencias:
```console
npm install
```
3. Elimine el archivo README.md
4. Elimina la relacion con el repositorio remoto para dejarle de hacer seguimiento:
- Primero lista las ramas remotas, por defecto es <b>origin</b>:
```console
git remote 
```
- Luego, para eliminar la rama en el repositorio local:
```console
git remote rm <nombre-del-repositorio-remoto> 
```
- Puedes volver a verificar que se elimino ejecutando el primer comando:
```console
git remote 
```

#### Nota: recuerda que esto solo elimina la referencia de seguimiento en tu repositorio local. La rama remota seguira existiendo en el repositorio de GitHub.
