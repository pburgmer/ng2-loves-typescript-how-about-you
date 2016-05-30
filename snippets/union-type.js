function logMessages(messages) {
    if (messages.length) {
        messages.forEach(function (message) {
            console.log(message.trim());
        })
    }
    else {
        console.log(messages.trim());
    }
}

logMessages("test");
logMessages(["test1", "test2"]);