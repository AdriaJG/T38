export interface User {
    id:             number;
    password:       string;
    username:       string;
    email:          string;
    nombre:         string;
    role:           string;
    listaLibros:    any[];
    prestamos:      any[];
    comentarios:    any[];
    puntuaciones:   any[];
    chatsEnviados:  any[];
    chatsRecividos: any[];
    token?:         string;
}
