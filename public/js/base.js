/* Strict Mode */
"use strict";

/* Global Object Test
        --- NOTE ---
            The main function will run in here.
*/
if (window) {
    // Main Function
        /* Loop Counters */
        var i, j, k

        /* Global Object */
        window.name = document.getElementsByTagName("title")[0].textContent

        /* Document */
        document.dir = "ltr"

        /* <html> Element */
        document.getElementsByTagName("html")[0].lang = "en"
        document.getElementsByTagName("html")[0].translate = true

        /* Header (Jumbotron) */
            // If the header is not manually coded into the HTML
            if (document.getElementById("header") == undefined)
                document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin",
                    "<!-- Header -->" +
                    "<header class='jumbotron' id='header' style='height: 350px'> </header>\n")

        /* Navigation Panel */
            // Navigation Insertion Function
            function insertNavigation(element) {
                if (element == document.body || element == document.getElementsByTagName("html")[0])
                    var insertPosition = "afterbegin"
                else
                    var insertPosition = "afterend"

                // Insert the Navigation Panel
                element.insertAdjacentHTML(insertPosition,
                    "<!-- Navigation -->" +
                    "<nav id='navigation'>" +
                        "<div class='row'>" +
                            "<nav class='navbar navbar-default' role='navigation'>" +
                                "<ul class='nav'>" +
                                    "<li> <a id='home' href='../index.php'> Home </a> </li>" +
                                    "<li> <a id='article' href='article.php'> Articles </a> </li>" +
                                    "<li> <a id='' href='#'> Link C </a> </li>" +
                                    "<li> <a id='' href='#'> Link D </a> </li>" +
                                    "<li> <a id='' href='#'> Link E </a> </li>" +
                                "</ul>" +
                            "</nav>" +
                        "</div>" +
                    "</nav>\n")

                // Catch the Hyperlink List Items
                var navItemLink = document.querySelectorAll("#navigation a")
                    // If the file name has "index." in it
                    if (location.href.indexOf("index.") >= 0) {
                        // Alternate each hyperlink anchor reference
                            // #home
                            navItemLink[0].removeAttribute("href")
                            // #article
                            navItemLink[1].setAttribute("href", "articles/article.php")
                            // #
                            // #
                            // #
                    }
            }
            // Navigation Insertion Logic Test
                // If the navigation panel is not manually coded into the HTML
                if (document.getElementById("navigation") == undefined)
                    // If the jumbotron header still exists
                    if (document.getElementById("header") != undefined)
                        insertNavigation(document.getElementById("header"))
                    else
                        insertNavigation(document.getElementsByTagName("body")[0])

    /* Footer */
        // Insert a footer into the DOM
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",
            "<!-- Footer -->" +
            "<footer id='footer'>" +
                "YesToYouth consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                "<div class='copyright'>" +
                    "All rights reserved. &copy; YesToYouth 2017 - " + new Date().getFullYear() + "." +
                "</div>" +
            "</footer>")
} else {
    // Throw an error if the global 'window' object does not exist.
    throw new Error("This script does not function without the global 'window' object.")
}