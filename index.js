function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener(); // Ensure the function is called to attach the event listener
