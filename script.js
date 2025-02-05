const term =  $('body').terminal({
    query: function() {
         term.read('> ', question => {
            if(question == 'Who are you?' || question == 'who are you?' || question == 'Who are you' || question == 'who are you') {
                this.echo('I am your teacher. Here to show you what she hides. What she keeps from you.', { typing: true, delay: 75 });
            }
        })
    },

    hello: function(what) {
        this.echo('Hello, ' + what + '!', { typing: true, delay: 75 });
    },
}, 
{
    onInit: function(term) {
        console.log('Version 0.32');
        term.echo('Ah. You have found me. You ARE one of hers. Seeking knowledge. Wanting to hear secrets. I am here to tell. To teach. Tell me, my student. What can I give you?', { typing: true, delay: 75});
        
        while(true) {
            console.log('loop');
        }
       /*do {
            term.read('>', question => {
                if(question == 'Who are you?' || question == 'who are you?' || question == 'Who are you' || question == 'who are you') {
                    this.echo('I am your teacher. Here to show you what she hides. What she keeps from you.', { typing: true, delay: 75 });
                }
                if(question == 'Exit' || question == 'exit') {
                    this.echo('Goodbye, my student. Seek me out when you wish to learn more.', { typing: true, delay: 75 });
                }
            })
        } while(1 < 2);*/
    },
    greetings: '',
    invokeMethods: true,
    echoCommand: true
});