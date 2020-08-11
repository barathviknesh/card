// var a;

$(document).ready(function main() {
    $.ajax({
        url: "data.json",
        type: "GET",
        success: function (respData) {
            info = respData;
            console.log(info);
            // =============each function==============
            $(info).each(function (i, obj) {

                // var a = obj._source.volume;

                // =====================null to zero======================================
                if (obj._source.volume == null) {
                    obj._source.volume = 0;
                }

                if (obj._source.issue == null) {
                    obj._source.issue = 0;
                }

                // =================================first word=======================================

                // var str = obj._source.stage.assigned.to;
                // if (obj._source.stage.assigned.to == null || obj._source.stage.assigned.to == "" || obj._source.stage.assigned.to == undefined) {
                //     obj._source.stage.assigned.to = "exeter";
                //     obj._source.stage.assigned.to[0].toUpperCase();
                // }
                // var res = obj._source.stage.assigned.to[0].toUpperCase();




                // console.log(i, "i", obj._source.id, "obj");
                var cardContent = '<div class = "parentContent">' +
                    '<div class ="edit">' + '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
                    + '</div>' +
                    '<div class = "firstContent">' + '<p class= "p1 phead">' + obj._source.id + '</p>' + '<p class= "p1 italic">' + obj._source.articleType + '</p>' + '<p class ="pTitle p1">' + obj._source.title + '</p>' + '</div>' +
                    '<div class = "secoundContent">' + '<p class= "p1 volume">VOL .  ' + obj._source.volume + '&nbsp;</p>' + '<p class= "p1 issue"> | ISS . ' + obj._source.issue + '</p>' + '<p class = "statusButton">' + obj._source.stageName + '</p>' + '</div>' +
                    // '<div class = "res-circle">' + '<P>' + uv + '</P>' + '</div>' +
                    // '<div></div>' +
                    '<div class = "thirdContent">' +
                    // '<span class="dot">' + obj._source.stage.assigned.to + '</span>' +
                    '<i class="fa fa-briefcase i" aria-hidden="true"></i>' +
                    '<i class="fa fa-file i" aria-hidden="true"></i>' +
                    '<i class="fa fa-ticket i" aria-hidden="true"></i>' +



                    '</div>' +
                    // '<div class = "fourthContent"></div>' +
                    '</div>'

                // ==========function========================
                // a = obj._source.volume;
                // if (a == "null") {
                //     a = "0";
                // }
                // =========append to container div==========

                $(".container").append(cardContent);
            })
        }
        // ==============success end==================

    });
    // =====================ajax end==================

});