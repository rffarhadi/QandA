import { QuestionData } from "../../data/QuestionData";
import styles from '../../styling/Question.module.css';

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

export const Question = ({ data, showContent=true }: Props) => (
    <div className={styles.container}>
        <div>
            {data.title}
        </div>
        {showContent && (
        <div className={styles.containerOptional}>{data.content.length > 50 ?
            `${data.content.substring(0, 50)}`
            : data.content}
        </div>
        )}
        <div className={styles.containerAsk}>
            {`Asked by ${data.userName} on
          ${data.created.toLocaleDateString()} 
          ${data.created.toLocaleTimeString()}`}
        </div>
    </div>
);
