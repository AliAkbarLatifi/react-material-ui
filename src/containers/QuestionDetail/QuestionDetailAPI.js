import Service from 'service';

const QuestionDetailAPI = {};

QuestionDetailAPI.getDetail = (url) => {
    return Service.get(url);
};

QuestionDetailAPI.saveVote = (url, data) => {
    return Service.post(url, data);
};

export default QuestionDetailAPI;
