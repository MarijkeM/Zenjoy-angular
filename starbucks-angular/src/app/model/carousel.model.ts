import { CarouselItem } from "./carousel-item.model";

export class Carousel{
    name: string;
    items: CarouselItem[];

    constructor(name: string, items: CarouselItem[]){
        this.name = name;
        this.items = items;
    }
}