document.addEventListener("DOMContentLoaded", () => {
    const emailbtn = document.querySelector(".footer-mail");
    if(emailbtn) {
        emailbtn.addEventListener("click", (e) => {
            e.preventDefault();
            const email = "fanditiasurya@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                const teksori = emailbtn.innerHTML;
                emailbtn.innerHTML = "Email Copied!"
                setTimeout(() => {
                    emailbtn.innerHTML = teksori;
                }, 3000);
            });
        });
    }

    const Judul = document.title;
    window.addEventListener("blur", () => {
        document.title = "Let's Connect!";
    });
    window.addEventListener("focus", () => {
        document.title = Judul;
    });

    const copyright = document.querySelector(".copy-foot");
    if (copyright) {
        const TahunTerkini = new Date().getFullYear();
        copyright.innerHTML = '&copy; ${TahunTerkini} Fanditia Surya Kholik. Built with HTML, CSS, & JavaScript'
    }
});