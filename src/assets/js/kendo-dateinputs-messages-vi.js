kendo.culture("vi-VN");
kendo.ui.DatePicker.prototype.options.messages =
    $.extend(true, kendo.ui.DatePicker.prototype.options.messages, {
        "year": "năm",
        "month": "tháng",
        "day": "ngày",
        "weekday": "ngày trong tuần",
        "hour": "giờ",
        "minute": "phút",
        "second": "giây",
        "dayperiod": "SA/CH",
        "calendar": {
            "days": [
                "Chủ nhật",
                "Thứ hai",
                "Thứ ba",
                "Thứ tư",
                "Thứ năm",
                "Thứ sáu",
                "Thứ bảy"
            ],
            "daysabbr": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "months": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "AM": ["S", "s", "S"],
            "PM": ["C", "c", "C"],
            "eras": [
                { "name": "Sau CN", "start": null, "offset": 0 }
            ],
            "patterns": {
                "d": "d/M/yyyy",
                "D": "dddd, dd MMMM yyyy",
                "F": "dddd, dd MMMM yyyy h:mm:ss tt",
                "g": "d/M/yyyy h:mm tt",
                "G": "d/M/yyyy h:mm:ss tt",
                "m": "dd MMMM",
                "M": "dd MMMM",
                "s": "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                "t": "h:mm tt",
                "T": "h:mm:ss tt",
                "u": "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                "y": "MMMM yyyy",
                "Y": "MMMM yyyy"
            },
            "twoDigitYearMax": 2029,
            "patterns": {
                "d": "d/M/yyyy",
                "D": "dddd, dd MMMM yyyy",
                "F": "dddd, dd MMMM yyyy h:mm:ss tt",
                "g": "d/M/yyyy h:mm tt",
                "G": "d/M/yyyy h:mm:ss tt",
                "m": "dd MMMM",
                "M": "dd MMMM",
                "s": "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                "t": "h:mm tt",
                "T": "h:mm:ss tt",
                "u": "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                "y": "MMMM yyyy",
                "Y": "MMMM yyyy"
            },
            "firstDay": 0
        }
    });