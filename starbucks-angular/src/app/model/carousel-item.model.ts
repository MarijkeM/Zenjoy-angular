export class CarouselItem{
    title: string;
    info: string;
    imgUrl: string;
    isFirst: boolean;

    constructor(title: string, info: string, imgUrl: string, isFirst: boolean){
        this.title = title;
        this.info = info;
        this.imgUrl = imgUrl;
        this.isFirst = isFirst;
    }
}