import axios from 'axios';

const getRepos = async (language, page) => {
    // console.log('Service getting lang => ', language);
    console.log('Service is getting page => ', page);
    const response = await axios.get(
        'https://api.github.com/search/repositories?q=stars:%3E1+language:' +
      language +
      '&sort=stars&order=desc&type=Repositories&page=' + page
    );
    // console.log(response.data.items);
    return response.data;
};

export default getRepos;


