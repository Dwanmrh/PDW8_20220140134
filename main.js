document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("friendForm");
  const modalOutput = document.getElementById("formOutput");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const birthdate = document.getElementById("birthdate").value;
    const friendshipStatus = document.querySelector(
      'input[name="friendshipStatus"]:checked'
    ).value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = [];
    const hobbiesCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    hobbiesCheckboxes.forEach(function (checkbox) {
      hobbies.push(checkbox.value);
    });

    const outputHTML = `
            <p>Nama: ${name}</p>
            <p>Usia: ${age}</p>
            <p>Tanggal Lahir: ${birthdate}</p>
            <p>Status Pertemanan: ${friendshipStatus}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Hobi: ${hobbies.join(", ")}</p>
        `;
    modalOutput.innerHTML = outputHTML;

    const modal = new bootstrap.Modal(document.getElementById("outputModal"));
    modal.show();
  });
});
