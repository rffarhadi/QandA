import { QuestionData } from "../../data/QuestionData";
import { Question } from "./Question";
import '../../styling/QuestionList.module.css';
interface Props {
    data: QuestionData[];
    renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data, renderItem }: Props) =>
    <ul>
        {data.map(question => (
            <li key={question.questionId}>
                {renderItem ? renderItem(question) : <Question data={question} />}
            </li>
        ))}
    </ul>