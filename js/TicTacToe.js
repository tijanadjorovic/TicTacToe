    $(document).ready(function() {
        var cells;

        function refresh() {

            $("#div").remove("table");
            var table = $("<table>")
            var tr;
            $.each(cells, function(i) {
                if (!(i % 3) || !tr) {
                    tr = $("<tr>");
                };
                var td = $("<td>");
                td.attr("id", "cell_" + i);
                td.html(cells[i]);
                td.click(function() {
                    $("#result").text("You've clicked on cell number " + $(this).attr("id").split("_")[1] + ".");
                })
                table.append(tr.append(td));
            });
            $("#div").append(table);
        }

        $("#start").click(function() {
            cells = ["", "", "", "", "", "", "", "", ""];
            refresh();
        })

    })