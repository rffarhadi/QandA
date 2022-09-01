import { useEffect, useState } from "react";
import { getUnanswerdQuestions, QuestionData } from "../data/QuestionData";
import { Page } from "./page/Page";
import { PageTitle } from "./page/PageTitle";
import { QuestionList } from "./question/QuestionList";
import styles from '../styling/HomePage.module.css';
import { Button } from "@mui/material";



export const HomePage = () => {
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [questionLoading, setQuestionLoading] = useState(true);
    useEffect(() => {
        const doGetUnansweredQuestions = async () => {
            const unansweredQuestions = await getUnanswerdQuestions();
            setQuestions(unansweredQuestions);
            setQuestionLoading(false);
        };
        doGetUnansweredQuestions();
    }, []);
    const handleAskQuestionClick = () => {
        console.log('TODO - move to the AskPage');
    };
    return (
        <Page>
            <div className={styles.container}>
                <PageTitle>Unanswered Questions</PageTitle>
                <Button variant="contained"  onClick={handleAskQuestionClick}>
                    Ask a question
                </Button>
            </div>
            {questionLoading ? (<div>Loading ...</div>) : (
                <QuestionList data={questions} />
            )}
        </Page>
    )

};


