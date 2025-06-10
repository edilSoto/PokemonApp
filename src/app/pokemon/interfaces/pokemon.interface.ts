export interface Pokemon {
    name: string;
    sprite: Sprite;
    height: number;
    weight: number;
    types: string[];
    stats: Stat[];

}

interface Sprite {
    front: string;
    back: string;
    shinyFront: string;
    shinyBack: string;
}

interface Stat{
    name: string;
    value: number;
}