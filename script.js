const getDragonBallCharacters = async () => {
    try {
        const response = await fetch('https://stephen-king-api.onrender.com/api/book/19');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        console.log('Fetched data:', data); // Log completo de los datos obtenidos
        const cardsParent = document.getElementById('cards');

        // Verificar y manejar la estructura de datos correcta
        if (data && data.data && data.data.villains && Array.isArray(data.data.villains)) {
            data.data.villains.forEach(villain => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2">${villain.name}</h2>
                            <p class="text-gray-700">URL: <a href="${villain.url}" target="_blank">${villain.url}</a></p>
                        </div>
                    </div>
                `;
                cardsParent.appendChild(card);
            });
        } else {
            console.error('No villains found in the fetched data');
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
};

getDragonBallCharacters();



const getF1Drivers = async () => {
    try {
        const response = await fetch('https://f1api.dev/api/drivers');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        console.log('Fetched data:', data); // Log completo de los datos obtenidos
        const cardsParent = document.getElementById('card'); // Cambiado el ID a 'card'

        // Verificar y manejar la estructura de datos correcta
        if (data && data.drivers && Array.isArray(data.drivers)) {
            data.drivers.forEach(driver => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2">${driver.name} ${driver.surname}</h2>
                            <p class="text-gray-700">Nationality: ${driver.nationality}</p>
                            <p class="text-gray-700">Birthday: ${driver.birthday}</p>
                            <p class="text-gray-700">URL: <a href="${driver.url}" target="_blank">${driver.url}</a></p>
                        </div>
                    </div>
                `;
                cardsParent.appendChild(card);
            });
        } else {
            console.error('No drivers found in the fetched data');
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
};

getF1Drivers();



const getCommandCodes = async () => {
    try {
        const response = await fetch('https://api.atlasacademy.io/export/JP/nice_command_code.json');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        console.log('Fetched data:', data);
        const cardsParent = document.getElementById('command-codes'); 

        if (data && Array.isArray(data)) {
            data.forEach(code => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2">${code.name}</h2>
                            <p class="text-gray-700">ID: ${code.id}</p>
                            <p class="text-gray-700">Effect: ${code.effect}</p>
                            <p class="text-gray-700">Detail: ${code.detail}</p>
                        </div>
                    </div>
                `;
                cardsParent.appendChild(card);
            });
        } else {
            console.error('No command codes found in the fetched data');
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
};

getCommandCodes();





