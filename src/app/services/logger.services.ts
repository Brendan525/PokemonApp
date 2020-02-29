export class Logger {
    info = (msg:string): void => console.log(`[${new Date()}]: ${msg}`);
    warn = (msg:string): void => console.warn(`[${new Date()}]: ${msg}`)
    error = (msg:string): void => console.error(`[${new Date()}]: ${msg}`)
    }