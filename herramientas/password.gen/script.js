// requires jQuery & jt.genkey.js

$(document).ready(function() {
    set_new_key();
});

function set_new_key() {
    var pwSize = $("#pwSize").val();
    var pwMode = $("#pwMode").val();
    if ($("#pwMin").val() == "1") {
        pwMin = true;
    } else {
        pwMin = false;
    }
    if ($("#pwMay").val() == "1") {
        pwMay = true;
    } else {
        pwMay = false;
    }
    if ($("#pwNum").val() == "1") {
        pwNum = true;
    } else {
        pwNum = false;
    }
    if ($("#pwSpe").val() == "1") {
        pwSpe = true;
    } else {
        pwSpe = false;
    }
    var genered = genkey(pwSize, pwMode, pwMin, pwMay, pwNum, pwSpe);
    $("#keyGen").text(genered);
    $("#keyGen").attr("onclick", "jtCopy(\"" + genered + "\")");
    is_color_hex(pwSize, pwMode, genered);
}

function setpwNum1(mode) {
    var pwSize = $("#pwSizeSet").val();
    $("#pwSize").val(pwSize);
}

function setpwNum2(mode) {
    var pwSize = $("#pwSize").val();
    $("#pwSizeSet").val(pwSize);
}

function SetpwMode(mode) {
    $("#pwMode").val(mode);
    switch (mode) {
        case "0":
            if ($("#pwNormalParams").hasClass("hide")) {
                $("#pwNormalParams").removeClass("hide");
            }
            if ($("#runApp").hasClass("hide")) {
                $("#runApp").removeClass("hide");
            }
            break;
        case "1":
            if (!$("#pwNormalParams").hasClass("hide")) {
                $("#pwNormalParams").addClass("hide");
            }
            if (!$("#runApp").hasClass("hide")) {
                $("#runApp").addClass("hide");
            }
            break;
    }
    set_new_key();
}

function is_color_hex(pwSize, pwMode, genered) {
    if (pwSize == "6") {
        if (pwMode == "1") {
            $("#runApp").removeClass("hide");
            $("#runApp").attr("style", "background-color: #" + genered + "; width: 100%; text-align: center; padding: 1rem 0; font-weight: bold; font-size: 1.8rem; cursor: pointer;");
            $("#runApp").attr("onclick", "jtCopy(\"#" + genered + "\")");
            $("#runApp").text("#" + genered);
        } else {
            if (!$("#runApp").hasClass("hide")) {
                $("#runApp").addClass("hide");
            }
        }
    } else {
        if (!$("#runApp").hasClass("hide")) {
            $("#runApp").addClass("hide");
        }
    }
}

function setpwMin(enabled) {
    if (enabled) {
        $("#pwMinSet").attr("onclick", "setpwMin(false)");
        $("#pwMin").val(1);
    } else {
        $("#pwMinSet").attr("onclick", "setpwMin(true)");
        $("#pwMin").val(0);
    }
}

function setpwMay(enabled) {
    if (enabled) {
        $("#pwMaySet").attr("onclick", "setpwMay(false)");
        $("#pwMay").val(1);
    } else {
        $("#pwMaySet").attr("onclick", "setpwMay(true)");
        $("#pwMay").val(0);
    }
}

function setpwNum(enabled) {
    if (enabled) {
        $("#pwNumSet").attr("onclick", "setpwNum(false)");
        $("#pwNum").val(1);
    } else {
        $("#pwNumSet").attr("onclick", "setpwNum(true)");
        $("#pwNum").val(0);
    }
}

function setpwSpe(enabled) {
    if (enabled) {
        $("#pwSpeSet").attr("onclick", "setpwSpe(false)");
        $("#pwSpe").val(1);
    } else {
        $("#pwSpeSet").attr("onclick", "setpwSpe(true)");
        $("#pwSpe").val(0);
    }
}
