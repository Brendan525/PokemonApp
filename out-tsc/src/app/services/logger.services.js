export class Logger {
    constructor() {
        this.info = (msg) => console.log(`[${new Date()}]: ${msg}`);
        this.warn = (msg) => console.warn(`[${new Date()}]: ${msg}`);
        this.error = (msg) => console.error(`[${new Date()}]: ${msg}`);
    }
}
//# sourceMappingURL=logger.services.js.map