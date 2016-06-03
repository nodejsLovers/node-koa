import {Pipe} from '@angular/core';

@Pipe({
    name: "typography"
})
export class typographyPipe {
    transform(value, data) {
        var col = 3;
        if (document.documentElement.clientHeight < 1200) {
            col = 3
        } else
            if (document.documentElement.clientHeight < 1400) {
                col = 4
            }
            else if (1200 < document.documentElement.clientHeight) {
                col = 5
            }
        for (var i = 0; i < value.length; i++) {
            if (i % 2 == 0) {
                value[i].type = "large"
            }
            if (i % 2 == 1) {
                value[i].type = "small"
            }
        }
        var newValue = { "first": [], "second": [], "third": [], "four": [], "five": [] };

        var colNum = Math.ceil(value.length / col);

        for (var i = 0; i < value.length; i++) {
            if (i < colNum) {
                newValue.first.push(value[i]);

            } else
                if (i < colNum * 2) {
                    newValue.second.push(value[i]);

                } else if (i < colNum * 3) {
                    newValue.third.push(value[i]);
                } else if (i < colNum * 4) {
                    newValue.four.push(value[i]);
                } else {
                    newValue.five.push(value[i]);
                }
        }
        for (var i = 0; i < newValue.second.length; i++) {
            if (i % 2 == 0) {
                newValue.second[i].type = "small"

            }
            if (i % 2 == 1) {
                newValue.second[i].type = "large"
            }
        }
        for (var i = 0; i < newValue.four.length; i++) {
            if (i % 2 == 0) {
                newValue.four[i].type = "small"

            }
            if (i % 2 == 1) {
                newValue.four[i].type = "large"
            }
        }
        if (colNum % 2 == 1) {
            newValue.first[colNum - 1].type = "small";
            if (value.length % 3 == 0) {
                newValue.third[colNum - 1].type = "small";
            }

        }

        return newValue[data];

    }
}
