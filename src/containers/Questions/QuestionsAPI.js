import Service from 'serviceAPI';

const QuestionsAPI = {};

QuestionsAPI.getQuestions = (url) => {
    return Service.get(url);
};

export default QuestionsAPI;
