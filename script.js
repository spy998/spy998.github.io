const term =  $('body').terminal({
    query: function(i) {
        if(i == 'Who are you?' || i == 'who are you?' || i == 'Who are you' || i == 'who are you') {
            this.echo('I am your teacher. Here to show you what she hides. What she keeps from you. [[ x ]]', { typing: true, delay: 75 });
        }
        else if(i == 'hello' || i == 'Hello') {
            this.echo('Hello, my student. What can I teach you today?', { typing: true, delay: 75 });
        }
        else if(i == 'roll' || i == 'Roll') {
            this.echo('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { typing: true, delay: 75 });
        }
        else {
            this.echo('Answer out of bounds...', { typing: true, delay: 75 });
        }
    }
}, 
{
    onInit: function(term) {
        console.log('Version 0.36');
        term.echo('To begin, type query, then your question surrounded by quotes.', { typing: true, delay: 75 });
        //term.echo('Ah. You have found me. You ARE one of hers. Seeking knowledge. Wanting to hear secrets. I am here to tell. To teach. Tell me, my student. What can I give you?', { typing: true, delay: 75});
        
    },
    greetings: '',
    invokeMethods: true,
    echoCommand: true,
    preventloops: false
});