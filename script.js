const bookingModal = document.getElementById("bookingModal");

        function openBookingModal() {
        const formBox = document.getElementById("bookingFormBox");

        bookingModal.classList.remove("hidden");
        bookingModal.classList.add("flex");

        // Small delay so the browser can start the animation
        setTimeout(() => {
        formBox.classList.remove(
            "opacity-0",
            "scale-95",
            "translate-y-4"
        );

        formBox.classList.add(
            "opacity-100",
            "scale-100",
            "translate-y-0"
        );
        }, 10);

        document.body.classList.add("overflow-hidden");
        }

        function closeBookingModal(event) {
        if (event && event.target !== bookingModal) {
        return;
        }

        const formBox = document.getElementById("bookingFormBox");

        formBox.classList.remove(
        "opacity-100",
        "scale-100",
        "translate-y-0"
        );

        formBox.classList.add(
        "opacity-0",
        "scale-95",
        "translate-y-4"
        );

        setTimeout(() => {
        bookingModal.classList.add("hidden");
        bookingModal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
        }, 300);
        }

        function sendBookingToWhatsApp(event) {
            event.preventDefault();

            
            const customerName = document
            .getElementById("customerName").value.trim();
            
            
            const selectedServices = Array.from(
                document.querySelectorAll('input[name="service"]:checked')
            ).map(service => service.value);

            if (selectedServices.length === 0) {
                alert("Please select at least one service.");
                return;
            }

            const carName = document.getElementById("carName").value.trim();
            const serviceDate = document.getElementById("serviceDate").value;
            const serviceTime = document.getElementById("serviceTime").value;

            const message =
`Hello Prime Motors,

I would like to book a car service.

*Username*
${customerName}

*Service Required:*
${selectedServices.map(service => "• " + service).join("\n")}

*Car Name:*
${carName}

*Preferred Date:*
${serviceDate}

*Preferred Time:*
${serviceTime}

I will attach a recent photo of my car with this message.

Thank you.`;

            const whatsappNumber = "919939536053";
            const whatsappURL =
                "https://wa.me/" + whatsappNumber +
                "?text=" + encodeURIComponent(message);

            window.open(whatsappURL, "_blank");
        }

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape" && !bookingModal.classList.contains("hidden")) {
                closeBookingModal();
            }
        });

        const serviceDateInput = document.getElementById("serviceDate");
        serviceDateInput.min = new Date().toISOString().split("T")[0];