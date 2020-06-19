import {Injectable} from '@angular/core';

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
}

const MENU = [
    {state: 'personal/cadastro', name: 'Cadastro Personal', type: 'link', icon: 'av_timer'},
    {state: 'personal/listPersonal', name: 'Lista de Personais', type: 'link', icon: 'view_list'},
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENU;
    }
}
