    $(document).ready(function() {
        var cells;
        var move = 1;
        var play = true;
        var table;
        
        function refresh() {
            $("#div").empty("table");
            var table = $("<table>")
            table.attr("id", "board")
            var tr;
            $.each(cells, function(i) {
                if (!(i % 3) || !tr) {
                    tr = $("<tr>");
                };
                var td = $("<td>");
                td.attr("id", "cell_" + i);
                td.html(cells[i]);` `
                td.click(function() {
//               $("#result").text("You've clicked on cell number " + $(this).attr("id").split("_")[1] + ".");
                    
                    
                    
//------game status-----
                if ($(this).text()=="" && play) {
                        if (move%2==1) { $(this).append("X"); } 
                else { $(this).append("O"); }
//                move++;
                    if (gameCheck()!=-1 && gameCheck()!="") { 
	                   if (gameCheck()=="X") { $("#result").text("Player 1 wins!"); }
//        else { $("#result").text("Player 2 wins!"); }
                     if (gameCheck()=="O") { $("#result").text("Player 2 wins!"); }   
                        
                    if (move == 9 && gameCheck() != "X" && gameCheck() !="O"){ $("#result").text("nereseno!"); }                 
      }  
                   move++;  
    }
                })
                table.append(tr.append(td));
            });
            $("#div").append(table);
        }

//-----refresh-----
        $("#start").click(function() {
            cells = ["", "", "", "", "", "", "", "", ""];
            refresh();
        })
        
//-----checking td values-----
    function gameCheck() {
    var line1 = $("table tr:nth-child(1) td:nth-child(1)").text();
    var line2 = $("table tr:nth-child(1) td:nth-child(2)").text();
    var line3 = $("table tr:nth-child(1) td:nth-child(3)").text();
    var line4 = $("table tr:nth-child(2) td:nth-child(1)").text();
    var line5 = $("table tr:nth-child(2) td:nth-child(2)").text();
    var line6 = $("table tr:nth-child(2) td:nth-child(3)").text();
    var line7 = $("table tr:nth-child(3) td:nth-child(1)").text();
    var line8 = $("table tr:nth-child(3) td:nth-child(2)").text();
    var line9 = $("table tr:nth-child(3) td:nth-child(3)").text();
   
    if      ((line1==line2) && (line2==line3)) { return line3; }
    else if ((line4==line5) && (line5==line6)) { return line6; }	
    else if ((line7==line8) && (line8==line9)) { return line9; }
   
    else if ((line1==line4) && (line4==line7)) { return line7; }
    else if ((line2==line5) && (line5==line8)) { return line8; }
    else if ((line3==line6) && (line6==line9)) { return line9; }
   
    else if ((line1==line5) && (line5==line9)) { return line9; }
    else if ((line3==line5) && (line5==line7)) { return line7; }
    
    return -1;
  }

       
        
    })