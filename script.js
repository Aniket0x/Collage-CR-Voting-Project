document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked').value;
    document.getElementById('responseMessage').textContent = `Thank you for voting for ${selectedCandidate}!`;
});
