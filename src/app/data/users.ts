import {User} from "../models/user";

export const users: User[] = [
    {   id: 1,
        login: 'admin',
        password: 'admin',
        name: 'Veaceslav',
        lastName: 'Popov',
        gender: 'M',
        age: 23,
        religion:'Orthodox Christianity',
        other: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {   id: 2,
        login: 'user1',
        password: 'user1',
        name: 'Andrei',
        lastName: 'Popovici',
        gender: 'M',
        age: 27,
        other: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {   id: 3,
        login: 'user2',
        password: 'user2',
        name: 'Andreea',
        lastName: 'Popa',
        gender: 'F',
        age: 33,
        other: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {   id: 4,
        login: 'user3',
        password: 'user3',
        name: 'Maria',
        lastName: 'Croitoru',
        gender: 'F',
        age: 20,
        other: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    }
]
