export default class MapLoader {
    static async load(path){
        const response = await fetch(path);
        return await response.json();
    }
}
