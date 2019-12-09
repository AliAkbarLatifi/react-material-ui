import Service from 'service';

const QuestionsAPI = {};

QuestionsAPI.getQuestions = (url) => {
    return Service.get(url);
};

export default QuestionsAPI;
