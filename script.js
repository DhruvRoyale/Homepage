function redirect() {
    let id = event.srcElement.id

    switch (id) {
        case 'dots-and-boxes':
            console.log("redirect please")
            window.location.href = "https://dhruvroyale.github.io/Dots-and-Boxes";
            break;

        case 'connect-four':
            window.location.href = "https://dhruvroyale.github.io/Connect-Four";
            break;

        case 'tic-tac-toe':
            window.location.href = "https://dhruvroyale.github.io/Tic-Tac-Toe";
            break;

        case 'hangman':
            window.location.href = "https://dhruvroyale.github.io/Hangman";
            break;

        case 'tambola':
            window.location.href = "https://dhruvroyale.github.io/Tambola-Number-Generator";
            break;
    }
}