//
import {openai} from './ai';

//? what is the message the user is sending. called completion because you are completing the sentance
export const runLLM = async ({
    userMessage,
}:{userMessage: string}) => {
    //this will call the api completion
    const response = await openai.chat.completions.create({
      //model: the bigger the number the newer the model. newer doesn't always mean better.
      model: 'gpt-4o-mini',
      //temperature: a measurement how creative you want the model to be //! don't put on anything other than .1 for now
      //meant to reduce the randomness
      temperature: 0.1,
      //messages: array of objects that represents the messages in the chat so far
      //always an object
      messages: [
        {role: 'user', content: userMessage}]
    })
    //this is what the ai responds back with
    return response.choices[0].message.content
}

//! instructor "this all you need to hit an ai. You have ai in your map now. Now its just manipulating it"