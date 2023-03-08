$(document).ready(function () {
    document.querySelector("#search_input").addEventListener('input', filterList);
    document.querySelector("#category").addEventListener('change', filterList);

    document.querySelector("#advanced_search_button").addEventListener('click', toggleAdvancedSearch);

    function filterList() {
        let hidden_stores = 0;
        $("li").each(function () {
            if (($(this).text().toLowerCase().includes($("#search_input").val().toLowerCase()) && !$("#category").val()) || ($(this).text().toLowerCase().includes($("#search_input").val().toLowerCase()) && $(this).data("tag").includes($("#category").val())) || (!$("#search_input").val() && $(this).data("tag").includes($("#category").val()))) {
                $(this).css("display", "");
            } else {
                $(this).css("display", "none");
                hidden_stores++
            }
        })
        if (hidden_stores == $("li").length) {
            $("#no_results").css("display", "block");
        } else {
            $("#no_results").css("display", "")
        }
    }

    function toggleAdvancedSearch() {
        $(".advanced_search").toggleClass("advanced_search_show");
    }
})