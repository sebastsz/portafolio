$(document).ready(function () {
    // Function to load and display the PDF in the iframe
    function loadPDF(pdfName) {
        let pdfPath = "/assets/" + pdfName + ".pdf";
        $("#pdfViewer").attr("src", pdfPath);
    }

    // Handle click on sidebar links
    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        // Remove active class from all links
        $(".nav-link").removeClass("active");
        // Add active class to the clicked link
        $(this).addClass("active");
        // Load and display the PDF in the main content
        loadPDF($(this).data("pdf"));

        // Collapse the sidebar on click (for mobile screens)
        if ($(window).width() <= 767) {
            $("#sidebar").collapse("hide");
        }
    });

    // Load the default PDF on page load (e.g., "portada")
    loadPDF("portada");
});
