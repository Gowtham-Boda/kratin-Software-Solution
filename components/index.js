const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const age = document.querySelector('input[name="q1"]:checked');
  const diabetes = document.querySelector('input[name="q2"]:checked');
  const highBloodPressure = document.querySelector('input[name="q3"]:checked');
  const stroke = document.querySelector('input[name="q4"]:checked');
  const heartAttack = document.querySelector('input[name="q5"]:checked');
  let message = "";
  if (
    age === null ||
    diabetes === null ||
    highBloodPressure === null ||
    stroke === null ||
    heartAttack === null
  ) {
    message = "Please answer all the questions before submitting.";
  } else {
    message += "\n\n";
    if (age.value === "a") {
      message += "You are in the age range of 65-70.\n\n";
    } else if (age.value === "b") {
      message += "You are in the age range of 71-75.\n\n";
    } else if (age.value === "c") {
      message += "You are in the age range of 76-80.\n\n";
    } else if (age.value === "d") {
      message += "You are 81 or older.\n\n";
    }
    if (diabetes.value === "a") {
      message +=
        "You have diabetes. Make healthy eating and physical activity part of your daily routine. Maintain a healthy weight.\n\n";
    }
    if (highBloodPressure.value === "a") {
      message +=
        "You have high blood pressure. Don't eat or drink anything 30 minutes before you take your blood pressure.Empty your bladder before your reading.\n\n";
    }
    if (stroke.value === "a") {
      message +=
        "If you have had a stroke in the past, Foods high in potassium, such as sweet and white potatoes, bananas, tomatoes, prunes, melon and soybeans. it can protect you from stokes.\n\n";
    }
    if (heartAttack.value === "a") {
      message +=
        "If you have had a heart attack in the past, follow these Get the right amount of sleep, Get regular eye exams, eat right and excerices.\n\n";
    }
  }
  const messageElement = document.getElementById("message");
  const responseElement = document.getElementById("response");
  responseElement.textContent =
    "Based on your responses We observed and follow these basic tips that can helpful for your health :";
  responseElement.style.fontWeight = "bold";
  responseElement.style.fontSize = "30px";
  messageElement.textContent = message;
  messageElement.style.display = "block";
});

const form1 = document.getElementById("appointment-form");
const heading = document.getElementById("heading");
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  let result = "";
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const reason = document.getElementById("reason").value;
  console.log(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nReason: ${reason}`
  );
  result = `Your Booking Details:  \nName: ${name}, \nEmail: ${email}, \nPhone: ${phone}, \nDate: ${date}, \nTime: ${time}, \nReason: ${reason}`;
  heading.textContent = result;
  heading.style.fontWeight = "bold";
  alert("Appointment booked successfully!");
});
