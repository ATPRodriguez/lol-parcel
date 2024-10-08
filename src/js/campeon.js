export default class Campeon {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {                          
        this.id = data.id;              // Id del campeon
        this.title = data.title.toUpperCase();
        this.skin = "";
        this.icon = ""        // Titulo del campeon
        this.splash = "";  // Splash del campeon
    }

    setSplash(splash) {
        this.splash = splash;
    }

    setIcon(icon) {
        this.icon = icon;
    }

    setSkin(skin) {
        this.skin = skin;
    }
}