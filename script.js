const term =  $('body').terminal({
    query: function() {
         term.read('> ', question => {
            if(question == 'Who are you?' || question == 'who are you?' || question == 'Who are you' || question == 'who are you') {
                this.echo('I am your teacher. Here to show you what she hides. What she keeps from you.', { typing: true, delay: 75 });
            }
        })
    }
}, 
{
    onInit: function(term) {
        console.log('Version 0.20');
        term.echo('Ah. You have found me. You ARE one of hers. Seeking knowledge. Wanting to hear secrets. I am here to tell. To teach. Tell me, my student. What can I give you?\nTo ask me questions type the command {query} followed by your question', { typing: true, delay: 75});
    },
    greetings: '',
    invokeMethods: true,
    echoCommand: true
});