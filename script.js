const term =  $('body').terminal({
    q: function() {
         term.read('> ', question => {
            if(question == 'Who are you?' || question == 'who are you?' || question == 'Who are you' || question == 'who are you') {
                this.echo('I am your teacher. Here to show you what she hides. What she keeps from you. [[ q ]]', { typing: true, delay: 75 });
            }
            if(question == 'hello' || question == 'Hello') {
                this.echo('Hello, my student. What can I teach you today? [[ q ]]', { typing: true, delay: 75 });
            }
            if(question == 'roll' || question == 'Roll') {
                this.echo('https://www.youtube.com/watch?v=dQw4w9WgXcQ [[ q ]]', { typing: true, delay: 75 });
            }
        })
    },
}, 
{
    onInit: function(term) {
        console.log('Version 0.33');
        this.echo('[[ q ]]');
        //term.echo('Ah. You have found me. You ARE one of hers. Seeking knowledge. Wanting to hear secrets. I am here to tell. To teach. Tell me, my student. What can I give you?', { typing: true, delay: 75});
        
    },
    greetings: '',
    invokeMethods: true,
    echoCommand: true
});