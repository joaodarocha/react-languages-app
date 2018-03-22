import axios from 'axios';

const getRepos = async language => {
    const response = await axios.get(
        'https://api.github.com/search/repositories?q=stars:%3E1+language:' +
      language +
      '&sort=stars&order=desc&type=Repositories'
    );
    console.log(response.data.items);
    return response.data.items;
};

export default getRepos;

/* 
Tratamento de erros:
Sem acesso à Internet
Deu timetout
Deu erro ao fazer o fetch

Improvements:
Quando está a carregar aparecer o "Loading.." 
*/
