import {Choice} from "./choice";
/**
 * Created by NB20067 on 27-02-2017.
 */
export class Question {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: Choice[];
}
