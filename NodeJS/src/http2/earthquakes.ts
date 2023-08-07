
function dateFormat(date: number) {
    const newDate = new Date(date);
    return newDate.toLocaleString();
}

const getEarthquakes = async (magnitude: string) => {

    try {

        if (magnitude !== "1.0" && magnitude !== "2.5" && magnitude !== "4.5" && magnitude !== "all" && magnitude !== "significant"){
            throw new Error("Magnitude must be one of the following: '1.0', '2.5', '4.5', 'all' or 'significant");
        }

            const response = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_hour.geojson`);
            const data = await response.json();

            console.log("*****************************");
            console.log(data.metadata.title);
            console.log("     ---------------------     ");
            console.log("total: ", data.metadata.count);
            console.log("status: ", data.metadata.status);
            console.log("     ---------------------     ");
            console.log(dateFormat(data.metadata.generated));
            console.log("==============================");

            for (const { properties, geometry } of data.features) {
                console.log(properties.title);
                console.log(dateFormat(properties.time));
                console.log(`Magnitud: ${properties.mag}\nEstatus: ${properties.status}\nTipo: ${properties.type}\nLugar: ${properties.place}
Coordenadas: ${geometry.coordinates[0]}, ${geometry.coordinates[1]}\nInfo: ${properties.url}\nDetalles: ${properties.detail}`);
                console.log("==============================");
            }

    } catch (error) {
        console.log("Error fetching data: \n", error);
    }

}

getEarthquakes("all");