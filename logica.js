// Cargar los datos JSON desde el archivo alumnos.json
fetch('estudiantesDatos.json')
    .then(response => response.json())
    .then(data => {
        const faltanExponer = document.getElementById('faltanExponer');
        const yaExpusieron = document.getElementById('yaExpusieron');

        data.forEach(alumno => {
            const listItem = document.createElement('li');
            listItem.textContent = alumno.grupo;

            if (alumno.exposicion === 'true') {
                listItem.addEventListener('click', () => {
                    yaExpusieron.appendChild(listItem);
                });
                faltanExponer.appendChild(listItem);
            } else {
                listItem.addEventListener('click', () => {
                    faltanExponer.appendChild(listItem);
                });
                yaExpusieron.appendChild(listItem);
            }
        });
    })
    .catch(error => console.error('Error al cargar datos JSON:', error));




