import { Author } from "./author";
import { Genre } from "./genre";

export interface Book{
    [x: string]: any;
    id: string;
    title: string;
    genre: Genre;
    author: Author;
    imgUrl: string;
    description: string;
    status: string;
    publishedDate: Date;
}